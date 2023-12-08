import React from "react";

export const Paused: React.FC = () => {
  return (
    <div className="grid grid-cols-1 px-5 py-5 ">
      <h2 className="card-title justify-center py-5">You are Paused...</h2>
      <label className="swap swap-flip text-9xl">
        <input type="checkbox" defaultChecked={true} />

        <div className="swap-on">😴</div>
      </label>
      <h2 className="card-title justify-center py-5">Click to activate me</h2>
    </div>
  );
};
