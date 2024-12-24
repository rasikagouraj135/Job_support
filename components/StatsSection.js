import React, { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText"; 

const CardGrid = () => {
  const cards = [
    {
      id: 1,
      icon: "far fa-smile",
      title: "Happy Clients",
      value: "500",
      suffix: "+",
      color: "#4caf50",
    },
    {
      id: 2,
      icon: "far fa-clock",
      title: "Support Availability",
      value: "24",
      suffix: "/7",
      color: "#2196f3",
    },
    {
      id: 3,
      icon: "fas fa-globe-africa",
      title: "Countries Globally",
      value: "25",
      suffix: "+",
      color: "#4caf50",
    },
    {
      id: 4,
      icon: "far fa-grin-stars",
      title: "Satisfied Customers",
      value: "100",
      suffix: "%",
      color: "#2196f3",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update window width on mount and resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const getResponsiveStyle = () => {
    if (windowWidth <= 480) {
      return {
        flex: "1 1 calc(100% - 20px)", // 1 card per row
        maxWidth: "calc(100% - 20px)",
      };
    } else if (windowWidth <= 768) {
      return {
        flex: "1 1 calc(50% - 20px)", // 2 cards per row
        maxWidth: "calc(50% - 20px)",
      };
    }
    return {}; // Default: 4 cards per row
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "50px",
    padding: "10px",
    margin: "0 auto",
    justifyContent: "center", // Center items horizontally
  };

  const cardStyle = {
    textAlign: "center",
    padding: "35px",
    background: "#121212",
    borderRadius: "25px",
    border: "1px solid #ffffff",
    boxShadow: "0 4px 6px rgba(249, 249, 249, 0.1)",
  };

  return (
    <section
      className="elementor-section"
      style={{ background: "#121212", padding: "20px" }}
    >
      <div className="elementor-container" style={containerStyle}>
        {cards.map((card) => (
          <div
            key={card.id}
            className="elementor-column"
            style={{ ...cardStyle, ...getResponsiveStyle() }}
          >
            <div className="elementor-widget-wrap">
              <div
                className="elementor-icon-wrapper"
                style={{ marginBottom: "15px" }}
              >
                <div
                  className="elementor-icon"
                  style={{ fontSize: "40px", color: card.color }}
                >
                  <i className={card.icon}></i>
                </div>
              </div>
              <div className="elementor-counter">
                <div
                  className="elementor-counter-title"
                  style={{ fontSize: "18px", fontWeight: "bold", color: "#ffff" }}
                >
                  {card.title}
                </div>
                <div
                  className="elementor-counter-number-wrapper"
                  style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    color: card.color,
                  }}
                >
                  <AnimatedText text={card.value} startAnimation={true} />
                  <span>
                    <AnimatedText text={card.suffix} startAnimation={true} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
