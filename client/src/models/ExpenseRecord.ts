import ExpenseData from "models/ExpenseData";

interface ExpenseRecord {
  // レコードの時刻 (UNIX秒)
  // この列は重複も許容される
  datetime: number;
  // 借方のデータ
  debitData: ExpenseData;
  // 貸方のデータ
  creditData: ExpenseData;
  // 店舗名
  shop: string;
  // 経費申請できるならtrue
  isApplyed: boolean;
  // コメント
  comment: string;
}

export default ExpenseRecord;
