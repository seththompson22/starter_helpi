
import React, { useState } from "react";
import { Button } from "react-bootstrap";

import OpenAI from "openai";

const openai = new OpenAI();

async function InputAPI() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Come up with a rap." }],
    model: "gpt-3.5-turbo",
  });


  console.log(completion.choices[0]);
}

export function Counter(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
      <div>
        <span>
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
            to {value}.
        </span>
        <span>
            <Button onClick={() => setValue(1 + value)}> jkj </Button>
        </span>
      </div>
    );
}
