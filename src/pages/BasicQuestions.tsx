//import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../App";
import "../styles/BasicQuestions.css";
import { MultipleChoiceQuestion } from "../question-format-components/MultipleChoiceQuestion";
import NavigationBar from "../components/NavigationBar";
import { useState } from "react";
import React from "react";
//import { Counter } from "./APIButton";
//import { Button, Form } from 'react-bootstrap';
//import { ButtonToPages } from './ButtonToPages';

export function BasicQuestions() {
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  return (
    <div className="basic-questions-page">
      <NavigationBar />
      <h1 className="basic-q-title">Basic Question Career Quiz</h1>
      <p className="basic-q-desc">Basic Question Career Quiz Description</p>
      
      <Form>
        {/* plan is to:
        DONE  - modify MultipleChoiceQuestion to be able to enter the question name into a new field called question
        DONE - map questions for the basic page to create all of the questions in the form of this type*/}
        {questionOptions.map((question, index) => (
          <MultipleChoiceQuestion
            question={question}
            options={answerOptions}
            expectedAnswer=""
          ></MultipleChoiceQuestion>
        ))}
      </Form>
      {/* Render QuestionCard only if not completed */}
      {!completed && <QuestionCard questions={questions} onCompletion={handleCompletion} />}
      {/* Render completion message if completed */}
      {completed && <p style={{ fontSize: '24px' }}>You have completed the quiz!</p>}
    </div>
  );
}

export default BasicQuestions;
