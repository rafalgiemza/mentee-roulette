import React, { useState, useEffect } from "react";
import { useUnregisterMeContext } from "~/providers/UnregisterMeProvider";
import { endpoints, getData } from "~/api";
import { type UserResponse as IUserResponse } from "~/interfaces/users";

export interface UnregisterMeProps {
  connectedWithCronofy: boolean | undefined;
}

export const UnregisterMe: React.FC<UnregisterMeProps> = ({
  connectedWithCronofy: initData,
}) => {
  const [data, setState] = useState(initData);
  const { connectedWithCronofy, onDataChange } = useUnregisterMeContext();

  useEffect(() => setState(data), []);

  const handleClick = async () => {
    const user = await getData<IUserResponse>(
      endpoints.usersDisconnectFromCronofy,
      "PUT",
    );

    onDataChange(user.connectedWithCronofy);
  };

  return (
    <div className="grid grid-cols-1 px-5 py-5">
      <h2 className="card-title justify-center py-5">
        You are {connectedWithCronofy ? "Registered!" : "Not regitered???!!!"}
      </h2>
      <label className="swap swap-flip text-9xl">
        <input
          type="checkbox"
          defaultChecked={!connectedWithCronofy}
          onClick={() => handleClick()}
        />

        <div className="swap-on">😱</div>
        <div className="swap-off">🤩</div>
      </label>
      <h2 className="card-title justify-center py-5">
        {connectedWithCronofy ? "Click to Unregister Me" : "Register ASAP!!!"}
      </h2>
    </div>
  );
};
