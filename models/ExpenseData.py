from dataclasses import dataclass
from dataclasses_json import dataclass_json


@dataclass
@dataclass_json
class ExpenseData:
    type: str
    name: str
    amount: int
