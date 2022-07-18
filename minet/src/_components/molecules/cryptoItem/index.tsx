import React from 'react';
import { Grid } from '@mui/material';
import Typography from '../../atoms/typography';

interface CryptoItemProps {
    image: React.ReactNode;
    name: string;
    price: string;
}

const CryptoItem = (props: CryptoItemProps) => {
    return(
        <>
            <Grid container>
                <Grid item>
                    {props.image}
                </Grid>
                <Grid item>
                    <Typography>{props.name}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{props.price}</Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default CryptoItem;