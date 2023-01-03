import {PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";
import {unstable_getServerSession} from "next-auth";
import {authOptions} from "../auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
  const {title, description, isDaily, isCompleted} = req.body;

  const session = await unstable_getServerSession(req, res, authOptions);
  const result = await prisma.goal.create({
    data: {
      title: title,
      description: description,
      isDaily: isDaily,
      isCompleted: isCompleted,
      user: {connect: {email: session?.user?.email as string}}
    }
  });

  res.json(result);
}
