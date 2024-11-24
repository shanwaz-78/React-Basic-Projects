import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  const [interestValues, setInterestValues] = useState({
    principal: "",
    rate: "",
    time: "",
  });
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateInterest = (e) => {
    e.preventDefault();
    const { principal, rate, time } = interestValues;

    if (
      !principal ||
      !rate ||
      !time ||
      principal <= 0 ||
      rate <= 0 ||
      time <= 0
    ) {
      alert("Please enter valid positive values for all fields!");
      return;
    }

    const finalAmount = (principal * rate * time) / 100;
    setTotalInterest(finalAmount.toFixed(2));
  };

  const resetForm = () => {
    setInterestValues({
      principal: "",
      rate: "",
      time: "",
    });
    setTotalInterest(0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInterestValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="app">
      <div className="container">
        <div className="heading_text">
          <h1 className="heading_one">Simple Calculator</h1>
          <p className="heading_two">Calculate your simple interest easily</p>
        </div>
        <div className="total_amount_card">
          <div className="card_text">
            <h3 className="total_amount_heading">
              ₹ {totalInterest || "0.00"}
            </h3>
            <p className="total_amount_para">Total simple interest</p>
          </div>
        </div>
        <form onSubmit={calculateInterest}>
          <div className="input_area">
            <div className="input_field">
              <TextField
                type="number"
                name="principal"
                label="₹ Principal amount"
                variant="outlined"
                value={interestValues.principal}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input_field">
              <TextField
                type="number"
                name="rate"
                label="Rate of interest (p.a) %"
                variant="outlined"
                value={interestValues.rate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input_field">
              <TextField
                type="number"
                name="time"
                label="Time period (Years)"
                variant="outlined"
                value={interestValues.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="button_collection">
            <Stack spacing={2}  direction="row">
              <Button type="submit" className="btn_one" variant="contained">
                Calculate
              </Button>
              <Button
                type="button"
                className="btn_two"
                variant="outlined"
                onClick={resetForm}
              >
                Reset
              </Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
