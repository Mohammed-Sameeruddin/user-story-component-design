import { Grid, Box } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/typography";
import Chip from "../../atoms/chip";

interface WatchListItemProps {
    image: React.ReactNode;
    name: string;
    price: string;
    time: string;
}

const WatchListItem = (props: WatchListItemProps) => {
    return(
        <>
            <Grid container>
                <Grid item>
                    {props.image}
                    <Box>
                        <Typography>{props.name}</Typography>
                        <Typography>{props.price}</Typography>
                        <Chip label={props.time} />
                    </Box>
                </Grid>
                <Grid item>
                    {/* graph for that particular crypto */}
                </Grid>
            </Grid>
        </>
    );
};

export default WatchListItem;