import React, { useState, useEffect } from "react";
import "./quote.css";

const Quote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    const apiURL = "https://api.adviceslip.com/advice";
    try {
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error(`Error while getting quote: ${response.statusText}`);
      }
      const {
        slip: { advice },
      } = await response.json();
      setQuote(advice);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main>
      <div className="quote-wrapper">
        <div className="quote">
          {quote ? quote : "Click the button to get a piece of advice!"}
        </div>
        <button onClick={getQuote}>Give me Advice</button>
      </div>
    </main>
  );
};

export default Quote;
