import React from 'react';

const FormFields = ({ formData, handleInputChange }) => (
  <div>
    <div className="form-group my-4">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        className="form-control"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleInputChange}
      />
    </div>
    <div className="form-group my-4">
      <label htmlFor="city">City:</label>
      <select
        className="form-control"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
      >
        <option value="">--select city--</option>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicago">Chicago</option>
        <option value="Houston">Houston</option>
        <option value="Miami">Miami</option>
      </select>
    </div>
    <div className="form-group my-4">
      <label htmlFor="mobile">Mobile Number:</label>
      <input
        type="number"
        className="form-control"
        id="mobile"
        placeholder="Enter your mobile number"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleInputChange}
      />
    </div>
    <div className="form-group my-4">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        className="form-control"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your email"
      />
    </div>
  </div>
);

export default FormFields;