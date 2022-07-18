import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import IconComponent from '../../atoms/icon';
import Typography from '../../atoms/typography';
import IconLabel from '../../molecules/iconLabel';
import WatchListItem from '../../molecules/watchListItem';

const WatchList = () => {
    const [watchList,setWatchList] = useState([]);

    useEffect(() => {
        // api call to get watchlist data
        setWatchList([]);
    });

    return(
        <>
            <Grid container>
                <Grid item>
                    <Grid>
                        <Typography>Watchlist</Typography>
                        {/* <DropDown label='Discovery assets' icon={} /> */}
                    </Grid>
                    <Grid>
                        <IconLabel label='EDIT' icon={<IconComponent>{}</IconComponent>} />
                        <IconComponent>{}</IconComponent>
                        <IconComponent>{}</IconComponent>
                    </Grid>
                </Grid>
                <Grid item>
                    {watchList.map((item)=> {
                        return(
                            <>
                                <WatchListItem { ...item } />
                            </>
                        );
                    })}
                </Grid>
            </Grid>
        </>
    );
};

export default WatchList;