import React from "react";
import Image from "next/image";

function Screen(props) {
  return (
    <div className="screen flex flex-col mt-[5.4rem] px-[2.2rem]">
      <div className="history text-historyColor text-normal mb-[0.8rem] text-right">
        1 + 1
      </div>
      <div className="result flex justify-between items-center">
        <div className="operation text-historyColor text-5xl">
          <Image
            src="./equals.svg"
            width={20}
            height={20}
            alt="Simbolo de Igual"
          />
        </div>
        <div className="calcOnScreen text-white text-big">{props.numero}</div>
      </div>
    </div>
  );
}

export default Screen;
