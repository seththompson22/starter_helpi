import React from "react";
import "../styles/QuizPageCard.css";

function QuizPageCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}): JSX.Element {
  return (
    <div className={title + "-card"}>
      <div className="hello"></div>
    </div>
  );
}

export default QuizPageCard;
