import React from "react";
import "../styles/ChooseYourPathSection.css";
import QuizPageCard from "./QuizPageCard";

function ChooseYourPathSection(): JSX.Element {
  return (
    <div className="path-section" id="choose-path-section">
      <h1 className="path-title">CHOOSE YOUR PATH</h1>
      <div className="path-options">
        <QuizPageCard
          title="Basic Questions Quiz"
          description="description for pages"
          link="/starter_helpi/#/BasicQuestions"
        />
        <QuizPageCard
          title="Detailed Questions Quiz"
          description="description for pages"
          link="/starter_helpi/#/DetailedQuestions"
        />
      </div>
    </div>
  );
}

export default ChooseYourPathSection;
