import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Add the Dialogflow Messenger script to the HTML document
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <df-messenger
        intent="WELCOME"
        chat-title="carbon_mitra"
        agent-id="4abe2d0b-0384-4e08-8048-747892180b53"
        language-code="en"
      ></df-messenger>
    </div>
  );
};

export default Chatbot;
