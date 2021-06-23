from abc import ABCMeta, abstractmethod
from typing import Dict, Any, List, Tuple


class DatabaseService(metaclass=ABCMeta):
    # noinspection PyUnusedLocal
    @abstractmethod
    def __init__(self, option: Dict[str, Any] = None):
        pass

    @abstractmethod
    def execute_query(self, query: str, parameter: List[Tuple] = None):
        pass

    @abstractmethod
    def select_query(self, query: str, parameter: List[Tuple] = None) -> List[Dict[str, any]]:
        pass
