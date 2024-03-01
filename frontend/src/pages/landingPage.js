//modules
import React from "react";
import Helmet from "react-helmet";

//components

function landingPage() {
  const button = "border-2 border-gray-500 rounded-xl p-5 h-[10rem]";
  return (
    <>
      <Helmet>
        <title>GabAI</title>
      </Helmet>
      <div className="h-screen mt-20">
        <h1>
          What do you want to do,
          <br />
          username?
        </h1>
        <div className="flex flex-row justify-center">
          <div className={button}>
            <h1>Search</h1>
            <p>Search about discrimination here.</p>
          </div>
          <div className={button}>
            <h1>Chat</h1>
            <p>Need help? Talk to our AI Chatbot.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default landingPage;
