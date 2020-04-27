import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper'; 
import Grid from '@material-ui/core/Grid';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Rating} from "@material-ui/lab";

import './App.css';
import Fetcher from './components/Fetcher';
import Hooks, {aFunc} from './components/Hooks';
// import {Skeleton, Rating} from "@material-ui/lab"; 

function App() {

  const [value, setValue] = React.useState('freshman');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [loading, setLoading] = useState(true);
// const [rating, setRating, FW, JC, RHB, SS, VSOE] = useState(3);
const [ratingJC, setRatingJC] = useState(2.5);
const [ratingFW, setRatingFW] = useState(2.5);
const [ratingRHB, setRatingRHB] = useState(2.5);
const [ratingSS, setRatingSS] = useState(2.5);
const [ratingVSE, setRatingVSE] = useState(2.5);

const changeJC = (e1, newJC) => { setRatingJC(newJC); };
const changeFW = (e2, newFW) => { setRatingFW(newFW); };
const changeRHB = (e3, newRHB) => { setRatingRHB(newRHB); };
const changeSS = (e4, newSS) => { setRatingSS(newSS); };
const changeVSE = (e5, newVSE) => { setRatingVSE(newVSE); };


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [])

  return (
    <>
     <div align = "center">
      <h1>SWE 432: Assignment 7</h1>
      <p>Mei Gibbons </p>
      </div>
      
      <Grid container direction="column" justify="space-evenly" alignItems="center">
    <FormControl component="fieldset">
      <FormLabel component="legend">School Year</FormLabel>
      <RadioGroup aria-label="schoolYear" name="year1" value={value} onChange={handleChange}>
        <FormControlLabel value="freshman" control={<Radio />} label="Freshman" />
        <FormControlLabel value="sophomore" control={<Radio />} label="Sophomore" />
        <FormControlLabel value="junior" control={<Radio />} label="Junior" />
        <FormControlLabel value="senior" control={<Radio />} label="Senior" />
      </RadioGroup>
    </FormControl> 
    </ Grid>

    <div align = "center">
 <p>Please rate the following GMU buildings on a scale of 1 (worst) to 5 (best): </p>

 <Grid container direction="column" justify="space-evenly" alignItems="center">
       <FormLabel component="legend">Johnson Center</FormLabel>
      <Rating name = "Johnson Center" id="JC" JC={ratingJC} precision={0.5} defaultValue={2.5} onChange={changeJC} />
    </ Grid>
     <p></p>

     <Grid container direction="column" justify="space-evenly" alignItems="center">
          <FormLabel component="legend">Fenwick Library</FormLabel>
    <Rating name = "Fenwick Library" id="FW" FW={ratingFW} precision={0.5} defaultValue={2.5} onChange={changeFW} />
    </ Grid>
     <p></p>

     <Grid container direction="column" justify="space-evenly" alignItems="center">
        <FormLabel component="legend">Robinson Hall B</FormLabel>
      <Rating name = "Robinson Hall B" id="RHB" RHB={ratingRHB} precision={0.5} defaultValue={2.5} onChange={changeRHB} />
      </ Grid>
    <p></p>

    <Grid container direction="column" justify="space-evenly" alignItems="center">
          <FormLabel component="legend">Southside</FormLabel>
      <Rating name = "Southside" id="SS" SS={ratingSS} precision={0.5} defaultValue={2.5} onChange={changeSS} />
      </ Grid>
     <p></p>

     <Grid container direction="column" justify="space-evenly" alignItems="center">
          <FormLabel component="legend">Volgenau School of Engineering</FormLabel>
       <Rating name = "Volgenau School of Engineering" id="VSE" VSE={ratingVSE} precision={0.5} defaultValue={2.5}  onChange={changeVSE} />
       </ Grid>
<p></p><p></p><p></p>
        <button onclick="printValues()" id="printV">Submit</button> 
  
<p></p>
SCHOOL YEAR: {value}
<p></p>
JC: {ratingJC}
<p></p>
FW: {ratingFW}
<p></p>
RHB: {ratingRHB}
<p></p>
SS: {ratingSS}  
<p></p>
VSE: {ratingVSE}
<p></p>
      </div>

    </>
  );
}

export default App;
