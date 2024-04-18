//import React, { useState } from 'react';
//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import logo from "./logo.svg";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import DetailedQuestions from './DetailedQuestions';
import ResponsePage from './ResponsePage'; // Import the ResponsePage component
import React from 'react';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {

  const [showText, setShowText] = useState(false); // State to manage text visibility
  const [apiResponse, setApiResponse] = useState(""); // State to store API response

  const toggleText = () => {
    setShowText(!showText);
  };
  const apiText = async () => {
    const apiText = async () => {
      console.log('apiText function called');
      try {
        // API request code
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };
    try {
      const response = await fetch('http://localhost:3017/generate-rap');
      if (!response.ok) {
        throw new Error('Failed to fetch API data');
      }
      const data = await response.text(); // Adjust this line based on API response format
      setApiResponse(data); // Update state with API response
    } catch (error) {
      console.error('Error fetching API data:', error);
    }
  };

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
  return (
    <div className="App">
    <button onClick={apiText}>Generate Rap</button>
      {apiResponse && <p>{apiResponse}</p>} {/* Display API response if available */}
<HashRouter>
  <Routes>
    <Route path = "/" element = {<Home/>} />
    <Route path = "/DetailedQuestions" element = {<DetailedQuestions/>} />
    <Route path = "/ResponsePage" element = {<ResponsePage/>} />
  </Routes>
  
</HashRouter>


</div>

  );
}

export default App;
