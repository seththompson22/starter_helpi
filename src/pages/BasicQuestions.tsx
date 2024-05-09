import "../App";
import "../styles/BasicQuestions.css";
import NavigationBar from "../components/NavigationBar";
import QuestionCard from "../components/QuestionCard";
import CustomFooter from "../components/CustomFooter";
import industryPicture from "/Users/matthewholinger/ciscc275/starter_helpi/src/images/industrypicture.jpg"; // Update the path as needed
import aloneVsTeam from "/Users/matthewholinger/ciscc275/starter_helpi/src/images/teamwork-vs-working-alone.jpg";
import roles from "/Users/matthewholinger/ciscc275/starter_helpi/src/images/roles.jpg";
import "/Users/matthewholinger/ciscc275/starter_helpi/src/styles/images.css";
import { ChangeEvent } from "react";
import pace from "/Users/matthewholinger/ciscc275/starter_helpi/src/images/pace.jpg";
import problemSolving from "/Users/matthewholinger/ciscc275/starter_helpi/src/images/problemSolving.jpg";
import environment from "/Users/matthewholinger/ciscc275/starter_helpi/src/images/environment.jpg";
import grad from "/Users/matthewholinger/ciscc275/starter_helpi/src/images/grad.jpg";
import growth from "/Users/matthewholinger/ciscc275/starter_helpi/src/images/growth.jpg";
import levels from "/Users/matthewholinger/ciscc275/starter_helpi/src/images/levels.jpg";



// Define an array of question objects


const questions = [
  {
    question: "Which industry interests you the most?",
    photo: industryPicture,
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
    photo: aloneVsTeam,
    choices: ["Independently", "Part of a team", "Both equally"],
  },
  {
    question: "Which type of role are you most interested in?",
    photo: roles,
    choices: ["Technical", "Creative", "Leadership"],
  },
  {
    question: "What work environment do you prefer?",
    photo: pace,
    choices: ["Fast-paced and dynamic", "Stable and predictable"],
  },
  {
    question: "What aspect of work do you enjoy the most?",
    photo: problemSolving,
    choices: [
      "Problem-solving",
      "Collaborating with others",
      "Managing projects",
    ],
  },
  {
    question: "Which work setting appeals to you?",
    photo: environment,
    choices: ["Office", "Remote", "Hybrid"],
  },
  {
    question: "Are you interested in further education or training?",
    photo: grad,

    choices: ["Yes", "Maybe", "No"],
  },
  {
    question: "What do you prioritize in a career?",
    photo: growth,

    choices: ["Job security", "Potential for growth", "Both equally"],
  },
  {
    question: "What level of responsibility are you comfortable with?",
    photo: levels,
    choices: ["Entry-level", "Mid-level", "Senior-level"],
  },
];

export function BasicQuestions() {
  // Callback function to handle completion
  const handleCompletion = () => {
    //window.location.href = "/#/CareerReport";
  };

  return (
    <div className="basic-questions-page">
      <NavigationBar />
      <h1 className="basic-q-title">Basic Question Career Quiz</h1>
      {/* Render QuestionCard only if not completed */}
      <QuestionCard questions={questions} onCompletion={handleCompletion} handleChange={function (event: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
      } } />
      <CustomFooter />
    </div>
  );
}

export default BasicQuestions;