from sqlite3 import connect
from typing import Dict, Any, List, Tuple

from services.DatabaseService import DatabaseService


class SQLiteDatabaseService(DatabaseService):
    def __init__(self, option: Dict[str, Any]):
        self.filename = option['filename']
        self.execute_query('''CREATE TABLE IF NOT EXISTS "shop" (
            "id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            "name"	TEXT NOT NULL
        )''')
        self.execute_query('''CREATE TABLE IF NOT EXISTS "expense_type" (
            "id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            "name"	TEXT NOT NULL UNIQUE
        )''')
        self.execute_query('''CREATE TABLE IF NOT EXISTS "expense_name" (
            "id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            "name"	TEXT NOT NULL,
            "type_id"	INTEGER NOT NULL,
            FOREIGN KEY("type_id") REFERENCES "expense_type"("id")
        )''')
        self.execute_query('''CREATE TABLE IF NOT EXISTS "expense_data" (
            "id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            "name_id"	INTEGER NOT NULL,
            "amount"	INTEGER NOT NULL,
            FOREIGN KEY("name_id") REFERENCES "expense_name"("id")
        )''')
        self.execute_query('''CREATE TABLE IF NOT EXISTS "expense_record" (
            "id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            "datetime"	INTEGER NOT NULL,
            "debit_id"	INTEGER NOT NULL,
            "credit_id"	INTEGER NOT NULL,
            "shop_id"	INTEGER NOT NULL,
            "is_applyed"	INTEGER NOT NULL,
            "comment"	TEXT NOT NULL,
            FOREIGN KEY("debit_id") REFERENCES "expense_data"("id"),
            FOREIGN KEY("credit_id") REFERENCES "expense_data"("id"),
            FOREIGN KEY("shop_id") REFERENCES "shop"("id")
        )''')

    def execute_query(self, query: str, parameter: List[Tuple] = None):
        with connect(self.filename) as con:
            cur = con.cursor()
            if parameter is not None:
                cur.execute(query, parameter)
            else:
                cur.execute(query)
            con.commit()

    def select_query(self, query: str, parameter: List[Tuple] = None) -> List[Dict[str, any]]:
        with connect(self.filename) as con:
            cur = con.cursor()
            if parameter is not None:
                cur.execute(query, parameter)
            else:
                cur.execute(query)

            # cur.descriptionに列名、cur.fetchall()で実データが取れるので、変換する
            column_list: List[str] = [x[0] for x in cur.description]
            output: List[Dict[str, any]] = []
            for record in cur.fetchall():
                temp = {}
                for key, val in zip(column_list, record):
                    temp[key] = val
                output.append(temp)
        return output
