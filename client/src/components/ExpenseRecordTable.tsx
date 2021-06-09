import React from 'react';
import { Table } from 'react-bootstrap';

import ExpenseRecord from 'models/ExpenseRecord';
import ExpenseRecordTr from 'components/ExpenseRecordTr';

const ExpenseRecordTable: React.VFC<{ dataArray: ExpenseRecord[] }> = ({ dataArray }) =>
  <Table bordered striped>
    <thead>
      <tr>
        <th rowSpan={2} className="align-middle text-center">日付</th>
        <th colSpan={3} className="text-center bg-light">借方</th>
        <th colSpan={3} className="text-center bg-light">貸方</th>
        <th rowSpan={2} className="align-middle text-center">店舗</th>
      </tr>
      <tr>
        <th className="text-center">勘定科目</th>
        <th className="text-center">名称</th>
        <th className="text-center">金額</th>
        <th className="text-center">勘定科目</th>
        <th className="text-center">名称</th>
        <th className="text-center">金額</th>
      </tr>
    </thead>
    <tbody>
      {dataArray.map((data, i) => {
        return <ExpenseRecordTr data={data} key={i} />;
      })}
    </tbody>
  </Table>;

export default ExpenseRecordTable;
