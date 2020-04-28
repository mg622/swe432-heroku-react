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
        <h1>Best Place to Study</h1>
        <p>Fill out the form to rate study areas on campus!</p>
      </div>
    
    <Grid className="center aligned">
      <form>
        <label>
          Location:  
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </Grid>
      
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
 <p>Rating for Noise Level (fewer stars means louder): </p>

 <Grid container direction="column" justify="space-evenly" alignItems="center">
       <FormLabel component="legend">Johnson Center</FormLabel>
      <Rating name = "Noise Level" id="JC" JC={ratingJC} precision={0.5} defaultValue={2.5} onChange={changeJC} />
    </ Grid>
     <p></p>
  
  <p>Rating for Crowdedness (fewer stars means more crowded): </p>

     <Grid container direction="column" justify="space-evenly" alignItems="center">
          <FormLabel component="legend">Fenwick Library</FormLabel>
    <Rating name = "Crowdedness" id="FW" FW={ratingFW} precision={0.5} defaultValue={2.5} onChange={changeFW} />
    </ Grid>
     <p></p>
  
  <p>Rating for Comfort of Seats(fewer stars means less comfortable): </p>

     <Grid container direction="column" justify="space-evenly" alignItems="center">
        <FormLabel component="legend">Robinson Hall B</FormLabel>
      <Rating name = "Comfort" id="RHB" RHB={ratingRHB} precision={0.5} defaultValue={2.5} onChange={changeRHB} />
      </ Grid>
    <p></p>

     
<p></p><p></p>
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
      </div>

    </>
  );
}

export default App;
