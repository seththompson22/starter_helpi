
import React, { useState } from "react";
import { Button } from "react-bootstrap";

import {openai} from "./Home"

export function Counter(): JSX.Element {
  function inputAPI() {
    
    //const openai = new OpenAI();

    async function computeAPI() {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "Come up with a rap." }],
        model: "gpt-3.5-turbo",
      });
      
      setValue(JSON.stringify(completion.choices[0]));
      console.log(completion.choices[0]);
    
    }
    computeAPI();
  }
  const [value, setValue] = useState<string>("");
  return (
    <div>
      <span>
          <Button onClick={() => setValue(1 + value)}>Add Two</Button>
          to {value}.
      </span>
      <span>
          <Button onClick={() => inputAPI()}> Here is the API stuff </Button>
      </span>
      <span>
        <div>
            The current value is:{value}
          </div>
        </span>
    </div>
  );
}