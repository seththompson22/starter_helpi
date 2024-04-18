import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../styles/MultipleChoiceQuestion.css";

export function MultipleChoiceQuestion({
  question,
  options,
  expectedAnswer,
}: {
  question: string;
  options: string[];
  expectedAnswer: string;
}): JSX.Element {
  const [selected, setSelected] = useState<string>(options[0]);

  function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(event.target.value);
  }
  return (
    <Form.Group className="question-group">
      <Form.Label>{question}</Form.Label>
      <Form.Select value={selected} onChange={updateSelected}>
        {options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
    //{/* store answer externally in line below */}
  );
}
