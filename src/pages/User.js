import React, { useState} from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { Button, Container, Divider } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import "./User.css";
const User=()=>{
    let notValid=true
    const [period, setPeriod]=useState()
    const [name, setName]=useState()
    const [lastName, setLastName]=useState()
    if(name&&lastName){
      notValid=false
    }

    return(
    <>
    <Container maxWidth="md" >
    
    <h1 className='name'><CreateOutlinedIcon/>Nom:</h1>
    <TextField id="name" label="nom" variant="outlined" required onChange={(e)=>setLastName(e.target.value)}/>
    <h1 className='name'><CreateOutlinedIcon/>Prénom:</h1>
    <TextField id="first name" label="prénom" variant="outlined" required onChange={(e)=>setName(e.target.value)}/>
    <br/>
    <br/>
    <Divider/>
    <FormControl>
      <FormLabel id="subscription">subscription period</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="year"
      >
        <FormControlLabel value="one" control={<Radio />} label="1 mois" onChange={(e)=>setPeriod(e.target.value)}/>
        <FormControlLabel value="two" control={<Radio />} label="2 mois" onChange={(e)=>setPeriod(e.target.value)}/>
        <FormControlLabel value="three" control={<Radio />} label="3 mois" onChange={(e)=>setPeriod(e.target.value)}/>
        <FormControlLabel value="six" control={<Radio />} label="6 mois" onChange={(e)=>setPeriod(e.target.value)}/>
        <FormControlLabel value="year" control={<Radio />} label="un an" onChange={(e)=>setPeriod(e.target.value)}/>

      </RadioGroup>
    </FormControl>
    <br/>
    <br/>
    {period==="one"?
    <img  alt='one' src='1.png'/>
    :period==="two"?
    <img alt='two' src='2.png'/>
    :period==="three"?
    <img alt='three' src='3.png'/>
    :period==="six"?
    <img alt='six' src='6.png'/>
    :<img alt='year' src='12.png'/>
  
      
    }
    <br/>
    <br/>
    <Button variant="outlined" type='submit' disabled={notValid}>cliquez pour soumettre</Button>
    </Container>

    </>
    )};


export default User;