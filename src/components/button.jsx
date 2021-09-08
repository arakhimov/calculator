import React from "react";

const Button = ({ value, addOperand }) => {
  return <div onClick={() => addOperand(value)}>{value}</div>;
};

export default Button;
