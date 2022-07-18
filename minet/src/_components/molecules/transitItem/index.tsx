import { Box, Grid } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/typography";

interface TransitItemProps {
    icon: React.ReactNode;
    label1: string;
    label2: string;
}

const TransitItem = (props: TransitItemProps) => {
    return(
        <>
            <Grid container>
                <Grid item>
                    {props.icon}
                </Grid>
                <Grid item>
                    <Box>
                        <Typography>{props.label1}</Typography>
                        <Typography>{props.label2}</Typography>              
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default TransitItem;