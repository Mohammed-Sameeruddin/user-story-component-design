import { Grid, Box } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/typography";
import Chip from "../../atoms/chip";

interface WalletListItemProps {
    date: string;
    icon: React.ReactNode;
    name: string;
    from: string;
    label: string;
    amount: string;
    change: string;
}

const WalletListItem = (props: WalletListItemProps) => {
    return(
        <>
            <Grid container>
                <Grid item>
                    <Grid>
                        {props.date}
                    </Grid>
                    <Grid>
                        {props.icon}
                    </Grid>
                    <Grid>
                        <Box>
                            <Typography>{props.name}</Typography>
                            <Typography>{props.from}</Typography>
                            <Chip label={props.label} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid item>
                    <Box>
                        <Typography>{props.amount}</Typography>
                        <Typography>{props.change}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default WalletListItem;