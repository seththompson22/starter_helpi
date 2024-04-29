import "../styles/App.css";
import "../App";
import { APIButton } from "../components/APIButton";
import "../styles/CareerReport.css"
import React from "react";
import NavigationBar from "../components/NavigationBar";




export function CareerReport() {
    return (
        <div className="career-report-page">
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
        </div>
    );
}

export default CareerReport;
