import React from 'react';
import ExpenseRecordTable from 'components/ExpenseRecordTable';
import ExpenseRecord from 'models/ExpenseRecord';
import { Col, Container, Row, Form } from 'react-bootstrap';

const App: React.VFC = () => {
  // サンプルデータ
  const dataArray: ExpenseRecord[] = [{
    datetime: 1623193200,
    debitData: {
      type: '消耗品費',
      name: '食料品',
      amount: 765,
    },
    creditData: {
      type: '現金',
      name: '電子マネー',
      amount: 765,
    },
    shop: 'コンビニ',
    comment: 'ジュース、菓子',
  },
  {
    datetime: 1624546800,
    debitData: {
      type: '地代家賃',
      name: '家賃',
      amount: 60000,
    },
    creditData: {
      type: '普通預金',
      name: '銀行',
      amount: 60000,
    },
    shop: '賃貸住宅',
    comment: '',
  }];

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <h1 className="text-center">my家計簿</h1>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Form>
            <Form.Group>
              <ExpenseRecordTable dataArray={dataArray} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
