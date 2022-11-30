import React from "react";

import { Goals } from "../../interfaces/Goal";

function GoalDisplay({ goals }: Goals) {
  return (
    <div>
      {goals.map(({ name, description, isCompleted, isDaily }) => {
        return (
          <div className={"card border"}>
            <h2>{name}</h2>
            <h3>
              <span
                className={
                  "chip " + (isCompleted ? "gradient-teal" : "gradient-orange")
                }
              >
                {isCompleted ? "Complete" : "Incomlete"}
              </span>
              <span
                className={
                  "chip " + (isDaily ? "gradient-purple" : "gradient-blue")
                }
              >
                {isDaily ? "Daily Task" : "Sprint Task"}
              </span>
            </h3>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default GoalDisplay;
