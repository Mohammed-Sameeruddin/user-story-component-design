import { Box, Grid } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/typography";

const Footer = () => {
    return(
        <>
            <Grid container>
                <Grid item>
                    <Box>
                        <Typography></Typography>
                        <Typography></Typography>
                        <Typography></Typography>
                        <Typography></Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Grid>
                        {/* <DropDown label={} icon={} /> */}
                    </Grid>
                    <Grid>
                        {/* <Button variant="outlined"></Button> */}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Footer;