import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import OpenAI from "openai";

const openai = new OpenAI();

async function InputAPI() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "What is the sky?" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
  return completion.choices[0]
}


interface ChangeValue {
    setDhValue: (value: number) => void;
    x: number;
}

// 3 functions are components because they return JSX components
function Doubler({ setDhValue, x }: ChangeValue): JSX.Element {
    return <Button onClick={() => setDhValue(2 * x)}>Double</Button>;
}

function Halver({ setDhValue, x }: ChangeValue): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * x)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    useEffect(() => {
      const fetchData = async () => {
      const result = await InputAPI();
      setInputValue(result?.content || null);
    };
  
      fetchData();
    }, []);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <InputAPI></InputAPI>
            <Halver setDhValue={setDhValue} x={dhValue}></Halver>
        </div>
    );
}
//<Doubler setDhValue={setDhValue} x={dhValue}></Doubler>