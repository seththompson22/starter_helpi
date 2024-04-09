//import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import "./App.css";
//import { Button, Form } from 'react-bootstrap';
//import { ButtonToPages } from './ButtonToPages';

export function BasicQuestions() {
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicQuestions">
          <Form.Label>Enter Question Here</Form.Label>
          <Form.Control type="" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default BasicQuestions;
