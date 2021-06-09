import React from 'react';
import { Col, Container, Row, Form, Table } from 'react-bootstrap';

const App: React.VFC = () => {
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
                  <tr>
                    <td className="text-center">2021/06/09</td>
                    <td className="text-center">消耗品費</td>
                    <td className="text-left">食料品</td>
                    <td className="text-right">￥765</td>
                    <td className="text-center">現金</td>
                    <td className="text-left">電子マネー</td>
                    <td className="text-right">￥765</td>
                    <td>コンビニ</td>
                  </tr>
                  <tr>
                    <td className="text-center">2021/06/25</td>
                    <td className="text-center">地代家賃</td>
                    <td className="text-left">家賃</td>
                    <td className="text-right">￥60000</td>
                    <td className="text-center">普通預金</td>
                    <td className="text-left">銀行</td>
                    <td className="text-right">￥60000</td>
                    <td>賃貸</td>
                  </tr>
                </tbody>
              </Table>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
