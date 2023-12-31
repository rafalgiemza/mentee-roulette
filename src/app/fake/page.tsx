import React from "react";
import { endpoints, getData } from "~/api";
import { type UserResponse as IUserResponse } from "~/interfaces/users";
import { UnregisterMe } from "~/components/UnregisterMe";
import Link from "next/link";
import { Paused } from "~/components/Paused";
import { Roulette } from "~/components/Roulette/Roulette";

const page: React.FC = async () => {
  const user = await getData<IUserResponse>(endpoints.usersMe);
  const notRegisteredYet = user?.connectedWithCronofy === false ?? true;
  const isPaused = user?.pauseMe === true;

  return (
    <main className="flex min-h-screen flex-col items-center">
      {notRegisteredYet && (
        <Link href={"/settings"}>
          <UnregisterMe connectedWithCronofy={user?.connectedWithCronofy} />
        </Link>
      )}
      {!notRegisteredYet && isPaused && (
        <Link href="/settings">
          <Paused />
        </Link>
      )}
      {!notRegisteredYet && !isPaused && <Roulette fake={true} />}
    </main>
  );
};

export default page;
