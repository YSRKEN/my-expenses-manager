from typing import List

from flask import Flask, jsonify
from flask_cors import CORS

from models.ExpenseData import ExpenseData
from models.ExpenseRecord import ExpenseRecord
from services.DatabaseService import DatabaseService
from services.SQLiteDatabaseService import SQLiteDatabaseService

app = Flask(__name__)
db: DatabaseService = SQLiteDatabaseService({'filename': 'database.db'})
CORS(app)


@app.route('/expenses', methods=['GET'])
def read_expenses_list():
    raw_data = db.select_query('''SELECT R.id, R.datetime, T1.name AS debit_type, N1.name AS debit_name,
                                D1.amount AS debit_amount, T2.name AS credit_type, N2.name AS credit_name,
                                D2.amount AS credit_amount, S.name AS shop, R.is_applyed,
                                R.comment FROM expense_record AS R
                                INNER JOIN expense_data AS D1 ON R.debit_id = D1.id
                                INNER JOIN expense_data AS D2 ON R.credit_id = D2.id
                                INNER JOIN expense_name AS N1 ON D1.name_id = N1.id
                                INNER JOIN expense_name AS N2 ON D2.name_id = N2.id
                                INNER JOIN expense_type AS T1 ON N1.type_id = T1.id
                                INNER JOIN expense_type AS T2 ON N2.type_id = T2.id
                                INNER JOIN shop AS S ON R.shop_id = S.id
                                ORDER BY R.datetime, R.id''')
    output: List[ExpenseRecord] = []
    for raw_record in raw_data:
        debit_data = ExpenseData(
            type=raw_record['debit_type'],
            name=raw_record['debit_name'],
            amount=raw_record['debit_amount']
        )
        credit_data = ExpenseData(
            type=raw_record['credit_type'],
            name=raw_record['credit_name'],
            amount=raw_record['credit_amount']
        )
        output.append(ExpenseRecord(
            datetime=raw_record['datetime'],
            debitData=debit_data,
            creditData=credit_data,
            shop=raw_record['shop'],
            isApplyed=raw_record['is_applyed'],
            comment=raw_record['comment']
        ))
    return jsonify(ExpenseRecord.schema().dump(output, many=True))


@app.route('/expenses', methods=['POST'])
def create_expense():
    return jsonify({
        'result': 'OK'
    })


@app.route('/expenses', methods=['PUT'])
def update_expense():
    return jsonify({
        'result': 'OK'
    })


@app.route('/expenses', methods=['DELETE'])
def delete_expense():
    return jsonify({
        'result': 'OK'
    })


if __name__ == "__main__":
    app.run(debug=True)
