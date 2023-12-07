import React from "react";
import { endpoints, getData } from "~/api";

export default async function page() {
  const { data: currentUser } = await getData(endpoints.usersMe);

  return (
    <main className="gap-100 flex min-h-screen flex-col items-center">
      <div className="py-10">
        <h1 className="card-title">Settings</h1>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="avatar py-10 pl-10">
          <div className="w-72 rounded-md ">
            <figure>
              <img src={currentUser?.avatarImageUrl} alt="Avatar" />
            </figure>
          </div>
        </div>
        <div className="card-body py-10">
          <p>Company name: {currentUser?.company?.name}</p>
          <p>First name: {currentUser?.firstName} </p>
          <p>Last name: {currentUser?.lastName} </p>
          <p>Department: {currentUser?.department} </p>
          <p>Time zone: {currentUser?.timeZone} </p>
        </div>
      </div>
      <div className="py-10">
        <button className="btn " disabled>
          Edit
        </button>
      </div>
    </main>
  );
}
