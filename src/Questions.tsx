import React, { useState } from 'react';
import logo from './logo.svg';
import './Questions.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function Questions() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

/*
<a 
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Easy Questions
        </a>

*/

  return (
    <div className="Questions">

      <Container>
        <Row>
          {/* First column */}
          <Col>
            {/* Question 1 */}
            <Form.Group controlId="question1">
              <Form.Label style={{ fontSize: '1.2rem' }}>Question #1:</Form.Label>
              <Form.Control
                type="text"
                style={{ fontSize: '1.2rem' }}
                placeholder="Enter your answer"
              />
            </Form.Group>
  
            {/* Question 2 */}
            <Form.Group controlId="question2">
              <Form.Label style={{ fontSize: '1.2rem' }}>Question #2:</Form.Label>
              <Form.Control
                type="text"
                style={{ fontSize: '1.2rem' }}
                placeholder="Enter your answer"
              />
            </Form.Group>
          
            {/* Question 3 */}
            <Form.Group controlId="question3">
              <Form.Label style={{ fontSize: '1.2rem' }}>Question #3:</Form.Label>
              <Form.Control
                type="text"
                style={{ fontSize: '1.2rem' }}
                placeholder="Enter your answer"
              />
            </Form.Group>
  
            {/* Question 4 */}
            <Form.Group controlId="question4">
              <Form.Label style={{ fontSize: '1.2rem' }}>Question #4:</Form.Label>
              <Form.Control
                type="text"
                style={{ fontSize: '1.2rem' }}
                placeholder="Enter your answer"
              />
            </Form.Group>
          </Col>
            <Col>
            {/* Question 5 */}
            <Form.Group controlId="question1">
              <Form.Label style={{ fontSize: '1.2rem' }}>Question #5:</Form.Label>
              <Form.Control
                type="text"
                style={{ fontSize: '1.2rem' }}
                placeholder="Enter your answer"
              />
            </Form.Group>
  
            {/* Question 6 */}
            <Form.Group controlId="question2">
              <Form.Label style={{ fontSize: '1.2rem' }}>Question #6:</Form.Label>
              <Form.Control
                type="text"
                style={{ fontSize: '1.2rem' }}
                placeholder="Enter your answer"
              />
            </Form.Group>
          
            {/* Question 7 */}
            <Form.Group controlId="question3">
              <Form.Label style={{ fontSize: '1.2rem' }}>Question #7:</Form.Label>
              <Form.Control
                type="text"
                style={{ fontSize: '1.2rem' }}
                placeholder="Enter your answer"
              />
            </Form.Group>
  
            {/* Question 8 */}
            <Form.Group controlId="question4">
              <Form.Label style={{ fontSize: '1.2rem' }}>Question #8:</Form.Label>
              <Form.Control
                type="text"
                style={{ fontSize: '1.2rem' }}
                placeholder="Enter your answer"
              />
              </Form.Group>
            </Col>
        </Row>
      </Container>
  
      <Button className="Submit-Button" onClick={handleSubmit}>
        Submit Answers
      </Button>
    </div>
  );
  
  
}

export default Questions;
