import React from "react";
import "../styles/QuizPageCard.css";
import { saveKeyData } from "../pages/Home";
import OpenAI from "openai";

export let openai: OpenAI;

function QuizPageCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}): JSX.Element {

  function handleClick() {
    openai = new OpenAI({apiKey: localStorage.getItem(saveKeyData)?.replace(/"/g, '') || undefined, dangerouslyAllowBrowser: true});
    window.location.href = link;
  }

  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="desc">{description}</p>
      <button className="link-btn" type="button" onClick={handleClick}>
        <strong>Take the Quiz</strong>
      </button>
    </div>
  );
}

export default QuizPageCard;
