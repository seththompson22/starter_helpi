import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './DetailedQuestions.css'; // Import CSS file
import HomeButton from './homeButton';
//import { useHistory } from 'react-router-dom';


function DetailedQuestions() {
  const [key, setKey] = useState<string>('');
  const [answers, setAnswers] = useState<string[]>(Array(8).fill(''));
// Handle submission of answers
const handleSubmit = () => {
  // Process or submit answers as needed
  console.log('Submitted Answers:', answers);
  
  // Clear the answers by resetting the state
  setAnswers(Array.from({ length: 8 }, () => ''));
};


  const handleAnswerChange = (index: number, value: string) => {
    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = value;
      return newAnswers;
    });
  };

  return (
    <div className="Questions">
      {/* HEADER FOR DQ PAGE */}
      <header style={{ textAlign: 'center', color: '#083fcb' }}>
              <h1 style={{ fontSize: '3rem' }}>
                 Detailed Questions Page <HomeButton />
              </h1>
            </header>


            <Container>
        <Row className="justify-content-center"> {/* Center the questions */}
          <Col xs={12} md={6}> {/* Adjust the column width for smaller screens */}
            {/* Question 1 */}
            <Form.Group controlId="question1">
              <Form.Label className="question-label">Question #1:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={(e) => handleAnswerChange(0, e.target.value)} // Update answer for question 1
                className="answer-input" // Add class for answer input
              />
            </Form.Group>

            {/* Add some space between questions */}
            <div className="question-space"></div>

            {/* Question 2 */}
            <Form.Group controlId="question2">
              <Form.Label className="question-label">Question #2:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={(e) => handleAnswerChange(1, e.target.value)} // Update answer for question 2
                className="answer-input" // Add class for answer input
              />
            </Form.Group>

              {/* Add some space between questions */}
              <div className="question-space"></div>

            {/* Question 3 */}
            <Form.Group controlId="question2">
              <Form.Label className="question-label">Question #3:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={(e) => handleAnswerChange(1, e.target.value)} // Update answer for question 2
                className="answer-input" // Add class for answer input
              />
            </Form.Group>

              {/* Add some space between questions */}
              <div className="question-space"></div>            

            {/* Question 4 */}
            <Form.Group controlId="question2">
              <Form.Label className="question-label">Question #4:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={(e) => handleAnswerChange(1, e.target.value)} // Update answer for question 2
                className="answer-input" // Add class for answer input
              />
            </Form.Group>

              {/* Add some space between questions */}
              <div className="question-space"></div>

            {/* Question 5 */}
            <Form.Group controlId="question2">
              <Form.Label className="question-label">Question #5:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={(e) => handleAnswerChange(1, e.target.value)} // Update answer for question 2
                className="answer-input" // Add class for answer input
              />
            </Form.Group>

              {/* Add some space between questions */}
              <div className="question-space"></div>

            {/* Question 6 */}
            <Form.Group controlId="question2">
              <Form.Label className="question-label">Question #6:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={(e) => handleAnswerChange(1, e.target.value)} // Update answer for question 2
                className="answer-input" // Add class for answer input
              />
            </Form.Group>

              {/* Add some space between questions */}
              <div className="question-space"></div>

            {/* Question 7 */}
            <Form.Group controlId="question2">
              <Form.Label className="question-label">Question #7:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={(e) => handleAnswerChange(1, e.target.value)} // Update answer for question 2
                className="answer-input" // Add class for answer input
              />
            </Form.Group>

              {/* Add some space between questions */}
              <div className="question-space"></div>            

            {/* Question 8 */}
            <Form.Group controlId="question2">
              <Form.Label className="question-label">Question #8:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={(e) => handleAnswerChange(1, e.target.value)} // Update answer for question 2
                className="answer-input" // Add class for answer input
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

export default DetailedQuestions;
