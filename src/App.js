import React, { Component } from "react";
import { Paper, Button } from '@material-ui/core';

const publicURL = 'https://swe432-mei-gibbons.herokuapp.com';
var noiseLevel = null;

var crowd = null;
var comfort = null;

var loc = null;

export const getLocationUrlData = () => {
  return {
      url:
          process.env.NODE_ENV === 'production'?
          publicURL
          :`${window.location.origin}`,
      hash: `${window.location.hash}`
  };
};
export const servicePath ='/result';

const url = `${getLocationUrlData().url}${servicePath}`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {response: null};
  }

  handleChange = event => {
    if(event.target.name === "noiseLevel") {
      noiseLevel = event.target.value;
    }
    if(event.target.name === "crowd") {
      crowd = event.target.value;
    }
    if(event.target.name === "comfort") {
      comfort = event.target.value;
    }
    
    if(event.target.name === "loc") {
      loc = event.target.value;
      var theLoc = document.getElementById('theLoc');
	  theLoc.style.display='block';
    }
  };

  fetchData = async()=>{
        
        loc=document.getElementById('theLoc').value;
        
        const body = `noiseLevel=${noiseLevel}&crowd=${crowd}&comfort=${comfort}&loc=${loc}`;

        console.log("Before fetch");
        const res = await fetch(url,
          {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              // 'Content-Type': 'application/json'
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            //redirect: 'follow', // manual, *follow, error
            //referrerPolicy: 'no-referrer', // no-referrer, *client
            body  // body data type must match "Content-Type" header
          }
        );
        const json = await res.json();
        console.log(json)
        this.setState({response: json});
  }

  render() {
    return (
      <div id = "container">
        <div align = "center">
          <h1>Best Place to Study on Campus</h1>
          <h2>Fill out the form to rate study areas on campus!</h2>
        </div>
        
        <div align = "center">
    			<p>
          Assignment 7 - Mei Gibbons
    			</p>
    			<p>
          <br/>
    			Please fill out the following survey to the best of your ability and answer all of the questions.
    			<br/>
    			</p>
        </div>

    			<div id = "formQuestions" align = "center">
    			
    		Location
    	    <br/>
            	<input type="text" onChange={this.handleChange} id="theLoc" name="loc" style={{display:'none'}}  />
    	    <br/>
    			
    			
            Rating for Noise Level: (1-very loud, 5-silent)
            <br/>

    	      <input type="radio" onChange={this.handleChange} id="one" name="noiseLevel" value="1" />
    	      <label htmlFor="one">1</label><br/>
    	      
    	      <input type="radio"  onChange={this.handleChange} id="two" name="noiseLevel" value="2" />
    	      <label htmlFor="two">2</label><br/>
    	      
    	      <input type="radio" onChange={this.handleChange} id="three" name="noiseLevel" value="3" />
    	      <label htmlFor="three">3</label><br/>
    	      
    	      <input type="radio"  onChange={this.handleChange} id="four" name="noiseLevel" value="4" />
    	      <label htmlFor="four">4</label><br/>
    	      
    	      <input type="radio"  onChange={this.handleChange} id="five" name="noiseLevel" value="5" />
    	      <label htmlFor="five">5</label><br/>
    	    
    	    <br/>

    	      Rating for Crowdedness: (1-way too crowded, 5-hardly any people)
    	      <br/>

    	      <input type="radio" onChange={this.handleChange} id="one" name="crowd" value="1"/>
    	      <label htmlFor="one">1</label><br/>
    	      
    	      <input type="radio" onChange={this.handleChange} id="two" name="crowd" value="2"/>
    	      <label htmlFor="two">2</label><br/>
    	      
    	      <input type="radio" onChange={this.handleChange} id="three" name="crowd" value="3"/>
    	      <label htmlFor="three">3</label><br/>
    	      
    	      <input type="radio" onChange={this.handleChange} id="four" name="crowd" value="4"/>
    	      <label htmlFor="four">4</label><br/>
    	      
    	      <input type="radio" onChange={this.handleChange} id="five" name="crowd" value="5"/>
    	      <label htmlFor="five">5</label><br/>
    	      <br/>

    	      Rating for Comfort of Seats: (1-uncomfortable, 5-very comfortable)
    	      <br/>

    	      <input type="radio" onChange={this.handleChange} id="one" name="comfort" value="1"/>
    	      <label htmlFor="one">1</label><br/>
    	      
    	      <input type="radio" onChange={this.handleChange} id="two" name="comfort" value="2"/>
    	      <label htmlFor="two">2</label><br/>
    	      
    	      <input type="radio" onChange={this.handleChange} id="three" name="comfort" value="3"/>
    	      <label htmlFor="three">3</label><br/>
    	      
    	      <input type="radio" onChange={this.handleChange} id="four" name="comfort" value="4"/>
    	      <label htmlFor="four">4</label><br/>
    	      
    	      <input type="radio" onChange={this.handleChange} id="five" name="comfort" value="5"/>
    	      <label htmlFor="five">5</label><br/>
    	      <br/>


            <Button onClick={this.fetchData} color="primary" data-something="submit">
                 submit</Button>

    			</div>
          <div align = "center">
            <Paper elevation={1} style={
                {height:100, width:500, wordBreak: "break-all", padding:4}
            } >
              {this.state.response?JSON.stringify(this.state.response, null, 1):
                (<p>

                </p>)}
            </Paper>
          </div>
      </div>
    );
  }
}

export default App;
