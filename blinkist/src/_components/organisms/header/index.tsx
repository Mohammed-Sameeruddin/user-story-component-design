import { Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import IconComponent from '../../atoms/icon';
import DropDown from '../../molecules/dropDown';
import Tabs from '../tabs';

interface HeaderProps {
    logo: React.ReactNode;
    searchIcon?: React.ReactNode;
    label1: string;
    label2: string;
    dropdown1: string;
    dropdown2: string;
}

const Header = (props: HeaderProps) => {
    const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState("");
    const [dropDownData, setDropDownData] = useState({});

    useEffect(() => {
         const getData = async () => {
            // api call to get drop down data
            setDropDownData(dropDownData);
        };
        getData();
    },[]);

    const handleSearch = () => {
        showSearch ? setShowSearch(false) : setShowSearch(true);
    };

    const handleExplore = () => {
        show ? setShow(false) : setShow(true);
    };

    const handleAccount = () => {
        
    };

    const searchFilter = () => {

    };

    const handleChange = () => {
        setQuery("");
        searchFilter();
    };

    return(
        <>
            <Grid container>
                <Grid item>
                    {props.logo}
                </Grid>
                <Grid item onClick={handleSearch}>
                    {props.searchIcon}
                </Grid>
                { showSearch ? 
                    <Grid>
                        <Grid item>
                            <TextField onChange={handleChange} /> 
                        </Grid>
                        <Grid item>
                            { query ? 
                                <Grid>
                                    {/* list of all books that matches the search result */}
                                </Grid>
                                : null}
                        </Grid>
                    </Grid>
                    : 
                    <Grid>
                        <Grid item>
                            <DropDown 
                                label={props.dropdown1} 
                                icon={<IconComponent>{}</IconComponent>} 
                                onClick={handleExplore} 
                            />
                        </Grid>
                        <Grid item>
                            {props.label1}
                        </Grid> 
                        <Grid item>
                            {props.label2}
                        </Grid>
                    </Grid>
                }
                <Grid item>
                <DropDown 
                        label={props.dropdown2} 
                        icon={<IconComponent>{}</IconComponent>} 
                        onClick={handleAccount} 
                    />
                </Grid>
            </Grid>
            { show ? 
                <Grid container>
                    <Tabs title1={"title1"} title2={"title2"} title3={"title3"} content1={[]} content2={[]} content3={[]} />
                </Grid>
            : null }
        </>
    );
};

export default Header;