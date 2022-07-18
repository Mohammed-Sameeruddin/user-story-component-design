import { Grid, Box } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/typography";

interface TradeItemProps {
    name: string;
    code: string;
    image: React.ReactNode;
    price: string;
    change: string;
    marketCap: string;
    watch: boolean;
}

const TradeItem = (props: TradeItemProps) => {
    return(
        <>
            <Grid container>
                <Grid item>
                    {props.image}
                </Grid>
                <Grid item>
                    <Box>
                        <Typography>{props.name}</Typography>
                        <Typography>{props.code}</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    {props.price}
                </Grid>
                <Grid item>
                    {props.change}
                </Grid>
                <Grid item>
                    {props.marketCap}
                </Grid>
                <Grid item>
                    {props.watch}
                    {/* based on props.watch value the star icon is filled with color  */}
                </Grid>
            </Grid>
        </>
    );
};

export default TradeItem;