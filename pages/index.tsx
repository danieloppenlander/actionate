import Dashboard from "../components/dashboard/Dashboard";
import Header from "../components/header/Header";
import {useSession} from "next-auth/react";

export default function Index() {
  const {data: session} = useSession();

  return (
      <div>
        <Header/>
        {session && <Dashboard/>}
      </div>
  );
}