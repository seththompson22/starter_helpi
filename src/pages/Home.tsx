import React, { useState } from "react";
import "../styles/App.css";
import { Button, Form } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import OpenAI from "openai";
import HeroSection from "../components/HeroSection";
import ChooseYourPathSection from "../components/ChooseYourPathSection";

// The API object needed to do API calls which requires a working API key
export let openai: OpenAI;

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
export const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}


export function Home() {
  const [key, setKey] = useState<string>(keyData); //for api key input

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }
  // Initializes the API
  function initAPI() {
    //{} is an object of all of the parameter types.
    // apiKey lets you manually input the API key.
    // The ".replace(/"/g, '')" takes off the extra first and last double quotation marks from the key.
    // The "?." is optional chaining in case the string is null.
    //openai = new OpenAI({apiKey: localStorage.getItem(saveKeyData)?.replace(/"/g, '') || undefined, dangerouslyAllowBrowser: true});
    //window.location.href = link;
  }
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <div className="content">
        <HeroSection sectionToScroll="choose-path-section" />
        <ChooseYourPathSection />
      </div>
      <Form className="API-key">
        <Form.Label>API Key:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Insert API Key Here"
          onChange={changeKey}
        ></Form.Control>
        <Button className="Submit-Button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <li>
        {/* Button that takes you to the career report page */}
        <a href="/starter_helpi/#/CareerReport">
          Career Report Page
        </a>
        {/* Button that initializes the API */}
        <button className="link-btn" type="button" onClick={initAPI}>
          <strong>Create API</strong>
        </button>
      </li>
    </div>
  );
}

export default Home;
