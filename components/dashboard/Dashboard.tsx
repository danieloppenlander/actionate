import React from "react";

import { Container, Row, Col } from "react-grid-system";

import { Goal, User } from "@prisma/client";

import Goals from "./Goals";

interface DashboardProps {
  user: User;
  goals: Goal[];
}

function Dashboard({ user, goals }: DashboardProps) {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <h1>
            <span className={"text-orange"}>Actionate</span> / Dashboard
          </h1>
          <p>Logged in as {user.email}</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Goals goals={goals} user={user} />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
