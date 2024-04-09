//import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import "../App";
import { MultipleChoiceQuestion } from "../question-format-components/MultipleChoiceQuestion";
import NavigationBar from "../NavigationBar";
//import { Button, Form } from 'react-bootstrap';
//import { ButtonToPages } from './ButtonToPages';

export function BasicQuestions() {
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button

  return (
    <div>
      <NavigationBar></NavigationBar>
      <Form>
        <MultipleChoiceQuestion options={["a", "b", "c"]} expectedAnswer="b" />
      </Form>
    </div>
  );
}

export default BasicQuestions;
