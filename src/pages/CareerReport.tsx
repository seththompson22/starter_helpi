import "../styles/App.css";
import "../App";
import { APIButton } from "../components/APIButton";
import "../styles/CareerReport.css"
import React from "react";
import NavigationBar from "../components/NavigationBar";
import CustomFooter from "../components/CustomFooter";

import creative from "../images/creative arts.jpg";
import education from "../images/education.jpg";
import environment from "../images/environment.jpg";
import finance from "../images/finance.jpg";
import healthcare from "../images/healthcare.jpg";
import hospitality from "../images/hospitality.jpg";
import manufacturing from "../images/manufacturing.jpg";
import marketing from "../images/marketing.jpg";
import technology from "../images/technology.jpg";


const photos: string[] = [ creative, education, environment, finance, healthcare, 
  hospitality, manufacturing, marketing, technology
];


export function CareerReport() {
  return (
    <div className="report-page">
      <NavigationBar />
      <h1>NAVIGATE YOUR CAREER JOURNEY</h1>
      <div>
        <APIButton></APIButton>
      </div>
      <p>
        Discover your path to success today. Take our interactive career quiz
        and unlock personalized insights tailored just for you. Let's start your
        journey together!
      </p>
      <CustomFooter />
    </div>
  );
}

export default CareerReport;
