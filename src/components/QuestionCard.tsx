import React, { useState } from "react";
import "../styles/QuestionCard.css";
import { Form } from "react-bootstrap";
import MultipleChoiceQuestion from "../question-format-components/MultipleChoiceQuestion";

function QuestionCard({
  questions,
  questionTypes,
  answerOptions,
}: {
  questions: string[];
  questionTypes: "Multiple Choice" | "Open Response";
  answerOptions: string[][];
}): JSX.Element {
  return (
    <div className="question-card">
      <div className="question-number"></div>
      <Form>
        <div className="question-content">
          {questions.map((question: string, index: number) => (
            <div className={"question-" + index}>
              <p className="question">{question}</p>
              <div className="question-answers">
                <MultipleChoiceQuestion answerOptions={answerOptions[index]} />
              </div>
            </div>
          ))}
        </div>
      </Form>
      <div className="question-nav">
        <button className="previous-btn"></button>
        <button className="next-btn"></button>
        <button className="submit-btn"></button>
      </div>
    </div>
  );
}

export default QuestionCard;
