import React, { useState } from 'react';
import { Grid, Box } from "@mui/material";
import Typography from '../../atoms/typography';
import IconComponent from '../../atoms/icon';

const dropdown = [
    {
        label: "Instant",
        time: "2-5 minutes",
        deliveryFees: "0.001BTC",
    },
    {
        label: "Faster",
        time: "4 hours",
        deliveryFees: "0.0001BTC",
    },
    {
        label: "Fast",
        time: "120 hours",
        deliveryFees: "0.00001BTC",
    }
];

const Speed  = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        show ? setShow(false) : setShow(true);
    };

    return(
        <>
            <Grid>
                <Grid>
                    <Typography>Select Speed Delivery</Typography>
                </Grid>
                <Grid>
                    <Grid>
                        {/* initial icon */}
                        <Box>
                            <Typography>{}</Typography>
                            <Typography>{}</Typography>
                        </Box>
                        <IconComponent onClick={handleShow} children={<></>} />
                    </Grid>
                    { 
                        show? 
                        <Grid>
                            {dropdown.map((item) => {
                                return(
                                    <Grid>
                                        <Typography>{item.label}</Typography>
                                        <Typography>{item.time}</Typography>
                                        <Typography>{item.deliveryFees}</Typography>
                                    </Grid>
                                );
                            })}
                        </Grid>
                        : null
                    }
                </Grid>
            </Grid>
        </>
    );
};

export default Speed;