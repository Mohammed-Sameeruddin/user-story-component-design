import { Grid } from '@mui/material';
import React from 'react';
import Icon from "../../atoms/icon";

interface SideBarProps {
    logo: React.ReactNode;
    icons: [];
}

const SideBar = (props: SideBarProps) => {

    const handleClick = (index: number) => {
        props.icons[index];
        // navigate based on the index of the icon
    };

    return(
        <>
            <Grid container>
                <Grid item>
                    {props.logo}
                </Grid>
                <Grid item>
                    { props.icons.map((icon,index) => {
                        return(
                            <Icon key={index} onClick={() => handleClick(index)} >
                                {icon}
                            </Icon>
                        );
                    })}
                </Grid>
            </Grid>
        </>
    );
};

export default SideBar;