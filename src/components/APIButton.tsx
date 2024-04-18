
import React, { useState } from "react";
import { Button } from "react-bootstrap";

import {openai} from "./Home"

export function Counter(): JSX.Element {
  function inputAPI() {
    
    async function computeAPI() {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "Come up with a rap." }],
        model: "gpt-3.5-turbo",
      });
      
      setValue(JSON.stringify(completion.choices[0]["message"]["content"]).replace(/\\n/g, "\n"));
      console.log(completion.choices[0]);
    
    }
    computeAPI();
  }
  const [num, setNum] = useState<number>(0);
  const [value, setValue] = useState<string>("");
  return (
    <div>
      <span>
          <Button onClick={() => setNum(1 + num)}>Add Two</Button>
          to {num}.
      </span>
      <span>
          <Button onClick={() => inputAPI()}> Here is the API stuff </Button>
      </span>
      <span>
          The current value is:{value}
      </span>
    </div>
  );
}