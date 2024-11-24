import React, { useState } from "react";
import FormFields from "../FormFields/FormFields";

const Form = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });

  const handleoOnChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Username: ${userDetails.userName}\nPassword: ${userDetails.password}`
    );

    setUserDetails({userName : '', password : ''})
  };

  return (
    <div>
      <FormFields
        onChange={handleoOnChange}
        handleSubmit={handleSubmit}
        userDetails={userDetails}
      />
    </div>
  );
};

export default Form;
