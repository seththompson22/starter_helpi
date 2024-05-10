import React from "react";
import "../styles/ScrollToSectionButton.css";

function ScrollToSectionButton({
  className,
  section,
  content,
}: {
  className: string;
  section: string;
  content: string;
}): JSX.Element {
  const scrollToSection = () => {
    const targetSection = document.getElementById(section);
    const navbar = document.getElementById("navbar"); // Get navbar element
    if (targetSection && navbar) {
      // Check if targetSection and navbar exist
      const navbarHeight = navbar.offsetHeight; // Get navbar height
      const targetSectionTop =
        targetSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetSectionTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <button className={className} onClick={scrollToSection}>
      <strong>{content}</strong>
    </button>
  );
}

export default ScrollToSectionButton;