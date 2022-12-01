import Dashboard from "../components/dashboard/Dashboard";

import { PrismaClient, Goal, User } from "@prisma/client";

interface IndexProps {
  user: User;
  goals: Goal[];
}

export default function Index({ user, goals }: IndexProps) {
  return <Dashboard goals={goals} user={user} />;
}

export async function getStaticProps() {
  const prisma: PrismaClient = new PrismaClient();
  const user: User | null = await prisma.user.findUnique({
    where: {
      email: "daniel@oppenlander.net",
    },
  });
  const goals: Goal[] = await prisma.goal.findMany({
    where: {
      user: {
        email: "daniel@oppenlander.net",
      },
    },
  });

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
      goals: JSON.parse(JSON.stringify(goals)),
    },
  };
}
