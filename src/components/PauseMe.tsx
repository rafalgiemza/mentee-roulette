import React, { useState, useEffect } from "react";
import {PauseMeButton} from "~/components/PauseMeButton";
import {usePauseMeContext} from "~/providers/PauseMeProvider";
import {endpoints, getData} from "~/api";
import {type UserResponse as IUserResponse} from "~/interfaces/users";

export interface PauseMeProps {
    pauseMe: boolean | undefined;
}

export const PauseMe: React.FC<PauseMeProps> = ({ pauseMe: initData }) => {
    const [data, setState] = useState(initData);
    const { pauseMe, onDataChange } = usePauseMeContext();

    useEffect(() => setState(data), []);

    const handleClick = async (pauseMe: boolean | undefined) => {
        const user = await getData<IUserResponse>(pauseMe ? endpoints.usersPauseMe : endpoints.usersUnpauseMe, "PUT");

        onDataChange(user.pauseMe);
    };

    return (
        <div className="py-10">
            <PauseMeButton className="btn" text={pauseMe ? "Unpause Me" : "Pause Me"} onClick={() => handleClick(!pauseMe)} />
        </div>
    );
};
