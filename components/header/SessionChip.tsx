import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export function SessionChip() {
  const { data: session } = useSession();

  if (session) {
    return (
      <span>
        <p className={"inline"}>{session.user.name}</p>
        <button className={"inline"} onClick={() => signOut()}>
          Logoff
        </button>
      </span>
    );
  } else {
    return (
      <span>
        <button onClick={() => signIn()}>Login</button>
      </span>
    );
  }
}
