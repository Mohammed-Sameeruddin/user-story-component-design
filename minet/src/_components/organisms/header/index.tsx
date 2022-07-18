import { Grid } from '@mui/material';
import React from 'react';
import Typography from '../../atoms/typography';
import Button from "../../atoms/button";
import Avatar from "../../atoms/avatar";

interface HeaderProps {
    title: string;
    label1: string;
    label2: string;
    avatar: string;
}

const Header = (props: HeaderProps) => {

    return(
        <>
            <Grid container>
                <Grid item>
                    <Typography>{props.title}</Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained">{props.label1}</Button>
                </Grid>
                <Grid item>
                    <Button variant='contained'>{props.label2}</Button>
                </Grid>
                <Grid item>
                    <Avatar avatar={props.avatar} />
                </Grid>
                <Grid item>
                    {/* <Icon>{dropDownIcon}</Icon> */}
                </Grid>
            </Grid>
        </>
    );
};

export default Header;