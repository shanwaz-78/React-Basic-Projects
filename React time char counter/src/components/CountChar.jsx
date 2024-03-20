import React, { useState } from "react";
import UserInput from "./UserInput/UserInput";
import './UserInput/css/charCount.css'

function CountChar() {
  const [wordCounts, setWordCounts] = useState(0);
  const [reminingWordCount, setRemainingWordCount] = useState(150);

  const updateWordCount = (text) => {
    const totalCharacters = text.length;
    setWordCounts(totalCharacters)
    setRemainingWordCount(150 - totalCharacters)
  }
  return (
    <>
      <div>
        <div className="wrapper">
          <h2 className="heading">Real-time Character Counter</h2>
          <UserInput onTextChange={updateWordCount} />
          <div className="word-count-wrapper">
            <p>Total Character: {wordCounts}</p>
            <p>Remaining: {reminingWordCount}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountChar;
