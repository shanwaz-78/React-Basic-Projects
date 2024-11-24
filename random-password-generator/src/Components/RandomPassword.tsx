import "./RandomPassword.css";
import { useState } from "react";

const RandomPassword = () => {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let newPassword = "";
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const charsLength = chars.length;

    for (let i = 0; i < 3; i++) {
      newPassword += Math.floor(Math.random() * 10);

      const randomChar =
        chars[Math.floor(Math.random() * charsLength)].toUpperCase();
      newPassword += randomChar;
    }

    setPassword(newPassword);
  };

  return (
    <div className="container">
      <h1>Random Password Generator</h1>
      <p>Click the button below to generate a random password:</p>
      <button className="generate-button" onClick={generatePassword}>
        Generate Password
      </button>
      <div className="password-display">{password}</div>
    </div>
  );
};

export default RandomPassword;
