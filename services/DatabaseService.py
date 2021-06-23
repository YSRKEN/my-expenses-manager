from abc import ABCMeta, abstractmethod
from typing import Dict, Any


class DatabaseService(metaclass=ABCMeta):
    # noinspection PyUnusedLocal
    @abstractmethod
    def __init__(self, option: Dict[str, Any] = None):
        pass
