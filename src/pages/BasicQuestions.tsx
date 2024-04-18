//import React, { useState } from "react";
//import { Form, ProgressBar } from "react-bootstrap";
import "../App";
import "../styles/BasicQuestions.css";
import { MultipleChoiceQuestion } from "../question-format-components/MultipleChoiceQuestion";
import NavigationBar from "../components/NavigationBar";
import React, { useState } from "react";
import ProgressBar from "../components/progressBar";
//import { ProgressBarProps } from "../components/progressBar";
import { Form } from "react-bootstrap";
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
    // State to track the number of answered questions
    const [answeredQuestions, setAnsweredQuestions] = useState(0);

    // Function to handle answering a question
    const handleAnswerQuestion = () => {
      // Logic to handle answering the question
      // Increment the number of answered questions
      setAnsweredQuestions((prevCount) => prevCount + 1);
    };
  

    return (
      <div className="basic-questions-page">
        <NavigationBar />
        <h1 className="basic-q-title">Basic Question Career Quiz</h1>
        <p className="basic-q-desc">Basic Question Career Quiz Description</p>
        <Form>
          {/* Render the ProgressBar component */}
          <ProgressBar totalQuestions={questionOptions.length} answeredQuestions={answeredQuestions} />
  
          {/* Render the multiple-choice questions */}
          {questionOptions.map((question, index) => (
            <MultipleChoiceQuestion
              key={index}
              question={question}
              options={answerOptions}
              expectedAnswer=""
              onAnswer={handleAnswerQuestion} // Call handleAnswerQuestion when a question is answered
            ></MultipleChoiceQuestion>
          ))}
        </Form>
      </div>
    );
  }

export default BasicQuestions;
