//import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import "../App";
import "../styles/BasicQuestions.css";
import { MultipleChoiceQuestion } from "../question-format-components/MultipleChoiceQuestion";
import NavigationBar from "../components/NavigationBar";
//import { Button, Form } from 'react-bootstrap';
//import { ButtonToPages } from './ButtonToPages';

export function BasicQuestions() {
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button

  return (
    <div className="basic-questions-page">
      <NavigationBar></NavigationBar>
      <Form>
        {/* plan is to modify MultipleChoiceQuestion to be able to enter the question name into a new field called question, 
        then I can map an input from a text file of the questions for the basic page to create all of the questions in the 
        form of this type*/}
        <MultipleChoiceQuestion options={["a", "b", "c"]} expectedAnswer="b" />
        <MultipleChoiceQuestion
          options={[
            "Strongly Disagree",
            "Disagree",
            "Neither Agree nor Disagree",
            "Agree",
            "Strongly Agree",
          ]}
          expectedAnswer="Strongly Agree"
        />
      </Form>
    </div>
  );
}

export default BasicQuestions;
