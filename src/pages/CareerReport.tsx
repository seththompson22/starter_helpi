import React from "react";
import NavigationBar from "../components/NavigationBar";
import CustomFooter from "../components/CustomFooter";
import creative from "../images/creative arts.jpg";
import education from "../images/education.jpg";
// Import other images...

// Define an array of images
const photos: string[] = [creative, education, /* Add other image imports */];

interface CareerReportProps {
  industry: string; // Define the industry prop
}

function CareerReport({ industry }: CareerReportProps) {
  // Ensure that the value of industry is recognized
  console.log("Industry:", industry);

  const getPictureForIndustry = () => {
    switch (industry) {
      case "Creative Arts":
        return creative;
      case "Education":
        return education;
      // Handle other industries...
      default:
        return ""; // Return an empty string if no industry match
    }
  };

  // Ensure that the image path is recognized
  console.log("Image path:", getPictureForIndustry());

  return (
    <div className="report-page">
      <NavigationBar />
      <h1>NAVIGATE YOUR CAREER JOURNEY</h1>
      {/* Conditionally render the picture based on the value of the industry prop */}
      {industry && <img src={getPictureForIndustry()} alt="Industry" />}
      <div>
        {/* Add more content here */}
        <p>
          Discover your path to success today. Take our interactive career quiz
          and unlock personalized insights tailored just for you. Let's start your
          journey together!
        </p>
      </div>
      <CustomFooter />
    </div>
  );
}

export default CareerReport;

