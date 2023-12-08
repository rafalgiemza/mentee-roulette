import Link from "next/link";
import React from "react";
import { Avatar } from "./Avatar";
import { endpoints, getData } from "~/api";
import { type UserResponse as IUserResponse } from "~/interfaces/users";

export const Navbar = async () => {
  const user = await getData<IUserResponse>(endpoints.usersMe);

  return (
    <div className="navbar ">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Mentee Roulette
        </Link>
      </div>
      <div className="navbar-end">
        <Link href={"/user-list"} className="btn btn-ghost text-base">
          Users List
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="avatar btn btn-circle btn-ghost"
          >
            <div className="mask mask-squircle h-12 w-12">
              <Avatar avatarId={user.id} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li key={0}>
              <Link href={"/profile"}>Profile</Link>
            </li>
            <li key={1}>
              <Link href={"/settings"}>Settings</Link>
            </li>
            <li key={2}>
              <Link href={"/logout"}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
