import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import { SessionChip } from "./SessionChip";
import { Col, Container, Row } from "react-grid-system";
export default function Header() {
  const { data: session } = useSession();

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
