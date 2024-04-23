
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import {openai} from "../pages/Home"
import { ChatCompletionMessageParam } from "openai/resources";



export function APIButton(): JSX.Element {

  // States
  const [apiVal, setApiVal] = useState<string>("");
  const [chatLog, setChatLog] = useState<ChatCompletionMessageParam[]>([{ role: "system", content: "You are a career advisor." }])
  
  
  async function computeAPI(apiInput: string) {

    try {
      
      const apiMessage: ChatCompletionMessageParam[] = [{ role: "system", content: "You are a career advisor." }, { role: "assistant", content: apiInput }]

      const completion = await openai.chat.completions.create({
        messages: apiMessage,
        model: "gpt-3.5-turbo",
      });
      
      setApiVal(JSON.stringify(completion.choices[0]["message"]["content"]).replace(/\\n/g, "\n"));
      console.log(completion.choices[0]);
    
    }
    catch (error) {
      console.log("Error");
      setApiVal(JSON.stringify("Error"));

    }
  }

  function updateName(event: React.ChangeEvent<HTMLInputElement>) {
     setApiVal(event.target.value);
  }
  return (
    <div>
      <Form.Group controlId="apiValue">
        <Form.Label>Enter your career related questions: </Form.Label>
        <Form.Control value={apiVal} onChange={updateName} />
        <Form.Text className="WhatIsThis">
                    .
        </Form.Text>
      </Form.Group>
      <span>
          <Button onClick={() => computeAPI(apiVal)}>Answer Your Question</Button>
          to 1.
      </span>

      <span>
          <Button onClick={() => computeAPI("Come up with a rap.")}> ??? </Button>
      </span>
      <span>
          The API response is: {apiVal}
      </span>
    </div>
  );
}