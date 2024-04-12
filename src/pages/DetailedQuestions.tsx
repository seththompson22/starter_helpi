//import React, { useState } from 'react';
import logo from "../styles/logo.svg";
import "../styles/BasicQuestions.css";
import NavigationBar from "../components/NavigationBar";
//import { Button, Form } from 'react-bootstrap';
//import { ButtonToPages } from './ButtonToPages';

export function LocalLink() {
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button

  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <code>Matthew Holinger</code>
      </p>
    </div>
  );
}

export default LocalLink;
