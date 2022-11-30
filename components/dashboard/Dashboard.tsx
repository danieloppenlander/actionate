import React from "react";
import { useState } from "react";

import { Container, Row, Col } from "react-grid-system";

import { User } from "../../interfaces/User";
import { Goals } from "../../interfaces/Goal";

import GoalDisplay from "./GoalDisplay";

function Dashboard() {
  const [user] = useState<User>({ name: "Daniel" });
  const [goals] = useState<Goals>({
    goals: [
      {
        name: "Exercise",
        description: "This is a description. It is longer than the title.",
        isCompleted: true,
        isDaily: true,
      },
      {
        name: "Sleep 8 hours",
        description: "This is a description. It is longer than the title.",
        isCompleted: true,
        isDaily: true,
      },
      {
        name: "test1",
        description: "This is a description. It is longer than the title.",
        isCompleted: false,
        isDaily: true,
      },
      {
        name: "test1",
        description: "This is a description. It is longer than the title.",
        isCompleted: true,
        isDaily: false,
      },
      {
        name: "test1",
        description: "This is a description. It is longer than the title.",
        isCompleted: false,
        isDaily: false,
      },
      {
        name: "test1",
        description: "This is a description. It is longer than the title.",
        isCompleted: false,
        isDaily: false,
      },
    ],
  });

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <h1>
            <span className={"text-orange"}>Actionate</span> / Dashboard
          </h1>
          <p>Logged in as {user.name}</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <GoalDisplay goals={goals.goals} />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
