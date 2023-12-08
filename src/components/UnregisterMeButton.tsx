import React from "react";
import { default as MiuButton, type ButtonProps as MiuButtonProps } from "@mui/material/Button";

export const UnregisterMeButton: React.FC<MiuButtonProps> = (props) => (
    <MiuButton {...props}>
        Unregister Me
    </MiuButton>
);
