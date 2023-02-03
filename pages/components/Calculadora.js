import React from "react";
import Buttons from "./Buttons";
import Screen from "./Screen";

const Calcuradora = () => {
  return (
    <div className="base bg-baseColor w-[35.6rem] h-[56.6rem] rounded-[4.8rem] flex flex-col px-[3.2rem]">
      <Screen />
      <Buttons />
    </div>
  );
};
export default Calcuradora;
