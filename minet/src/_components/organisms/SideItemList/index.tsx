import { Grid, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import IconComponent from '../../atoms/icon';
import Typography from '../../atoms/typography';
import SideItem from '../../molecules/sideItem';

const SideItemList = () => {
    const [userCoins, setUserCoins] = useState([]);
    const [wallet, setWallet] = useState([]);
    const [recent, setRecent] = useState([]);

    useEffect(()=> {
        // api call to get user's coin, wallet and recent transaction
        setUserCoins([]);
        setWallet([]);
        setRecent([]);
    });

    return(
        <>
            <Grid container>
                <Grid item>
                    <Grid>
                        <Typography></Typography>
                        <Box>
                            <IconComponent>{}</IconComponent>
                            <IconComponent>{}</IconComponent>
                        </Box>
                    </Grid>
                    <Grid>
                        {userCoins.map((coin) => {
                            return(
                                <SideItem { ...coin } />
                            );
                        })}
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography></Typography>
                    <Grid>
                        {wallet.map((coin) => {
                            return(
                                <SideItem { ...coin } />
                            );
                        })}
                    </Grid>   
                </Grid>
                <Grid item>
                    <Typography></Typography>
                    <Grid>
                        {recent.map((coin) => {
                            return(
                                <SideItem { ...coin } />
                            );
                        })}
                    </Grid>   
                </Grid>
            </Grid>
        </>
    );
};

export default SideItemList;