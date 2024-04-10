import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Questions from './Questions';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {BrowserRouter as Switch} from 'react-router-dom';
import HomeButton from './homeButton'; // Import HomeButton component


//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

/*
<a 
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Easy Questions
        </a>

*/
/*

          <Switch>
              <Route path="/" Component={Home} /> 
              <Route path="/questions" Component={Questions} />
          </Switch>
*/


  return (
  <div>

          <header style={{ textAlign: 'center', color: '#083fcb' }}>
            <h1 style = {{fontSize: '3rem'}}>
               Detailed Questions Page <HomeButton />
            </h1>
          </header>

    <Questions/>
  
  </div>
  ); 
}

export default App;
