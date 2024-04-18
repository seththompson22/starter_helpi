import React from "react";
import "../styles/ChooseYourPathSection.css";
import QuizPageCard from "./QuizPageCard";

function ChooseYourPathSection(): JSX.Element {
  return (
    <div className="path-section" id="choose-path-section">
      <h1 className="path-title">CHOOSE YOUR PATH</h1>
      <QuizPageCard
        title="basic-questions"
        description="description for pages"
        link="/starter_helpi/#/DetailedQuestions"
      ></QuizPageCard>
    </div>
  );
}

export default ChooseYourPathSection;
