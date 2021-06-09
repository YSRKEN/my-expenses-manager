import React from 'react';
import ExpenseRecord from 'models/ExpenseRecord';
import { toDateString } from 'services/Utility';

const ExpenseRecordTr: React.VFC<{ data: ExpenseRecord }> = ({ data }) =>
  <tr>
    <td className="text-center">{toDateString(data.datetime)}</td>
    <td className="text-center">{data.debitData.type}</td>
    <td className="text-left">{data.debitData.name}</td>
    <td className="text-right">￥{data.debitData.amount}</td>
    <td className="text-center">{data.creditData.type}</td>
    <td className="text-left">{data.creditData.name}</td>
    <td className="text-right">￥{data.creditData.amount}</td>
    <td>{data.shop}</td>
  </tr>;

export default ExpenseRecordTr;
