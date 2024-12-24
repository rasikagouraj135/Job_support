// components/FloatingWhatsapp.js
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons
import { useEffect, useState } from "react";

const FloatingWhatsapp = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER; // Access the env variable

  const [wavy, setWavy] = useState(false);

  // Toggle the wavy effect every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setWavy((prev) => !prev);
    }, 1000); // Change effect every 1 second
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        display: "flex",
        flexDirection: "column", // Align text below the icon
        alignItems: "center", // Center align the icon and text
        justifyContent: "center", // Center items within the parent
        zIndex: 1000,
      }}
    >
      {/* WhatsApp Icon with Wavy Effect */}
      <div
        style={{
          backgroundColor: "#25D366",
          borderRadius: "50%", // Ensure it's a perfect circle
          padding: "12px",
          display: "flex", // Flex container for icon
          alignItems: "center", // Center icon vertically
          justifyContent: "center", // Center icon horizontally
          cursor: "pointer",
          transform: wavy
            ? "translateY(-5px) rotate(5deg)" // Create wavy effect
            : "translateY(0) rotate(0deg)",
          transition: "transform 0.5s ease-in-out",
        }}
        onClick={() => window.open(`https://wa.me/${phoneNumber}`, "_blank")} // Open WhatsApp chat
      >
        <FaWhatsapp size={50} color="#fff" />
      </div>

      {/* "Chat with Us" Text */}
      <div
        style={{
          color: "#fff",
          fontSize: "15px",
          marginTop: "6px", // Space between icon and text
          textAlign: "center", // Ensure text is centered
        }}
      >
        Connect with us?
      </div>
    </div>
  );
};

export default FloatingWhatsapp;
