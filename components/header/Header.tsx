import React from "react";

import { Col, Container, Row } from "react-grid-system";
import SessionChip from "./SessionChip";

export default function Header() {
  return (
    <Container id={"header"}>
      <Row>
        <Col md={6}>
          <h1>
            <span className={"text-orange"}>Actionate</span> / Dashboard
          </h1>
        </Col>
        <Col md={6}>
          <span className={"right"}>
            <SessionChip />
          </span>
        </Col>
      </Row>
    </Container>
  );
}
