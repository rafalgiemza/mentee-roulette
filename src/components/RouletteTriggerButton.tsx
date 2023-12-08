import React from "react";
import { default as MiuButton, type ButtonProps as MiuButtonProps } from "@mui/material/Button";

export const RouletteTriggerButton: React.FC<MiuButtonProps> = (props) => (
    <MiuButton {...props}>
        Trigger Roulette
    </MiuButton>
);
