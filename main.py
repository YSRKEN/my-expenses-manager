from flask import Flask, jsonify
from flask_cors import CORS

from services.DatabaseService import DatabaseService
from services.SQLiteDatabaseService import SQLiteDatabaseService

app = Flask(__name__)
db: DatabaseService = SQLiteDatabaseService({'filename': 'database.db'})
CORS(app)


@app.route('/expenses', methods=['GET'])
def read_expenses_list():
    return jsonify([])


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
