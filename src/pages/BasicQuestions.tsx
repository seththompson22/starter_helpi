//import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../App";
import "../styles/BasicQuestions.css";
import NavigationBar from "../components/NavigationBar";
import QuestionCard from "../components/QuestionCard";
//import { Button, Form } from 'react-bootstrap';
//import { ButtonToPages } from './ButtonToPages';

const questions = [
  {
    question:
      "Which of the following industries interests you the most: technology, healthcare, finance, or creative arts?",
    choices: [
      "Technology",
      "Healthcare",
      "Finance",
      "Creative arts",
      "Other (please specify)",
    ],
  },
  {
    question: "Do you prefer working independently or as part of a team?",
    choices: [
      "Independently",
      "Part of a team",
      "Both, depending on the situation",
      "Other (please specify)",
    ],
  },
];

export function BasicQuestions() {
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  return (
    <div className="basic-questions-page">
      <NavigationBar></NavigationBar>
      <h1 className="basic-q-title">Basic Question Career Quiz</h1>
      <QuestionCard questions={questions}></QuestionCard>
    </div>
  );
}

export default BasicQuestions;
