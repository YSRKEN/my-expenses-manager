import React, { useEffect, useState } from 'react';
import ExpenseRecordTable from 'components/ExpenseRecordTable';
import ExpenseRecord from 'models/ExpenseRecord';
import { Col, Container, Row, Form } from 'react-bootstrap';

const SERVER_URL = 'http://localhost:5000';

const App: React.VFC = () => {
  const [dataArray, setDataArray] = useState<ExpenseRecord[]>([]);

  useEffect(() => {
    fetch(SERVER_URL + '/expenses').then((res) => {
      return res.json();
    }).then((res) => {
      setDataArray(res);
    });
  }, []);

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
