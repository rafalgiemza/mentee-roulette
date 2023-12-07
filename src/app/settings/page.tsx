import React from "react";

const company = {
  name: "SoftGarden",
};

const user = {
  firstName: "Rafał",
  lastName: "Giemza",
  avatar:
    "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
  company: company,
  department: "Developer",
  timeZone: "Europe/Berlin",
};

export default function page() {
  return (
    <main className="gap-100 flex min-h-screen flex-col items-center">
      <div className="py-10">
        <h1 className="card-title">Settings</h1>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={user.avatar} alt="Avatar" />
        </figure>
        <div className="card-body">
          <p>Company name: {user.company.name}</p>
          <p>First name: {user.firstName} </p>
          <p>Last name: {user.lastName} </p>
          <p>Department: {user.department} </p>
          <p>Time zone: {user.timeZone} </p>
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
