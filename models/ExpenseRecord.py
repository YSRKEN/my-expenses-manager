from dataclasses import dataclass
from dataclasses_json import dataclass_json

from models.ExpenseData import ExpenseData


@dataclass_json
@dataclass
class ExpenseRecord:
    datetime: int
    debitData: ExpenseData
    creditData: ExpenseData
    shop: str
    isApplyed: bool
    comment: str
