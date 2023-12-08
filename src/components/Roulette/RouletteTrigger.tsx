"use client";

import React, { useState } from "react";
import { redirect } from "next/navigation";
export interface RouletteTriggerProps {
  rouletteTriggerClicked: () => Promise<void>;
}

export const RouletteTrigger: React.FC<RouletteTriggerProps> = ({
  rouletteTriggerClicked,
}: RouletteTriggerProps) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = async () => {
    setClicked(true);
    rouletteTriggerClicked();
  };

  return (
    <div className="grid grid-cols-1 px-5 py-5 ">
      <h2 className="card-title justify-center py-5">
        {!clicked ? "We are ready!" : "One moment..."}
      </h2>
      <label className="swap swap-flip text-9xl">
        <input
          type="checkbox"
          defaultChecked={!clicked}
          onClick={() => handleClick()}
        />
        <div className="swap-on">🥳</div>
        <div className="swap-off">😎</div>
      </label>
      <h2 className="card-title justify-center py-5">
        {!clicked ? "Click now!" : "...it will be worth it"}
      </h2>
    </div>
  );
};
