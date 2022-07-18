import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ChipComponent from '../../atoms/chip';
import Typography from '../../atoms/typography';
import IconLabel from '../../molecules/iconLabel';

const MyPortfolio = () => {
    const [coinList, setCoinList] = useState([]);

    useEffect(()=> {
        // api call to get all coins
        setCoinList([]);
    });

    return(
        <>
            <Grid container>
                <Grid item>
                    <Grid>
                        <Box>
                        <Typography></Typography>
                        <Typography></Typography>
                        </Box>
                        <Box>
                            <Typography></Typography>
                            <Typography></Typography>
                        </Box>
                    </Grid>
                    <Grid>
                        <Box>
                            {/* duration to show stats */}
                        </Box>
                        <Box>
                            <IconLabel label={""} icon={<></>}  />
                            <IconLabel label={""} icon={<></>} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid item>
                    {/* graphical representation of stats */}
                </Grid>
                <Grid item>
                    {coinList.map((item: string) => {
                        return(
                            <ChipComponent label={item} />
                        );
                    })}
                </Grid>
            </Grid>
        </>
    );
};

export default MyPortfolio;