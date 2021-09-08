import React from "react";
import Button from "./button";

const Operators = ({ addOperand }) => {
  return (
    <div className="operators">
      <Button value="+" addOperand={addOperand} />
      <Button value="-" addOperand={addOperand} />
      <Button value="*" addOperand={addOperand} />
      <Button value="/" addOperand={addOperand} />
    </div>
  );
};

export default Operators;
