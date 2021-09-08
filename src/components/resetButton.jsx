import React from "react";

const ResetButton = ({ value, reset }) => {
  return <div onClick={reset}>{value}</div>;
};

export default ResetButton;
