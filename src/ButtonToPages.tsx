import React, { useState } from "react";
import { Button } from "react-bootstrap";


// 3 functions are components because they return JSX components

export function ButtonToPages(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
  
    function addOne(): void {
      setCounter(counter+1);
    }
    
    return <Button onClick={addOne}>Click to add 1 to: {counter}</Button>;
  }
  