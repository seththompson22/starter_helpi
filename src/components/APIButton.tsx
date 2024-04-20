
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import {openai} from "../pages/Home"

export function APIButton(): JSX.Element {
  function inputAPI(apiInput: string) {
    
    async function computeAPI(apiInput: string) {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: apiInput }],
        model: "gpt-3.5-turbo",
      });
      
      setValue(JSON.stringify(completion.choices[0]["message"]["content"]).replace(/\\n/g, "\n"));
      console.log(completion.choices[0]);
    
    }
    computeAPI(apiInput);
  }
  const [apiVal, setApiVal] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const [name, setName] = useState<string>("");
  function updateName(event: React.ChangeEvent<HTMLInputElement>) {
     setName(event.target.value);
  }
  return (
    <div>
      <Form.Group controlId="apiValue">
        <Form.Label>Correct Answer is {5}:</Form.Label>
        <Form.Control value={name} onChange={updateName} />
        <Form.Text className="WhatIsThis">
                    Correct Ansswer is {5}. Your answer:{" "}
                    {5? "✔️" : "❌"}
        </Form.Text>
      </Form.Group>
      <span>
          <Button onClick={() => inputAPI(name)}>Add Two</Button>
          to 1.
      </span>
      <span>
          <Button onClick={() => inputAPI("Come up with a rap.")}> Here is the API stuff </Button>
      </span>
      <span>
          The current value is:{value}
      </span>
    </div>
  );
}