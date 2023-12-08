import React, { useState, useEffect } from "react";
import { usePauseMeContext } from "~/providers/PauseMeProvider";
import { endpoints, getData } from "~/api";
import { type UserResponse as IUserResponse } from "~/interfaces/users";

export interface PauseMeProps {
  pauseMe: boolean | undefined;
}

export const PauseMe: React.FC<PauseMeProps> = ({ pauseMe: initData }) => {
  const [data, setState] = useState(initData);
  const { pauseMe, onDataChange } = usePauseMeContext();

  useEffect(() => setState(data), []);

  const handleClick = async (pauseMe: boolean | undefined) => {
    const user = await getData<IUserResponse>(
      pauseMe ? endpoints.usersPauseMe : endpoints.usersUnpauseMe,
      "PUT",
    );

    onDataChange(user.pauseMe);
  };

  return (
    <div className="grid grid-cols-1 px-5 py-5 ">
      <h2 className="card-title justify-center py-5">
        You are {!pauseMe ? "Active!" : "Paused..."}
      </h2>
      <label className="swap swap-flip text-9xl">
        <input
          type="checkbox"
          checked={!pauseMe}
          onClick={() => handleClick(!pauseMe)}
        />
        <div className="swap-on">😁</div>
        <div className="swap-off">😴</div>
      </label>
      <h2 className="card-title justify-center py-5">
        Click to {!pauseMe ? "Pause Me" : "Activate Me"}
      </h2>
    </div>
  );
};
