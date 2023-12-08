import React from "react";

export const SimpleCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <div className="card-body">{children}</div>
    </div>
  );
};
