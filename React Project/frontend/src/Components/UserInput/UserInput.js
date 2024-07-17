import React, { useState, useEffect } from "react";
import FormFields from "./FormFields";
import OtpInput from "./OtpInput";

function UserInput() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    mobileNumber: "",
    email: "",
  });
  const [buttonClicked, setbuttonClicked] = useState(false);
  const [timer, setTimer] = useState(10);
  const [otp, sendOtp] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value.trim() }));
  };

  const hanldeForomSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    let intervalId;
    if (buttonClicked) {
      intervalId = setInterval(() => {
        setTimer((previousTime) => previousTime - 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [buttonClicked]);

  useEffect(() => {
    if (timer === 0) {
      setbuttonClicked(false);
      sendOtp("");
      setTimer(10);
    }
  }, [timer]);

  const isFormValid = Object.values(formData).every(Boolean);

  return (
    <div className="container mt-5">
      <h2>Register Here</h2>
      <form onSubmit={hanldeForomSubmit}>
        <FormFields formData={formData} handleInputChange={handleInputChange} />

        {buttonClicked && (
          <OtpInput
            otp={otp}
            onChange={(e) => sendOtp(e.target.value)}
            timer={timer}
          />
        )}

        {isFormValid && (
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => setbuttonClicked(true)}
          >
            Send otp
          </button>
        )}

        {otp && buttonClicked && (
          <div className="my-3 text-center">
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default UserInput;
