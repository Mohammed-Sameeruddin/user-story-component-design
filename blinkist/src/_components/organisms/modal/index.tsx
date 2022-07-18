import { Box, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ButtonComponent from '../../atoms/button';

const Modal = () => {
    const [isEmailAdded ,setEmailAdded] = useState(false);

    const handleEmail = () => {
        setEmailAdded(true);
    };

    const handleNeed = () => {

    };

    return(
        <>
            <Grid>
                <Grid item>
                    {/* <IconComponent>{closeIcon}</IconComponent> */}
                </Grid>
                { isEmailAdded ? 
                    <Grid>
                        <Grid item>
                            {/* <IconComponent>{tickIcon}</IconComponent> */}
                        </Grid>
                        <Grid item>
                            <Typography></Typography>
                            <Typography></Typography>
                        </Grid>
                        <Grid item>
                            <ButtonComponent variant="contained" >Continue reading</ButtonComponent>
                        </Grid>
                    </Grid>
                    :
                    <Grid>
                        <Grid item>
                            <Typography></Typography>
                        </Grid>
                        <Grid item>
                            <Typography></Typography>
                        </Grid>
                        <Grid item>
                            <Box>
                                <Typography></Typography>
                                <Typography></Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box>
                                <Typography></Typography>
                                <TextField />
                            </Box>
                        </Grid>
                        <Grid item>
                            <ButtonComponent variant='contained' onClick={handleEmail}>Add Email</ButtonComponent>
                            <ButtonComponent variant="outlined" onClick={handleNeed}>Need help?</ButtonComponent>
                        </Grid>
                    </Grid>
                }   
            </Grid>
        </>
    );
};

export default Modal;