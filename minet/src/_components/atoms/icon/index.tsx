import { Icon } from '@mui/material';
import React from 'react';

interface IconComponentProps {
    children: React.ReactNode;
    onClick?: () => void;
}


const IconComponent = (props: IconComponentProps) => {
    return(
        <>
            <Icon onClick={props.onClick}>
                {props.children}
            </Icon>
        </>
    );
};

export default IconComponent;