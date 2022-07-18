import { Grid } from '@mui/material';
import React from 'react';
import Typography from '../../atoms/typography';

interface SearchProps {
    stats?: React.ReactNode;
    image?: string;
    title: string;
    author: string;
}

const SearchItem = (props: SearchProps) => {
    return(
        <>
            <Grid container>
                <Grid item>
                    {props.stats}
                </Grid>
                <Grid item> 
                    <img src={props.image} alt="bookImage" />
                </Grid>
                <Grid item>
                    <Typography>{props.title}</Typography>
                    <Typography>{props.author}</Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default SearchItem;