import React, { useState, useEffect } from "react";
import {UnregisterMeButton} from "~/components/UnregisterMeButton";
import {useUnregisterMeContext} from "~/providers/UnregisterMeProvider";
import {endpoints, getData} from "~/api";
import {type UserResponse as IUserResponse} from "~/interfaces/users";

export interface UnregisterMeProps {
    connectedWithCronofy: boolean | undefined;
}

export const UnregisterMe: React.FC<UnregisterMeProps> = ({ connectedWithCronofy: initData }) => {
    const [data, setState] = useState(initData);
    const { connectedWithCronofy, onDataChange } = useUnregisterMeContext();

    useEffect(() => setState(data), []);

    const handleClick = async () => {
        const user = await getData<IUserResponse>(endpoints.usersDisconnectFromCronofy, "PUT");

        onDataChange(user.connectedWithCronofy);
    };

    return (
        <div className="py-10">
            <UnregisterMeButton className="btn" disabled={!connectedWithCronofy} onClick={handleClick} />
        </div>
    );
};
