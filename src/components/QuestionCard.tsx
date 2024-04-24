import "../styles/QuestionCard.css";
import MultipleChoiceQuestion from "../question-format-components/MultipleChoiceQuestion";
import { useState } from "react";
import ProgressBar from "./progressBar";

interface QuestionCardProps {
  questions: { question: string; choices: string[] }[];
}

const QuestionCard: React.FC<QuestionCardProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  // State to track the number of answered questions
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  // Function to handle answering a question
  const handleAnswerQuestion = () => {
    // Logic to handle answering the question
    // Increment the number of answered questions
    setAnsweredQuestions((prevCount) => prevCount + 1);
  };
  const handleDeselectQuestion = () => {
    setAnsweredQuestions((prevCount) => prevCount - 1);
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
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // You can handle the submission of answers here, for example, sending them to an API
    console.log("Submitted answers:", answers);
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
        onDeselect={handleDeselectQuestion}
      />
      <ProgressBar
        totalQuestions={questions.length}
        answeredQuestions={answeredQuestions}
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
