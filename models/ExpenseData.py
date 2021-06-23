from dataclasses import dataclass
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExpenseData:
    type: str
    name: str
    amount: int
