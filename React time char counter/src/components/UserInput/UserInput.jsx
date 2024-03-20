import React from "react";
import './css/userInput.css'

function UserInput({ onTextChange }) {
  const handleTextChange = (e) => {
    const newText = e.target.value;
    onTextChange(newText)
  }

  return (
    <>
      <div>
        <form>
          <textarea
            cols="60"
            rows="8"
            placeholder="Write Your Text Here"
            maxLength={150}
            className="textarea"
            onChange={handleTextChange}
          ></textarea>
        </form>
      </div>
    </>
  );
}

export default UserInput;
