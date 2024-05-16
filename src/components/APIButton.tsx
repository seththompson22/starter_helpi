import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { openai } from "../components/CustomFooter";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { PopUpAlert } from "./PopUpAlert";
import { ApiAnswer } from "./QuestionCard";

interface OneResult {
  title: string;
  description: string;
  avgSalary: string;
  reason: string[];
  exp: string;
  nextSteps: string[];
}

interface ResultType {
  recommendations: OneResult[];
}

export function APIButton(): JSX.Element {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [buttonKey, setButtonKey] = useState<number>(0); // Key to force re-render of button

  const handleAlertClose = () => {
    setShowAlert(false);
    setButtonKey((prevKey) => prevKey + 1);
  };

  const openAlert = () => {
    setShowAlert(true);
  };

  const [value, setValue] = useState<string>("");
  const [results, setResults] = useState<ResultType>({
    recommendations: [
      {
        title: "",
        description: "",
        avgSalary: "",
        reason: [""],
        exp: "",
        nextSteps: [""],
      },
    ],
  });
  const [apiVal, setApiVal] = useState<string>("");
  const [dispInit, setDispInit] = useState<boolean>(true);
  const [dispFinal, setDispFinal] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  let apiQuestions: ChatCompletionMessageParam[];
  let userAnswers: ChatCompletionMessageParam[];

  const saveAnswersKey = "apiAnswers";
  const previousData = localStorage.getItem(saveAnswersKey);

  let loadedData: ApiAnswer[] = previousData ? JSON.parse(previousData) : [];
  if (previousData !== null) {
    loadedData = JSON.parse(previousData);
  }

  const questionArray = loadedData.map(
    (val: { question: string; answer: string | null }): string => val.question
  );
  const answerArray = loadedData.map(
    (val: { question: string; answer: string | null }): string =>
      val.answer || ""
  );

  apiQuestions = questionArray.map(
    (val: string): ChatCompletionMessageParam => ({
      role: "assistant",
      content: val,
    })
  );
  userAnswers = answerArray.map(
    (val: string): ChatCompletionMessageParam => ({
      role: "user",
      content: val,
    })
  );

  const example_output: ResultType = {
    recommendations: [
      {
        title: "Software Developer",
        description:
          "Software developers design, code, and test computer programs and applications.",
        avgSalary: "$80,000",
        reason: [
          "High demand for software development skills",
          "Opportunities for remote work",
          "Potential for career growth",
        ],
        exp: "Bachelor's degree in computer science or related field",
        nextSteps: [
          "Gain practical experience through internships or personal projects",
          "Continue learning new programming languages and technologies",
          "Build a portfolio of projects to showcase skills",
        ],
      },
    ],
  };

  const [chatLog, setChatLog] = useState<ChatCompletionMessageParam[]>([
    {
      role: "system",
      content: "You are a career advisor. You give valid JSON output.",
    },
    {
      role: "user",
      content:
        "I am trying to figure out what my future career should be. Ask me a list of questions that I can answer.",
    },
    ...apiQuestions,
    ...userAnswers,
    {
      role: "user",
      content:
        "That was all of the answers. Now give me your top three career recommendations. For the recommendations I want to see the title, description, avgSalary, reason, exp, nextSteps. I want an array of objects called recommendations in the following format:" +
        JSON.stringify(example_output),
    },
  ]);

  async function careerRecommendation() {
    setError(false);
    setDispInit(false);

    try {
      const apiMessage: ChatCompletionMessageParam[] = [...chatLog];
      const completion = await openai.chat.completions.create({
        messages: apiMessage,
        model: "gpt-4o",
        response_format: { type: "json_object" },
        temperature: 0.2,
      });

      console.log("API Response:", completion.choices[0].message.content);

      if (completion.choices[0].message.content !== null) {
        const apiResponseContent: ResultType = JSON.parse(
          completion.choices[0].message.content
        );

        if (apiResponseContent && apiResponseContent.recommendations) {
          setResults(apiResponseContent);
        } else {
          console.log("API response does not contain recommendations.");
          setResults({
            recommendations: [],
          });
        }
      } else {
        console.log("API response content is null.");
        setResults({
          recommendations: [],
        });
      }

      const apiResponse: ChatCompletionMessageParam[] = [
        ...apiMessage,
        completion.choices[0]["message"],
      ];
      setChatLog(apiResponse);
      setDispFinal(true);
    } catch (error) {
      console.log("Error:", error);
      setValue("API: Error. Try resubmitting your API key.");
      setDispInit(true);
      setError(true);
    }
  }

  async function computeAPI(apiInput: string) {
    try {
      const apiMessage: ChatCompletionMessageParam[] = [
        ...chatLog,
        { role: "user", content: apiInput },
      ];
      setValue(value + "\n\nYou: " + apiInput);

      const completion = await openai.chat.completions.create({
        messages: apiMessage,
        model: "gpt-4o",
        response_format: { type: "json_object" },
        temperature: 0.2,
      });

      setValue(JSON.stringify(completion.choices[0]["message"]["content"]));

      const apiResponse: ChatCompletionMessageParam[] = [
        ...apiMessage,
        completion.choices[0]["message"],
      ];
      setChatLog(apiResponse);
    } catch (error) {
      console.log("Error");
      setValue(JSON.stringify("Error. Try resubmitting your API key."));
    }
  }

  function updateName(event: React.ChangeEvent<HTMLInputElement>) {
    setApiVal(event.target.value);
  }

  return (
    <div className="all-api-content" id="api-content">
      {dispInit === true && (
        <span>
          <p>
            Discover your path to success today. Take our interactive career
            quiz and unlock personalized insights tailored just for you. Let's
            start your journey together!
          </p>
          <Button
            key={buttonKey}
            className="small-normal-btn"
            id="generateButton"
            onClick={() => {
              openAlert();
              careerRecommendation();
            }}
          >
            Generate your Career Advice
          </Button>
        </span>
      )}
      {error === true && showAlert && (
        <PopUpAlert
          errorMessage="API: Error. Try resubmitting your API key."
          onClose={handleAlertClose}
        />
      )}
      <span>
        {dispFinal === true && (
          <>
            <span>
              {results && (
                <div className="career-recommendations">
                  {results && (
                    <div className="recommendations-container">
                      {results.recommendations &&
                      results.recommendations.length > 0 ? (
                        results.recommendations.map(
                          (recommendation: OneResult, index: number) => (
                            <div key={index} className="recommendation-card">
                              <h2 className="recommendation-title">
                                {recommendation.title}
                              </h2>
                              <p className="recommendation-description">
                                {recommendation.description}
                              </p>
                              <p className="recommendation-salary">
                                <strong>Average Salary:</strong>{" "}
                                {recommendation.avgSalary}
                              </p>
                              <div className="reasons">
                                <strong>Justification:</strong>
                                <ul className="reasons-list">
                                  {recommendation.reason.map((reason, i) => (
                                    <li key={i} className="reasons-list-item">
                                      {reason}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <p className="experience-required">
                                <strong>Required Experience:</strong>{" "}
                                {recommendation.exp}
                              </p>
                              <div className="next-steps">
                                <strong>Next Steps:</strong>
                                <ul className="next-steps-list">
                                  {recommendation.nextSteps.map((step, i) => (
                                    <li
                                      key={i}
                                      className="next-steps-list-item"
                                    >
                                      {step}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )
                        )
                      ) : (
                        <p>No recommendations available</p>
                      )}
                    </div>
                  )}
                </div>
              )}
              {/* <div className="chat-further">
                <Form.Group controlId="apiValue">
                  <Form.Label>
                    Enter any followup career related questions:{" "}
                  </Form.Label>
                  <Form.Control value={apiVal} onChange={updateName} />
                  <Form.Text className="WhatIsThis">.</Form.Text>
                </Form.Group>
                <Button
                  className="small-normal-btn"
                  onClick={() => computeAPI(apiVal)}
                >
                  Answer Your Question
                </Button>
              </div> */}
            </span>
          </>
        )}
      </span>
    </div>
  );
}
