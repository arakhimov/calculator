import React, { useState } from "react";
import Digits from "./digits";
import Equal from "./equal";
import Operators from "./operators";
import Screen from "./screen";

const Calculator = () => {
  const [value, setValue] = useState(0);

  const handleAddOperand = content => {
    setValue(!value || value === "Ошибка" ? content : value + content);
  };

  const handleReset = () => {
    setValue(0);
  };

  const handleCalculate = () => {
    const regexp = /^(\d+\.*\d*)([-\+\*\/])(\d+\.*\d*)$/;

    if (!regexp.test(value)) {
      setValue("Ошибка");
      return;
    }

    let [_, firstOperand, action, secondOperand] = value.match(regexp);
    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand);
    switch (action) {
      case "+":
        setValue(firstOperand + secondOperand);
        break;
      case "-":
        setValue(firstOperand - secondOperand);
        break;
      case "*":
        setValue(firstOperand * secondOperand);
        break;
      case "/":
        setValue(firstOperand / secondOperand);
        break;
      default:
        setValue(0);
    }
  };

  return (
    <div className="calculator">
      <Screen value={value} />
      <div className="buttons">
        <Operators addOperand={handleAddOperand} />
        <Digits addOperand={handleAddOperand} reset={handleReset} />
        <Equal calculate={handleCalculate} />
      </div>
    </div>
  );
};

export default Calculator;
