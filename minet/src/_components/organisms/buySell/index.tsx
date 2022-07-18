import { Grid, Step, StepContent, StepLabel, Stepper } from '@mui/material';
import React from 'react';
import ButtonComponent from '../../atoms/button';
import Typography from '../../atoms/typography';

interface BuySellProps {
    title: string;
    amount: string;
    price: string;
    paymentMethod: string;
    deliveryFees: string;
    transactionFees: string;
    depositTo: string;
    toSell: boolean;
};


const BuySell = (props: BuySellProps) => {

    const steps = [
        {
            label: "Payment method",
            description: props.paymentMethod 
        },
        {
            label: "Delivery fees",
            description: props.deliveryFees,
        },
        {
            label: "Deposit to",
            description: props.depositTo
        }
    ];

    const handleSell = () => {

    };

    const handleBuy = () => {

    };


    return(
        <>
            <Grid container>
                <Grid>
                    <Typography>{props.title}</Typography>
                    <Typography>{props.amount}</Typography>
                    <Typography>{props.price}</Typography>
                </Grid>
                <Grid>
                    <Stepper>
                        {
                            steps.map((step) => {
                                return(
                                    <Step>
                                        <StepLabel>
                                            {step.label}
                                        </StepLabel>
                                        <StepContent>
                                            {step.description}
                                        </StepContent>
                                    </Step>
                                );
                            })
                        }
                    </Stepper>
                </Grid>
                <Grid>
                    <Typography></Typography>
                    <Typography></Typography>
                    <Typography></Typography>
                </Grid>
                <Grid>
                    { 
                        props.toSell ? 
                        <ButtonComponent variant='contained' onClick={handleSell}>Sell Now</ButtonComponent>
                        : <ButtonComponent variant="contained" onClick={handleBuy}>Buy Now</ButtonComponent>
                    }
                </Grid>
            </Grid>
        </>
    );
};

export default BuySell;