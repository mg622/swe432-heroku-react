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

  //const handleChange = (event) => {
    //setValue(event.target.value);
  //};

const [loading, setLoading] = useState(true);
const [ratingL, setRatingL] = useState(2.5);
const [ratingNL, setRatingNL] = useState(2.5);
const [ratingCD, setRatingCD] = useState(2.5);
const [ratingCM, setRatingCM] = useState(2.5);


const changeL = (e0, newL) => { setRatingL(newL); };
const changeNL = (e1, newNL) => { setRatingNL(newNL); };
const changeCD = (e2, newCD) => { setRatingCD(newCD); };
const changeCM = (e3, newCM) => { setRatingCM(newCM); };


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
        <p></p>
      </div>
    

    <div align = "center">
    
      <p>Location: <input type="text" name="name" /> </p>
        <Grid container direction="column" justify="space-evenly" alignItems="center">
          <FormLabel component="legend"></FormLabel>
            <Rating name="Location" id="L" L={ratingL} precision={0.5} defaultValue={2.5} onChange={changeL} />
        </ Grid>
      <p></p>
    
    
    
 <p>Rating for Noise Level (fewer stars means louder): </p>

 <Grid container direction="column" justify="space-evenly" alignItems="center">
       <FormLabel component="legend">Noise Level</FormLabel>
      <Rating name = "Noise Level" id="NL" NL={ratingNL} precision={0.5} defaultValue={2.5} onChange={changeNL} />
    </ Grid>
     <p></p>
  
  <p>Rating for Crowdedness (fewer stars means more crowded): </p>

     <Grid container direction="column" justify="space-evenly" alignItems="center">
          <FormLabel component="legend">Crowdedness</FormLabel>
    <Rating name = "Crowdedness" id="CD" CD={ratingCD} precision={0.5} defaultValue={2.5} onChange={changeCD} />
    </ Grid>
     <p></p>
  
  <p>Rating for Comfort of Seats (fewer stars means less comfortable): </p>

     <Grid container direction="column" justify="space-evenly" alignItems="center">
        <FormLabel component="legend">Comfort</FormLabel>
      <Rating name = "Comfort" id="CM" CM={ratingCM} precision={0.5} defaultValue={2.5} onChange={changeCM} />
      </ Grid>
    <p></p>

     
<p></p><p></p>
        <button onclick="printValues()" id="printV">Submit</button> 
  
      </div>

    </>
  );
}

export default App;
