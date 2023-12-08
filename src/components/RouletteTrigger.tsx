import React from "react";
import {RouletteTriggerButton} from "~/components/RouletteTriggerButton";
import {endpoints, getData} from "~/api";
import { type RouletteTriggerResponse as IRouletteTriggerResponse} from "~/interfaces/roulette";

export const RouletteTrigger: React.FC = () => {
    const handleClick = async () => {
        await getData<IRouletteTriggerResponse>(endpoints.rouletteTrigger, "POST");
    };

    return (
        <div className="py-10">
            <RouletteTriggerButton className="btn" onClick={() => handleClick()} />
        </div>
    );
};
