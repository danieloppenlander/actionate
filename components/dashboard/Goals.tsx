import React, { useState } from "react";

import { Goal, User } from "@prisma/client";

function Goals() {
  const [title, setTitle] = useState<string>("");
  const [isDaily, setIsDaily] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");

  return (
    <div>
      {/*{goals.map(({ title, description, isCompleted, isDaily }) => {*/}
      {/*  return (*/}
      {/*    <div className={"card border-solid"}>*/}
      {/*      <h2>{title}</h2>*/}
      {/*      <h3>*/}
      {/*        <span*/}
      {/*          className={*/}
      {/*            "chip " + (isCompleted ? "gradient-teal" : "gradient-orange")*/}
      {/*          }*/}
      {/*        >*/}
      {/*          {isCompleted ? "Complete" : "Incomplete"}*/}
      {/*        </span>*/}
      {/*        <span*/}
      {/*          className={*/}
      {/*            "chip " + (isDaily ? "gradient-purple" : "gradient-blue")*/}
      {/*          }*/}
      {/*        >*/}
      {/*          {isDaily ? "Daily Goal" : "Sprint Goal"}*/}
      {/*        </span>*/}
      {/*      </h3>*/}
      {/*      <p>{description}</p>*/}
      {/*    </div>*/}
      {/*  );*/}
      {/*})}*/}
      <div className={"card border-dashed"}>
        <form onSubmit={createGoal}>
          <input
            type={"text"}
            className={"text-input"}
            placeholder={"What do you want to accomplish?"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type={"checkbox"}
            name={"isDaily"}
            checked={isDaily}
            onChange={(e) => setIsDaily(e.target.checked)}
          />
          Daily Goal
          <textarea
            className={"text-input"}
            placeholder={"Clearly define the criteria."}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type={"submit"}
            value={"Go"}
            className={"button gradient-blue"}
          />
        </form>
      </div>
    </div>
  );

  async function createGoal() {}
}

export async function getStaticProps() {
  const goals = await fetch('/api/goals', {
    method: 'GET',
  });

  return {
    props: { goals: JSON.parse(JSON.stringify(goals))}
  }
}

export default Goals;
