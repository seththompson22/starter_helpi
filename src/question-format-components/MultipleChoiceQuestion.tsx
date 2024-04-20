import React, { useState } from "react";
import { Form } from "react-bootstrap";

function MultipleChoiceQuestion({
  answerOptions,
}: {
  answerOptions: string[];
}) {
  const [option, setOption] = useState<string>("");

  function updateOption(event: React.ChangeEvent<HTMLInputElement>) {
    setOption(event.target.value);
  }

  return (
    <div>
      {answerOptions.map((answer: string, index: number) => {
        return (
          <Form.Check
            key={answer}
            type="radio"
            id={answer}
            label={answer}
            value={answer}
            checked={option === answer}
            onChange={updateOption}
          />
        );
      })}
      {option === "Other (please specify)" ? (
        <Form.Group>
          <Form.Control placeholder="Please Specify Here" />
        </Form.Group>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MultipleChoiceQuestion;
