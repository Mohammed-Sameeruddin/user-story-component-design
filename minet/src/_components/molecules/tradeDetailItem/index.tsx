import { Box, Grid } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/typography";

interface TradeDetailItemProps {
    image: React.ReactNode;
    name: string;
    code: string;
    change: string;
    marketCap: string;
    volume: string;
    circulatingSupply: string;
    isAddedToWatchList: boolean;
}

const TradeDetailItem = (props: TradeDetailItemProps) => {
    return(
        <>
            <Grid container>
                <Grid item>
                    {props.image}
                    <Box>
                        <Typography>{props.name}</Typography>
                        <Typography>{props.code}</Typography>
                        <Typography>{props.change}</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Box>
                        <Typography>Market Cap</Typography>
                        <Typography>{props.marketCap}</Typography>
                    </Box>
                    <Box>
                        <Typography>Vol. 24H</Typography>
                        <Typography>{props.volume}</Typography>
                    </Box>
                    <Box>
                        <Typography>Circulating Supply</Typography>
                        <Typography>{props.circulatingSupply}</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    
                </Grid>
            </Grid>
        </>
    );
};

export default TradeDetailItem;