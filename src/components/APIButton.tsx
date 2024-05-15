
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { openai } from "../components/CustomFooter";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
//import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
//import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

export function APIButton(): JSX.Element {

  // States
  // The API input
  const [value, setValue] = useState<string>("");
  const [apiVal, setApiVal] = useState<string>("");
  const [dispInit, setDispInit] = useState<boolean>(true);
  const [dispFinal, setDispFinal] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  // The whole conversation

  const [chatLog, setChatLog] = useState<ChatCompletionMessageParam[]>([{ role: "system", content: "You are a career advisor." }, { role: "user", content: "I am trying to figure out what my future career should be. Ask me a list of questions that I can answer." },  ...apiQuestions, ...userAnswers, { role: "user", content: "That was all of the answers. Now give me your top three career recommendations. For each company, include your reasoning, the average salary, and what experience I need for this career."}])
  


  async function careerRecommendation() {
    setError(false);
    // Removes the initial button  
    setDispInit(false);
    // Tries to call the API
    try {
      //const apiMessage: ChatCompletionMessageParam[] = [{ role: "system", content: "You are a career advisor." }, { role: "assistant", content: apiInput }]
      const apiMessage: ChatCompletionMessageParam[] = [...chatLog];
      const completion = await openai.chat.completions.create({
        messages: apiMessage,
        model: "gpt-3.5-turbo",
      });
      // Adds the chat and the other buttons
      setDispFinal(true)
      // Extracts the message out of API response
      setValue(value + "AI Career Assistant: " + JSON.stringify(completion.choices[0]["message"]["content"]).replace(/\\n/g, "\n"));
      //console.log(completion.choices[0]);
      
      const apiResponse: ChatCompletionMessageParam[] = [...apiMessage, completion.choices[0]["message"]];
      setChatLog(apiResponse);
      // make system
    }
    // Website outputs an error message
    catch (error) {
      console.log("Error");
      setValue(JSON.stringify("API: Error. Try resubmitting your API key."));
      setDispInit(true);
      setError(true);
    }
    console.log(chatLog);
  }


  async function computeAPI(apiInput: string) {

    try {
      
      //const apiMessage: ChatCompletionMessageParam[] = [{ role: "system", content: "You are a career advisor." }, { role: "assistant", content: apiInput }]
      const apiMessage: ChatCompletionMessageParam[] = [...chatLog, {role: "user", content: apiInput }]

      const completion = await openai.chat.completions.create({
        messages: apiMessage,
        model: "gpt-4o",
      });
      
      setValue(JSON.stringify(completion.choices[0]["message"]["content"]).replace(/\\n/g, "\n"));
      console.log(completion.choices[0]);
      
      const apiResponse: ChatCompletionMessageParam[] = [...chatLog, completion.choices[0]["message"]];

      setChatLog(apiResponse)

    }
    catch (error) {
      console.log("Error");
      setValue(JSON.stringify("Error. Try resubmitting your API key."));

    }
  }
  // Hook does what?
  function updateName(event: React.ChangeEvent<HTMLInputElement>) {
     setApiVal(event.target.value);
  }
  return (
    <div>
      {dispInit === true &&
      <span>
          {/* Generates the career advice summary */}
          <Button onClick={() => careerRecommendation()}>Generate your Career Advice</Button>
      </span>}
      <br></br>
      {error === true &&
        <span>
          "API: Error. Try resubmitting your API key."
      </span>}
      
      <br></br>
      <br></br>
      <span>
      {dispFinal === true && 
      <><span>
      {/* Outputs whatever the API last said */}
      AI Career Assistant: {value}

      <br></br>
      <br></br>

      {/* Textbox that makes you input your career preferences or whatever */}
      {<Form.Group controlId="apiValue">
        <Form.Label>Enter any followup career related questions: </Form.Label>
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
          The API response is: {value}
      </span>
    </div>
  );
}