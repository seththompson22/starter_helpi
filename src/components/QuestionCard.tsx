import "../styles/QuestionCard.css";
import MultipleChoiceQuestion from "../question-format-components/MultipleChoiceQuestion";
import { useState } from "react";
import ProgressBar from "./progressBar";
import React from "react";
import OpenAI from "openai";
import { saveKeyData } from "../pages/Home";


// The API object needed to do API calls which requires a working API key
export let openai: OpenAI;
export let questionVals: string[];
export let answerVals: string[];

interface QuestionCardProps {
  questions: { question: string; choices: string[] }[];
  onCompletion: () => void; // Add the onCompletion prop
}

interface ApiAnswer {
  question: string;
  answer: string | null;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ questions, onCompletion }) => { // Add onCompletion to props
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  // State to track the number of answered questions
  const [, setAnsweredQuestions] = useState(0);

  // Function to handle answering a question
  const handleAnswerQuestion = () => {
    // Logic to handle answering the question
    // Increment the number of answered questions
    setAnsweredQuestions((prevCount) => prevCount + 1);
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleChoiceChange = (choice: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = choice;
    setAnswers(newAnswers);
    handleAnswerQuestion();
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // You can handle the submission of answers here, for example, sending them to an API

    const apiAnswers: ApiAnswer[] = questions.map((value, index) => {
      return { question: value.question, answer: answers[index] };
    });

    console.log("Submitted answers:", apiAnswers);
    
    // Check if all questions are answered
    if (answers.every((answer) => answer !== null)) {
      onCompletion(); // Call the onCompletion function
    }

    //{} is an object of all of the parameter types.
    // apiKey lets you manually input the API key.
    // The ".replace(/"/g, '')" takes off the extra first and last double quotation marks from the key.
    // The "?." is optional chaining in case the string is null.
    openai = new OpenAI({apiKey: localStorage.getItem(saveKeyData)?.replace(/"/g, '') || undefined, dangerouslyAllowBrowser: true});
    
    const questionArray = questions.map((val: {
      question: string;
      choices: string[];
      }): string => val.question);

    console.log(questionArray);
    console.log(answers);

    


    window.location.href = "/starter_helpi/#/CareerReport";

  };

  const allQuestionsAnswered = answers.every((answer) => answer !== null);

  return (
    <div className="question-card">
      <h2>{questions[currentQuestion].question}</h2>
      <MultipleChoiceQuestion
        choices={questions[currentQuestion].choices}
        selectedChoice={answers[currentQuestion] || ""}
        onSelectChoice={handleChoiceChange}
        disabled={submitted} // Disable options after submission
        onAnswer={handleAnswerQuestion}
      />
      <ProgressBar
        totalQuestions={questions.length}
        answeredQuestions={answers.filter((value) => value !== null).length}
      />
      <div className="navigation">
        <button
          className="prev-btn btn"
          onClick={prevQuestion}
          disabled={currentQuestion === 0 || submitted}
        >
          Previous
        </button>
        <button
          className="next-btn btn"
          onClick={nextQuestion}
          disabled={currentQuestion === questions.length - 1 || submitted}
        >
          Next
        </button>
        <button
          className="submit-btn btn"
          onClick={handleSubmit}
          disabled={!allQuestionsAnswered || submitted}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
