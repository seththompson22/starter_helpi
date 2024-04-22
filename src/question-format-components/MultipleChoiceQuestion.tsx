import React from "react";
import { Form } from "react-bootstrap";
import "../styles/MultipleChoiceQuestion.css";

interface MultipleChoiceQuestionProps {
  question: string;
  options: string[];
  expectedAnswer: string;
  onAnswer: () => void;
  onDeselect: () => void; // Add the new prop for deselecting an answer
}

export const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  question,
  options,
  expectedAnswer,
  onAnswer,
  onDeselect, // Destructure the new prop
}) => {
  const handleAnswer = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Check if an answer is selected
    if (event.target.value !== "") {
      onAnswer(); // Invoke the onAnswer callback when an answer is selected
    } else {
      onDeselect(); // Invoke the onDeselect callback when an answer is deselected
    }
  };

  return (
    <Form.Group className="question-group">
      <Form.Label>{question}</Form.Label>
      <Form.Select onChange={handleAnswer}>
        {options.map((option: string, index: number) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default MultipleChoiceQuestion;
