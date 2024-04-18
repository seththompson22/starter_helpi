
import React, { useState } from "react";
import { Button } from "react-bootstrap";

import OpenAI from "openai";



export function Counter(): JSX.Element {
  function inputAPI() {
    
    const openai = new OpenAI();

    async function computeAPI() {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "Come up with a rap." }],
        model: "gpt-3.5-turbo",
      });
    
      console.log(completion.choices[0]);
    
    }
    computeAPI();
  }
  const [value, setValue] = useState<number>(0);
  return (
    <div>
      <span>
          <Button onClick={() => setValue(1 + value)}>Add Two</Button>
          to {value}.
      </span>
      <span>
          <Button onClick={() => inputAPI()}> Here is the API stuff </Button>
      </span>
    </div>
  );
}