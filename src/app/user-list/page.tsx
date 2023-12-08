import React from "react";
import { endpoints, getData } from "~/api";
import { UserList } from "~/components/UserList";
import { type UserList as IUserList } from "~/interfaces/users";

export default async function page() {
  const { items: users } = await getData<IUserList>(endpoints.users);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <UserList users={users} />
    </main>
  );
}
