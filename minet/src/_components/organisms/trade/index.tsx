import { Grid, TextField, Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DropDown from '../../molecules/dropDown';
import TradeItem from '../../molecules/tradeItem';

const Trade = () => {
    const [tradeList, setTradeList] = useState([]);

    useEffect(() => {
        // api call to get all trade data
        setTradeList([]);
    });
    return(
        <>
            <Grid>
                <Grid>
                    <Box>
                        <TextField />
                        {/* searchIcon */}
                    </Box>
                    <DropDown label="24h" icon={<></>} />
                    <DropDown label="All assets" icon={<></>} />
                </Grid>
                <Grid>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Change</TableCell>
                                <TableCell>MarketCap</TableCell>
                                <TableCell>Watch</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                tradeList.map((trade) => {
                                    return(
                                        <TableRow>
                                            <TradeItem {...trade} />
                                        </TableRow>
                                    );
                                })
                            }
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </>
    );
};

export default Trade;