import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './DetailedQuestions.css'; // Import CSS file
import HomeButton from './homeButton';

function DetailedQuestions() {
  const [key, setKey] = useState<string>('');

  const handleSubmit = () => {
    localStorage.setItem("MYKEY", JSON.stringify(key));
    window.location.reload();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
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
                onChange={handleChange}
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
                onChange={handleChange}
                className="answer-input" // Add class for answer input
              />
            </Form.Group>

              {/* Add some space between questions */}
              <div className="question-space"></div>

            {/* Question 3 */}
            <Form.Group controlId="question3">
              <Form.Label className="question-label">Question #3:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={handleChange}
                className="answer-input" // Add class for answer input
              />
            </Form.Group>

              {/* Add some space between questions */}
              <div className="question-space"></div>            

            {/* Question 4 */}
            <Form.Group controlId="question4">
              <Form.Label className="question-label">Question #4:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={handleChange}
                className="answer-input" // Add class for answer input
              />
            </Form.Group>

              {/* Add some space between questions */}
              <div className="question-space"></div>

            {/* Question 5 */}
            <Form.Group controlId="question5">
              <Form.Label className="question-label">Question #5:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={handleChange}
                className="answer-input" // Add class for answer input
              />
            </Form.Group>

              {/* Add some space between questions */}
              <div className="question-space"></div>

            {/* Question 6 */}
            <Form.Group controlId="question6">
              <Form.Label className="question-label">Question #6:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={handleChange}
                className="answer-input" // Add class for answer input
              />
            </Form.Group>

              {/* Add some space between questions */}
              <div className="question-space"></div>

            {/* Question 7 */}
            <Form.Group controlId="question7">
              <Form.Label className="question-label">Question #7:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={handleChange}
                className="answer-input" // Add class for answer input
              />
            </Form.Group>

              {/* Add some space between questions */}
              <div className="question-space"></div>            

            {/* Question 8 */}
            <Form.Group controlId="question8">
              <Form.Label className="question-label">Question #8:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={handleChange}
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
