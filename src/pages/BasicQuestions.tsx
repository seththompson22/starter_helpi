import "../App";
import "../styles/BasicQuestions.css";
import NavigationBar from "../components/NavigationBar";
import QuestionCard from "../components/QuestionCard";
import CustomFooter from "../components/CustomFooter";
import { useState } from "react";
import QuizPageCard from "../components/QuizPageCard";

// Define an array of question objects
const questions = [
  {
    question: "Which industry interests you the most?",
    choices: [
      "Technology",
      "Healthcare",
      "Finance",
      "Creative Arts",
      "Education",
      "Marketing",
      "Hospitality",
      "Manufacturing",
    ],
  },
  {
    question: "Do you prefer working independently or as part of a team?",
    choices: ["Independently", "Part of a team", "Both equally"],
  },
  {
    question: "Which type of role are you most interested in?",
    choices: ["Technical", "Creative", "Leadership"],
  },
  {
    question: "What work environment do you prefer?",
    choices: ["Fast-paced and dynamic", "Stable and predictable"],
  },
  {
    question: "What aspect of work do you enjoy the most?",
    choices: [
      "Problem-solving",
      "Collaborating with others",
      "Managing projects",
    ],
  },
  {
    question: "Which work setting appeals to you?",
    choices: ["Office", "Remote", "Hybrid"],
  },
  {
    question: "Are you interested in further education or training?",
    choices: ["Yes", "Maybe", "No"],
  },
  {
    question: "What do you prioritize in a career?",
    choices: ["Job security", "Potential for growth", "Both equally"],
  },
  {
    question: "What level of responsibility are you comfortable with?",
    choices: ["Entry-level", "Mid-level", "Senior-level"],
  },
];

export function BasicQuestions() {
  const [completed, setCompleted] = useState<boolean>(false);

  const continueOrNot = () => {};

  // Callback function to handle completion
  const handleCompletion = () => {
    setCompleted(true);
    continueOrNot();
  };

  return (
    <div className="basic-questions-page">
      <NavigationBar />
      {/* Render QuestionCard only if not completed */}
      {!completed && (
        <>
          <h1 className="basic-q-title">Basic Question Career Quiz</h1>
          <QuestionCard questions={questions} onCompletion={handleCompletion} />
        </>
      )}
      {/* Render completion message if completed */}
      {completed && (
        <div className="path-section" id="choose-path-section">
          <h1 className="path-title basic-q-title">
            You have completed the quiz!
          </h1>
          <div className="path-options">
            <QuizPageCard
              title="See Career Report Now"
              description="You Just Completed the Basic Questionaire! Click the button below if you want your results now. Keep in mind that if you get the report now, you cannot complete the Detailed Questionaire!"
              link="/starter_helpi/#/CareerReport"
              btnText="Get Report"
            />
            <QuizPageCard
              title="Detailed Questionaire"
              description="You Just Completed the Basic Questionaire! Click the button below if you want to get a more detailed career report!"
              link="/starter_helpi/#/DetailedQuestions"
              btnText="Take the Quiz"
            />
          </div>
        </div>
      )}
      <CustomFooter />
    </div>
  );
}

export default BasicQuestions;
