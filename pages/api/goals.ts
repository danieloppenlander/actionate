import {PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";
import {unstable_getServerSession} from "next-auth";
import {authOptions} from "./auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {

  const session = await unstable_getServerSession(req, res, authOptions);
  const goals = await prisma.goal.findMany({
    where: {
      user: {email: session?.user?.email}
    },
  });
  res.status(200).json(goals);
}