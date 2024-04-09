import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
  options,
  expectedAnswer,
}: {
  options: string[];
  expectedAnswer: string;
}): JSX.Element {
  const [selected, setSelected] = useState<string>(options[0]);

  function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(event.target.value);
  }
  return (
    <div>
      <Form.Group>
        <Form.Label>Enter Question here: </Form.Label>
        <Form.Select value={selected} onChange={updateSelected}>
          {options.map((option: string) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      {/* store answer externally in line below */}
      <p>{selected}</p>
    </div>
  );
}
