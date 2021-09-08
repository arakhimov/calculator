import React from "react";
import Button from "./button";
import ResetButton from "./resetButton";

const Digits = ({ addOperand, reset }) => {
  return (
    <div className="digits">
      <div className="numbers">
        <Button value="7" addOperand={addOperand} />
        <Button value="8" addOperand={addOperand} />
        <Button value="9" addOperand={addOperand} />
      </div>
      <div className="numbers">
        <Button value="4" addOperand={addOperand} />
        <Button value="5" addOperand={addOperand} />
        <Button value="6" addOperand={addOperand} />
      </div>
      <div className="numbers">
        <Button value="1" addOperand={addOperand} />
        <Button value="2" addOperand={addOperand} />
        <Button value="3" addOperand={addOperand} />
      </div>
      <div className="numbers">
        <Button value="0" addOperand={addOperand} />
        <Button value="." addOperand={addOperand} />
        <ResetButton value="AC" reset={reset} />
      </div>
    </div>
  );
};

export default Digits;
