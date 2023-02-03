import React, { useState } from "react";
import Buttons from "./Buttons";
import Screen from "./Screen";

const Calcuradora = () => {
  const [num, setNum] = useState(0);

  function inputNum(e) {
    var input = e.target.value;
    // console.log(e.target.value);
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }
  return (
    <div className="base bg-baseColor w-[35.6rem] h-[56.6rem] rounded-[4.8rem] flex flex-col px-[3.2rem]">
      <Screen numero={num} />
      <Buttons onClick={(input = "ce" ? inputNum : clear)} />
    </div>
  );
};
export default Calcuradora;
