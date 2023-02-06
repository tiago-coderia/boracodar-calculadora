import React, { useState } from "react";
import Screen from "./Screen";
import Button from "./Button";

const Calcuradora = () => {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    var input = e.target.value;
    // console.log(e.target.value);
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clean() {
    setNum(0);
  }

  function porcentage() {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    // console.log(operator);
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(oldNum / num);
    } else if (operator === "x") {
      setNum(oldNum * num);
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  }

  return (
    <div className="base bg-baseColor w-[35.6rem] h-[56.6rem] rounded-[4.8rem] flex flex-col px-[3.2rem]">
      <Screen numero={num} />
      <div className="grid grid-cols-4 gap-y-4 mt-[2.6rem]">
        <Button
          format="btn btn-primary"
          operation="ce"
          color="text-ceColor"
          onClick={clean}
          value="ce"
        />
        <Button
          format="btn btn-primary"
          operation="c"
          color="text-white"
          onClick={clean}
          value="c"
        />
        <Button
          format="btn btn-primary"
          operation="%"
          color="text-white"
          onClick={porcentage}
          value="%"
        />
        <Button
          format="btn btn-secondary"
          image="divide"
          color="text-white"
          onClick={operatorHandler}
          value="/"
        />
        <Button
          format="btn btn-primary"
          operation="7"
          color="text-white"
          onClick={inputNum}
          value="7"
        />
        <Button
          format="btn btn-primary"
          operation="8"
          color="text-white"
          onClick={inputNum}
          value="8"
        />
        <Button
          format="btn btn-primary"
          operation="9"
          color="text-white"
          onClick={inputNum}
          value="9"
        />
        <Button
          format="btn btn-secondary"
          image="multiply"
          color="text-white"
          onClick={operatorHandler}
          value="x"
        />
        <Button
          format="btn btn-primary"
          operation="4"
          color="text-white"
          onClick={inputNum}
          value="4"
        />
        <Button
          format="btn btn-primary"
          operation="5"
          color="text-white"
          onClick={inputNum}
          value="5"
        />
        <Button
          format="btn btn-primary"
          operation="6"
          color="text-white"
          onClick={inputNum}
          value="6"
        />
        <Button
          format="btn btn-secondary"
          image="minus"
          color="text-white"
          onClick={operatorHandler}
          value="-"
        />
        <Button
          format="btn btn-primary"
          operation="1"
          color="text-white"
          onClick={inputNum}
          value="1"
        />
        <Button
          format="btn btn-primary"
          operation="2"
          color="text-white"
          onClick={inputNum}
          value="2"
        />
        <Button
          format="btn btn-primary"
          operation="3"
          color="text-white"
          onClick={inputNum}
          value="3"
        />
        <Button
          format="btn btn-secondary"
          image="plus"
          color="text-white"
          onClick={operatorHandler}
          value="+"
        />
        <Button
          format="btn btn-primary"
          image="plusminus"
          color="text-white"
          onClick={changeSign}
          value="+-"
        />
        <Button
          format="btn btn-primary"
          operation="0"
          color="text-white"
          onClick={inputNum}
          value="0"
        />
        <Button
          format="btn btn-primary"
          operation=","
          color="text-white"
          onClick={inputNum}
          value=","
        />
        <Button
          format="btn btn-equal"
          image="equals2"
          color="text-white"
          onClick={calculate}
          value="="
        />
      </div>
    </div>
  );
};
export default Calcuradora;
