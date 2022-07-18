import { Grid } from '@mui/material';
import React from 'react';
import Typography from '../../atoms/typography';

interface IconLabelProps {
    icon: React.ReactNode;
    label: string;
}

const IconLabel = (props: IconLabelProps) => {
    return(
        <>
            <Grid>
                <Grid item>
                    {props.icon}
                </Grid>
                <Grid item>
                    <Typography>{props.label}</Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default IconLabel;