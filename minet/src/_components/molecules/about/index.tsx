import { Grid, Box, Link } from '@mui/material';
import React from 'react';
import Typography from '../../atoms/typography';

interface CoinProps {
    name: string;
    description: string;
    officialWebsite: string;
    whitePage: string;
}

const About = (props: CoinProps) => {
    return(
        <>
            <Grid>
                <Grid item>
                    <Typography>About {props.name}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{props.description}</Typography>
                </Grid>
                <Grid item>
                    <Box>
                        <Typography>Resources</Typography>
                        <Link href={props.officialWebsite}>Official Website</Link>
                        <Link href={props.whitePage}>White Page</Link>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default About;