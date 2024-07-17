import React from 'react';

const OtpInput = ({ code, onChange, timer }) => (
  <div className="d-flex">
    <div className="form-group my-3" style={{ width: "15rem" }}>
      <input
        type="number"
        className="form-control"
        name="code"
        id="email"
        value={code}
        onChange={onChange}
        placeholder="Enter Code"
      />
    </div>
    <div className="mt-4 mx-3">
      {timer > 0 && <div>{`${timer}s`}</div>}
    </div>
  </div>
);

export default OtpInput;