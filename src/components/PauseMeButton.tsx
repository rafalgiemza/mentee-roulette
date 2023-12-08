import React from "react";
import { default as MiuButton, type ButtonProps as MiuButtonProps } from "@mui/material/Button";

export type ButtonProps = MiuButtonProps & {
    text: string;
};

export const PauseMeButton: React.FC<ButtonProps> = ({ text, ...props }) => (
    <MiuButton {...props}>
        {text}
    </MiuButton>
);
