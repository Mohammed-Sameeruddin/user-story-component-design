import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import ButtonComponent from '../../atoms/button';
import IconComponent from '../../atoms/icon';
import Thumbnail from '../../atoms/thumbnail';
import Modal from '../modal';
import Tabs from '../tabs';

interface BookDetailsProps {
    description: string;
    name: string;
    tagLine: string;
    author: string;
    time: React.ReactNode;
    image: string;
}

const BookDetails = (props: BookDetailsProps) => {
    const [openModal, setOpenModal] = useState(false);

    const handleSendToKindle = () => {
        openModal? setOpenModal(false) : setOpenModal(true);
    };

    return(
        <>
            <Grid container>
                <Grid>
                    <Grid item>
                        {props.description}
                    </Grid>
                    <Grid item>
                        {props.name}
                    </Grid>
                    <Grid item>
                        {props.tagLine}
                    </Grid>
                    <Grid item>
                        {props.author}
                    </Grid>
                    <Grid item>
                        {props.time}
                    </Grid>  
                    <Grid item>
                        <Box>
                            <ButtonComponent variant="contained">Read Now</ButtonComponent>
                            <ButtonComponent variant="outlined" startIcon={<IconComponent children={"startIcon"} />} >Buy Book</ButtonComponent>
                            <ButtonComponent variant="text" endIcon={<IconComponent children={"endIcon"} />} onClick={handleSendToKindle} >Send to Kindle</ButtonComponent>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Tabs title1={"title1"} title2={"title2"} title3={"title3"} content1={[]} content2={[]} content3={[]} />    
                    </Grid>   
                </Grid>
                <Grid>
                    <Thumbnail imgSrc={props.image} />
                </Grid>
            </Grid>
            { openModal ? <Modal /> : null }
        </>
    );
};

export default BookDetails;