
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import {openai, apiQuestions, userAnswers} from "../components/QuestionCard"
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";


// This file mainly handles the API stuff that is on the Career Report page.
export function APIButton(): JSX.Element {
  // States
  // The API input. Both are used for the API output.
  const [value, setValue] = useState<string>("");
  const [apiVal, setApiVal] = useState<string>("");
  // The whole conversation

  const [chatLog, setChatLog] = useState<ChatCompletionMessageParam[]>([{ role: "system", content: "You are a career advisor." }, { role: "user", content: "I am trying to figure out what my future career should be. Ask me a list of questions that I can answer." },  ...apiQuestions, ...userAnswers])
  

  async function computeAPI(apiInput: string) {
    // Tries to call the API
    try {
      //const apiMessage: ChatCompletionMessageParam[] = [{ role: "system", content: "You are a career advisor." }, { role: "assistant", content: apiInput }]
      const apiMessage: ChatCompletionMessageParam[] = [...chatLog, {role: "user", content: apiInput }];
      

      const completion = await openai.chat.completions.create({
        messages: apiMessage,
        model: "gpt-3.5-turbo",
      });
      // Extracts the message out of API response
      setValue(JSON.stringify(completion.choices[0]["message"]["content"]).replace(/\\n/g, "\n"));
      //console.log(completion.choices[0]);
      
      const apiResponse: ChatCompletionMessageParam[] = [...apiMessage, completion.choices[0]["message"]];
      setChatLog(apiResponse);
      
    }
    // Website outputs an error message
    catch (error) {
      console.log("Error");
      setValue(JSON.stringify("Error"));

    }
    
    console.log(chatLog);
  }
  // Hook does what?
  function updateName(event: React.ChangeEvent<HTMLInputElement>) {
     setApiVal(event.target.value);
  }

  // Runs the API on loading the page.
  /*
  useEffect(() => {
    // Run computeAPI() when the component mounts (i.e., when the page loads)
    computeAPI(""); // You can provide an initial question or input here
  }, []);
  */

  return (
    <div>
      {value === "" &&
      <span>
          {/* Generates the career advice summary */}
          <Button onClick={() => computeAPI("")}>Generate your Career Advice</Button>
      </span>}
      <span>
      {value !== "" && 
      <><span>
            {/* Button that calls the API on whatever is in the textbox */}
            <Button onClick={() => computeAPI(apiVal)}>Answer Your Question</Button>
          </span><span>
              {/* Button that calls the API to generate a rap */}
              <Button onClick={() => computeAPI("Come up with a rap.")}> ??? </Button>
            </span><span>
              {/* Outputs whatever the API last said */}
              The API response is: {value}
            
      {/* Textbox that makes you input your career preferences or whatever */}
      {/*value !== "" && */<Form.Group controlId="apiValue">
        <Form.Label>Enter your career related questions: </Form.Label>
        <Form.Control value={apiVal} onChange={updateName} />
        <Form.Text className="WhatIsThis">
                    .
        </Form.Text>
      </Form.Group>}
      </span></>
        }
      </span>
    </div>
  );
}