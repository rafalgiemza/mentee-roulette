import React from "react";
import { endpoints, getData } from "~/api";
import {type UserList as IUserList} from "~/interfaces/users";

export default async function page() {
  const { items } = await getData<IUserList>(endpoints.users);

  return (
    <main className="gap-100 flex min-h-screen flex-col items-center">
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {Boolean(items.length) &&
            items.map((user) => (
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src={user.avatarImageUrl || "/public/user-avatar.png"} alt="Avatar" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {user.email}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {user.department}
                    </div>
                  </div>
                </li>
            ))}
      </ul>
    </main>
  );
}
