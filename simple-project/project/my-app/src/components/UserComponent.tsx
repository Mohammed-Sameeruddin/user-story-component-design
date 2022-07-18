import { TextField, Grid, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';

const selectOption = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    }
  ];

const UserComponent = () => {
    const [name,setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender,setGender] = useState("");
    const [image, setImage] = useState("/assets/child.jpg");
    const [profile,setProfile] = useState("");

    useEffect(() => {
        age < 20 ? setImage("/assets/child.jpg") : age < 60 ? setImage("/assets/adult.jpg") : setImage("/assets/elder.jpg");
        gender.includes("Male") ? setProfile("/assets/male.png") : gender.includes("Female") ? setProfile("/assets/female.png") : setProfile("");
    },[age,gender])

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value);
    }

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        parseInt(event.target.value) < 0 ? setAge(0) :
        setAge(parseInt(event.target.value));
    }
    
    return(
        <>
            <Grid container sx={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                gap: "30px",
            }}>
                <Grid item>
                    <TextField label="Enter your name" variant="standard" onChange={handleName} /> 
                </Grid>
                { name.length > 2 ? 
                <>
                <Grid item>
                    <TextField label="Enter your age" variant="standard"  type="number" InputProps={{ inputProps: { min: 0 } }} onChange={handleAge} /><br></br>
                    { age ? 
                    <img src={image} alt="child" style={{ width: "200px", height: "200px", marginTop: "20px" }} />
                    : null }
                    </Grid>
                <Grid item>
                    <TextField label="Gender" variant="standard" select value={gender} onChange={handleSelect} sx={{
                        width: "210px",
                    }}>
                        {selectOption.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField><br></br>
                    { gender ? 
                    <img src={profile} alt="profile" style={{ width: "200px", height: "200px", marginTop: "20px" }} />
                    : null }
                 </Grid> 
                </> 
                : null } 
            </Grid>
        </>
    );
}

export default UserComponent;