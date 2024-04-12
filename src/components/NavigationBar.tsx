//import React, { useState } from 'react';
import "../styles/NavigationBar.css";
//import { Button, Form } from 'react-bootstrap';
//import { ButtonToPages } from './ButtonToPages';

export function NavigationBar() {
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button

  return (
    <div>
      <header>
        <ul>
          <li>
            <a href="/starter_helpi">Home</a>
          </li>
          <li>
            <a href="/starter_helpi/#/DetailedQuestions">
              Detailed Questions Page
            </a>
          </li>
          <li>
            <a href="/starter_helpi/#/BasicQuestions">Basic Question Page</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default NavigationBar;
