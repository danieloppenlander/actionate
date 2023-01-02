import React from "react";

import { Container, Row, Col } from "react-grid-system";

import { Goal, User } from "@prisma/client";

import Goals from "./Goals";

function Dashboard() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Goals />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
