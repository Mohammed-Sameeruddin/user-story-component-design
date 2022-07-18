import React from 'react';
import { Grid, Box } from "@mui/material";
import ButtonComponent from "../../atoms/button";

interface PaymentSuccessProps {
    icon: React.ReactNode;
    value: string;
    description: string;
    label1: string;
    label2: string;
}

const PaymentSuccess = (props: PaymentSuccessProps) => {
    return(
        <>
            <Grid>
                <Grid>
                    {props.icon}
                </Grid>
                <Grid>
                    {props.value}
                </Grid>
                <Grid>
                    {props.description}
                </Grid>
                <Grid>
                    <Box>
                        <ButtonComponent variant="outlined">{props.label1}</ButtonComponent>
                        <ButtonComponent variant="contained">{props.label2}</ButtonComponent>
                    </Box>
                </Grid>
            </Grid> 
        </>
    );
};

export default PaymentSuccess;
