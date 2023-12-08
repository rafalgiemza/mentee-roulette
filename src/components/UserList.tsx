import React from "react";
import { SimpleCard } from "./SimpleCard";

import { UserResponse } from "~/interfaces/users";
import { WarningBadge, SuccessBadge } from "./Badge";
import { DepartmentBadge } from "./DepartmentBadge";
import { Avatar } from "./Avatar";

interface UserListProps {
  users: UserResponse[];
}

export const UserList = ({ users }: UserListProps) => {
  return (
    <SimpleCard>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Mentee</th>
              <th>Department</th>
              <th>Is active</th>
            </tr>
          </thead>
          <tbody>
            {Boolean(users.length) &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <Avatar avatarId={user.id} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {user.firstName} {user.lastName}
                        </div>
                        <div className="text-sm opacity-50">
                          {user.timeZone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <DepartmentBadge department={user.department} />
                  </td>
                  <td>
                    {user.pauseMe ? (
                      <WarningBadge text="😴" />
                    ) : (
                      <SuccessBadge text="😁" />
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </SimpleCard>
  );
};
