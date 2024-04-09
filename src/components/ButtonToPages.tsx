//import React, { useState } from "react";
//import { Button } from "react-bootstrap";


// 3 functions are components because they return JSX components

export function ButtonToPages(): JSX.Element {
    //const [counter, setCounter] = useState<number>(0);
  
    /*
    function addOne(): void {
      setCounter(counter+1);
    }
    */
    
    return (
      <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Easy Questions
        </a>
        <ul>
          <li>
            {/* change LocalLink for link to detailed questions page!! */}
            <a href="/#/LocalLink">Detailed Questions (seth's fake)</a>
          </li>
          <li>
            <a href="/#/BasicQuestions">Basic Questions Page</a>
          </li>
        </ul>
      </div>
    );
  }  
    
    
    
    //<Button onClick={addOne}>Click to add 1 to: {counter}</Button>;

  