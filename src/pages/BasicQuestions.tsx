//import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../App";
import "../styles/BasicQuestions.css";
import { RangedResponseQuestion } from "../question-format-components/RangedResponseQuestion";
import NavigationBar from "../components/NavigationBar";
import QuestionCard from "../components/QuestionCard";
//import { Button, Form } from 'react-bootstrap';
//import { ButtonToPages } from './ButtonToPages';

export function BasicQuestions() {
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  const questionOptions = [
    "Do you enjoy working with your hands and creating tangible objects or structures?",
    "Do you thrive in environments where you can interact with people frequently?",
    "Do you prefer working independently rather than in a team setting?",
    "Are you passionate about helping others and making a positive impact on their lives?",
    "Do you enjoy analyzing data, solving problems, and finding innovative solutions?",
    "Are you comfortable with uncertainty and adapting to changes in your work environment?",
    "Do you have a strong interest in technology and enjoy keeping up with the latest advancements?",
    "Are you drawn to roles that involve creativity and expressing yourself artistically?",
    "Do you prefer working in a structured and organized environment with clear guidelines?",
    "Do you value work-life balance and prioritize your personal time outside of work?",
    "Are you motivated by financial rewards and opportunities for career advancement?",
    "Do you enjoy learning new skills and concepts, even if they are outside of your current expertise?",
    "Are you comfortable taking risks and stepping out of your comfort zone to pursue opportunities?",
    "Do you prefer a job that allows you to travel and experience different cultures?",
    "Do you value job security and prefer roles with stable employment prospects?",
    "Do you enjoy leading and guiding others in achieving common goals?",
    "Do you prioritize environmental sustainability and seek career paths that align with this value?",
    "Are you interested in roles that allow you to be entrepreneurial and create your own opportunities?",
    "Do you prefer working in fast-paced environments where there's always something new happening?",
    "Do you value autonomy and independence in your work decisions and tasks?",
  ];
  const answerOptions = [
    "",
    "Strongly Disagree",
    "Disagree",
    "Neither Agree nor Disagree",
    "Agree",
    "Strongly Agree",
  ];

  return (
    <div className="basic-questions-page">
      <NavigationBar></NavigationBar>
      <h1 className="basic-q-title">Basic Question Career Quiz</h1>

      <Form>
        <QuestionCard
          questions={[
            "Which of the following industries interests you the most: technology, healthcare, finance, or creative arts?",
            "Do you prefer working independently or as part of a team?",
          ]}
          questionTypes="Multiple Choice"
          answerOptions={[
            [
              "Technology",
              "Healthcare",
              "Finance",
              "Creative arts",
              "Other (please specify)",
            ],
            [
              "Independantly",
              "Part of a team",
              "Both, depending on the situation",
              "Other (please specify)",
            ],
          ]}
        ></QuestionCard>
      </Form>
    </div>
  );
}

export default BasicQuestions;
