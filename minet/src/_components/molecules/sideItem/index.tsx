import { Grid, Box } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/typography";

interface SideItemProps {
    name: string;
    code?: React.ReactNode;
    price: string;
    change?: string;
    image: React.ReactNode;
}

const SideItem = (props: SideItemProps) => {
    return(
        <>
            <Grid container>
                <Grid item>
                    <Grid>
                        {props.image}
                    </Grid>
                    <Box>
                        <Typography>{props.name}</Typography>
                        {props.code}
                    </Box>
                </Grid>
                <Grid item>
                    <Box>
                        <Typography>{props.price}</Typography>
                        <Typography>{props.change}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default SideItem;