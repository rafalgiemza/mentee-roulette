import React from "react";
import { Avatar } from "./Avatar";
import { UserResponse } from "~/interfaces/users";

interface ProfilePageProps {
  user: UserResponse;
}

export const ProfilePage = async ({ user }: ProfilePageProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="py-5">
        <h1 className="card-title">Your profile</h1>
      </div>
      {user && (
        <div className="card card-side bg-base-100 shadow-xl">
          <div className="avatar py-10 pl-10">
            <div className="w-72 rounded-md ">
              <div className="mask mask-squircle h-auto w-auto">
                <Avatar avatarId={user.id} />
              </div>
            </div>
          </div>
          <div className="card-body py-10">
            <p>Company name: {user?.company?.name}</p>
            <p>First name: {user?.firstName} </p>
            <p>Last name: {user?.lastName} </p>
            <p>Department: {user?.department} </p>
            <p>Time zone: {user?.timeZone} </p>
          </div>
        </div>
      )}
    </main>
  );
};
