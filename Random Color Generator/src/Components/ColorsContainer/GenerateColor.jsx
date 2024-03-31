import React, { useState } from 'react';
import './css/generateColor.css';

function GenerateColor() {
  const initialColors = [];

  const generateInitialColor = () => {
    for (let i = 0; i < 20; i++) {
      initialColors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }

  const [colorBoxes, setColorBoxes] = useState(initialColors);

  const generateNewColor = () => {
    const newColors = [];
    for (let i = 0; i < 20; i++) {
      newColors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
    setColorBoxes(newColors);
  };

  generateInitialColor();

  return (
    <>
      <div>
        <div className="btn">
          <button onClick={generateNewColor}>Generate New Color</button>
        </div>
        <div className="color-boxes">
          {colorBoxes.map((color, index) => (
            <div
              key={index}
              className="color-box"
              style={{ backgroundColor: color }}
            >
              {color}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GenerateColor;