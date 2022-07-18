import { Grid } from '@mui/material';
import React from 'react';
import IconComponent from '../../atoms/icon';
import Typography from '../../atoms/typography';

interface DropDownProps {
    label: string;
    icon: React.ReactNode;
    onClick?: () => void;
}

const DropDown = (props: DropDownProps) => {
    return(
        <>
            <Grid container>
                <Grid item>
                    <Typography>{props.label}</Typography>
                </Grid>
                <Grid item>
                    <IconComponent onClick={props.onClick}>{props.icon}</IconComponent>
                </Grid>
            </Grid>
        </>
    );
};

export default DropDown;