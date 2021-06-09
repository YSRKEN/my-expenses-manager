import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const App: React.VFC = () => {
  return (
    <Container>
      <Row className="my-3">
        <Col>
          <h1 className="text-center">my家計簿</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
