import React from "react";

import {Col, Container, Row} from "react-grid-system";

import Goals from "./Goals";

export default function Dashboard() {
  return (
      <Container>
        <Row>
          <Col md={6}>
            <Goals/>
          </Col>
        </Row>
      </Container>
  );
}
