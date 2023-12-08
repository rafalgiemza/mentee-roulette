import React from "react";
import { UserResponse } from "~/interfaces/users";
import { Avatar } from "../Avatar";
import { DepartmentBadge } from "../DepartmentBadge";

interface RouletteResultsProps {
  user: UserResponse | undefined;
}

export const RouletteResultsCard = ({ user }: RouletteResultsProps) => {
  if (!user) return;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div className="avatar py-10 pl-10">
        <div className="w-40 rounded-md ">
          <div className="mask mask-squircle h-auto w-auto">
            <Avatar avatarId={user.id} />
          </div>
        </div>
      </div>
      <div className="card-body py-10">
        <p>First name: {user?.firstName} </p>
        <p>Last name: {user?.lastName} </p>
        <p>Time zone: {user?.timeZone} </p>
        <DepartmentBadge department={user.department} />
      </div>
    </div>
  );
};
