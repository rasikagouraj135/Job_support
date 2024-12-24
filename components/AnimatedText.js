import React, { useState, useEffect } from "react";

const AnimatedText = ({ text, startAnimation }) => {
  const [displayedText, setDisplayedText] = useState(""); // Start with empty text
  const [isVisible, setIsVisible] = useState(false); // State to control visibility
  const numbers = "0123456789"; // Only use numbers for animation
  let interval = null;

  const changeTextNumber = () => {
    let iteration = 0;
    const initText = text;

    if (interval) clearInterval(interval);

    interval = setInterval(() => {
      setDisplayedText(
        initText
          .split("")
          .map((digit, index) => {
            if (index < iteration) {
              return text[index];
            }
            return numbers[Math.floor(Math.random() * 10)]; // Random number between 0 and 9
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (interval) clearInterval(interval);
      }

      iteration += 1 / 10; // Slower iteration, change to make it smooth
    }, 70); // Increase the interval time for smoothness
  };

  // Trigger animation when component loads
  useEffect(() => {
    setIsVisible(true); // Set visibility to true when component is mounted
    if (startAnimation) {
      changeTextNumber(); // Start number animation once startAnimation is true
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [startAnimation]);

  return (
    <span
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible
          ? "opacity-100 transform translateY(0)"
          : "opacity-0 transform translateY(20px)"
      }`} // Add transition effect for loading
      style={{ display: "inline-block" }}
    >
      {displayedText}
    </span>
  );
};

export default AnimatedText;

