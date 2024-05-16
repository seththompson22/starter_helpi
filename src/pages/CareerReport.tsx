import "../styles/App.css";
import "../App";
import { APIButton } from "../components/APIButton";
import "../styles/CareerReport.css"
import React from "react";
import NavigationBar from "../components/NavigationBar";
import CustomFooter from "../components/CustomFooter";

export function CareerReport() {
  return (
    <div className="report-page">
      <NavigationBar />
      <h1 className="report-title">NAVIGATE YOUR CAREER JOURNEY</h1>

      <APIButton></APIButton>

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
