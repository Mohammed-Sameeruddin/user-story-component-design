import React from 'react';
import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
    children: React.ReactNode;
    variant: "contained" | "outlined" | "text";
    style?: React.CSSProperties;
    onClick?: () => void;
    className?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  
}

const ButtonComponent: React.FC<ButtonProps> = (props: ButtonProps) => {
    return(
        <MuiButton { ...props } />
    );
};

export default ButtonComponent;