import React, { useState } from 'react';
import ExpenseRecord from 'models/ExpenseRecord';
import { toDateString, toTimeString } from 'services/Utility';

const ExpenseRecordTr: React.VFC<{ data: ExpenseRecord }> = ({ data }) => {
  const [showDetailFlg, setShowDetailFlg] = useState(false);

  const switchFlg = () => {
    setShowDetailFlg(!showDetailFlg);
  };

  if (showDetailFlg) {
    return <>
      <tr onClick={switchFlg}>
        <td className="text-center">{toDateString(data.datetime)}</td>
        <td className="text-center">{data.debitData.type}</td>
        <td className="text-left">{data.debitData.name}</td>
        <td className="text-right">￥{data.debitData.amount}</td>
        <td className="text-center">{data.creditData.type}</td>
        <td className="text-left">{data.creditData.name}</td>
        <td className="text-right">￥{data.creditData.amount}</td>
        <td>{data.shop}</td>
      </tr>
      <tr onClick={switchFlg}>
        <td className="text-center">{toTimeString(data.datetime)}</td>
        <td className="text-center" colSpan={6}>コメント：{data.comment}</td>
        <td>経費申請：{data.isApplyed ? '○' : '×'}</td>
      </tr>
    </>;
  } else {
    return <tr onClick={switchFlg}>
      <td className="text-center">{toDateString(data.datetime)}</td>
      <td className="text-center">{data.debitData.type}</td>
      <td className="text-left">{data.debitData.name}</td>
      <td className="text-right">￥{data.debitData.amount}</td>
      <td className="text-center">{data.creditData.type}</td>
      <td className="text-left">{data.creditData.name}</td>
      <td className="text-right">￥{data.creditData.amount}</td>
      <td>{data.shop}</td>
    </tr>;
  }
}

export default ExpenseRecordTr;
