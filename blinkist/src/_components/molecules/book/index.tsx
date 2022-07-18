import { Grid, LinearProgress } from '@mui/material';
import React from 'react';
import Thumbnail from '../../atoms/thumbnail';
import Typography from '../../atoms/typography';

interface BookProps {
    thumbnail : string;
    title: string;
    author: string;
    time: string;
}

const Book = (props: BookProps) => {
    return(
        <>
            <Grid container>
                <Grid item>
                    <Thumbnail imgSrc={props.thumbnail} />
                </Grid>
                <Grid item>
                    <Typography>{props.title}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{props.author}</Typography>
                </Grid>
                <Grid item>
                    {/* <IconLabel icon={timeIcon} label={props.time} /> */}
                </Grid>
                <Grid item>
                    {/* <Icon>{moreIcon}</Icon> */}
                </Grid>
                <Grid item>
                    <LinearProgress variant="determinate" />
                </Grid>
            </Grid>
        </>
    );
};

export default Book;