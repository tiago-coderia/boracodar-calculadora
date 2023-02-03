import React from "react";
import Image from "next/image";

function Button(props) {
  return (
    <button className={props.format}>
      <p className={props.color}>{props.operation}</p>
      <img src={`./${props.image}.svg`} alt="" />
    </button>
  );
}

export default Button;
