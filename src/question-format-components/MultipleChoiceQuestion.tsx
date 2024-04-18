import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../styles/MultipleChoiceQuestion.css";

interface MultipleChoiceQuestionProps {
  question: string;
  options: string[];
  expectedAnswer: string;
  onAnswer: () => void; // Callback function to call when the correct answer is selected
}

export function MultipleChoiceQuestion({
  question,
  options,
  expectedAnswer,
  onAnswer,
}: MultipleChoiceQuestionProps): JSX.Element {
  const [selected, setSelected] = useState<string>("");

  // Function to handle option selection
  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    setSelected(selectedOption);

    // Check if the selected option matches the expected answer
    if (selectedOption === expectedAnswer) {
      // Call the onAnswer callback if the selected option is correct
      onAnswer();
    }
  };

  return (
    <Form.Group className="question-group">
      <Form.Label>{question}</Form.Label>
      <Form.Select value={selected} onChange={handleSelectOption}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}
