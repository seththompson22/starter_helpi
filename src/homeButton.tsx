// Add an empty export statement to make the file a module
import React from 'react';
import { Button } from 'react-bootstrap';
export {};

function HomeButton() {
  const handleClick = () => {
    // Handle click event to navigate to the home page
    // Example: window.location.href = "/";
  };

  return (
    <Button variant="link" onClick={handleClick}>
      <img src="https://cdn-icons-png.flaticon.com/256/25/25694.png" alt="Home" width="50" height="50" /> {/* Replace with your actual image link */}
    </Button>
  );
}

export default HomeButton;
