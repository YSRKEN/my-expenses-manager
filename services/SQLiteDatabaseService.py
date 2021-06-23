from typing import Dict, Any

from services.DatabaseService import DatabaseService


class SQLiteDatabaseService(DatabaseService):
    def __init__(self, option: Dict[str, Any]):
        self.filename = option['filename']
