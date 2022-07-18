import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState("");

    const searchFilter = () => {

    };

    const handleChange = () => {
        // setQuery(event?.target.value);
        setQuery("");
        searchFilter();
    };

    return(
        <>
            <Grid container>
                <Grid item>
                    {/* {searchIcon} */}
                </Grid>
                <Grid item>
                    <TextField onChange={handleChange} />
                </Grid>
            </Grid>
            { query ? 
                <Grid container>
                    <Grid item>
                        {/* list of all books that matches the user's query */}
                    </Grid>
                </Grid>
            : null }
        </>
    );
};

export default Search;