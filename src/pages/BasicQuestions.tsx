import "../App";
import "../styles/BasicQuestions.css";
import NavigationBar from "../components/NavigationBar";
import QuestionCard from "../components/QuestionCard";
import { useState } from "react";
import CustomFooter from "../components/CustomFooter";
import React from "react";

// Define an array of question objects


const questions = [
  {
    question: "Which industry interests you the most?",
    choices: [
      "Technology",
      "Healthcare",
      "Finance",
      "Creative Arts",
      "Education",
      "Marketing",
      "Hospitality",
      "Manufacturing",
    ],
  },
  {
    question: "Do you prefer working independently or as part of a team?",
    choices: ["Independently", "Part of a team", "Both equally"],
  },
  {
    question: "Which type of role are you most interested in?",
    choices: ["Technical", "Creative", "Leadership"],
  },
  {
    question: "What work environment do you prefer?",
    choices: ["Fast-paced and dynamic", "Stable and predictable"],
  },
  {
    question: "What aspect of work do you enjoy the most?",
    choices: [
      "Problem-solving",
      "Collaborating with others",
      "Managing projects",
    ],
  },
  {
    question: "Which work setting appeals to you?",
    choices: ["Office", "Remote", "Hybrid"],
  },
  {
    question: "Are you interested in further education or training?",
    choices: ["Yes", "Maybe", "No"],
  },
  {
    question: "What do you prioritize in a career?",
    choices: ["Job security", "Potential for growth", "Both equally"],
  },
  {
    question: "What level of responsibility are you comfortable with?",
    choices: ["Entry-level", "Mid-level", "Senior-level"],
  },
];

export function BasicQuestions() {
  // State to track completion status
  const [completed, setCompleted] = useState(false);

  // Question List
  const [questionList, setQuestionList] = useState<string[]>(["Which of the following industries interests you the most: technology, healthcare, finance, or creative arts?", "Do you prefer working independently or as part of a team?", "Are you more interested in technical roles, creative roles, or leadership positions?", "Would you rather work in a fast-paced, dynamic environment or a stable, predictable one?", "Do you enjoy solving complex problems, working with people, or managing projects?", "Which of the following work settings appeals to you: office, remote, or hybrid?", "Are you interested in pursuing further education or training in your career field?", "Do you value job security and stability over potential for growth and advancement?", "What level of responsibility are you comfortable with in a professional role?"]);
  // Answer List
  const [answerList, setAnswerList] = useState<string[]>(["Technology","Independently","Technical roles","Fast-paced, dynamic environment","Solving complex problems","Office", "Yes, definitely", "Job security and stability", "Entry-level tasks and responsibilities"]);


  // Callback function to handle completion
  const handleCompletion = () => {
    setCompleted(true);
  };

  return (
    <div className="basic-questions-page">
      <NavigationBar />
      <h1 className="basic-q-title">Basic Question Career Quiz</h1>
      {/* Render QuestionCard only if not completed */}
      {!completed && (
        <QuestionCard questions={questions} onCompletion={handleCompletion} />
      )}
      {/* Render completion message if completed */}
      {completed && (
        <p style={{ fontSize: "24px" }}>You have completed the quiz!</p>
      )}
      <CustomFooter />
    </div>
  );
}

export default BasicQuestions;