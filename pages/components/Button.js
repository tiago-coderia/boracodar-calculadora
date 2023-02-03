import React from "react";
import Image from "next/image";

function Button(props) {
  return (
    <button
      className={props.format}
      onClick={props.onClick}
      value={props.value}
    >
      <span className={props.color}>{props.operation}</span>

      <img src={`./${props.image}.svg`} alt="" />
    </button>
  );
}

export default Button;
