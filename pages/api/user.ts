import {PrismaClient, User} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";

const prisma = new PrismaClient();

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
  const user: User | null = await prisma.user.findUnique({
    where: {
      email: "daniel@oppenlander.net",
    },
  });
  res.json(user);
}
