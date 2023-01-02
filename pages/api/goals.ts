import { Goal, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const goals: Goal[] = await prisma.goal.findMany({
    where: {
      user: {
        email: "daniel@oppenlander.net",
      },
    },
  });
  res.json(goals);
}
