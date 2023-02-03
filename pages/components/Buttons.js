import React from "react";
import Button from "./Button";

function Buttons(props) {
  return (
    <div className="grid grid-cols-4 gap-y-4 mt-[2.6rem]">
      <Button
        format="btn btn-primary"
        operation="ce"
        color="text-ceColor"
        onClick={props.onClick}
        value="ce"
      />
      <Button
        format="btn btn-primary"
        operation="c"
        color="text-white"
        onClick={props.onClick}
        value="c"
      />
      <Button
        format="btn btn-primary"
        operation="%"
        color="text-white"
        onClick={props.onClick}
        value="%"
      />
      <Button
        format="btn btn-secondary"
        image="divide"
        color="text-white"
        onClick={props.onClick}
        value="÷"
      />
      <Button
        format="btn btn-primary"
        operation="7"
        color="text-white"
        onClick={props.onClick}
        value="7"
      />
      <Button
        format="btn btn-primary"
        operation="8"
        color="text-white"
        onClick={props.onClick}
        value="8"
      />
      <Button
        format="btn btn-primary"
        operation="9"
        color="text-white"
        onClick={props.onClick}
        value="9"
      />
      <Button
        format="btn btn-secondary"
        image="multiply"
        color="text-white"
        onClick={props.onClick}
        value="*"
      />
      <Button
        format="btn btn-primary"
        operation="4"
        color="text-white"
        onClick={props.onClick}
        value="4"
      />
      <Button
        format="btn btn-primary"
        operation="5"
        color="text-white"
        onClick={props.onClick}
        value="5"
      />
      <Button
        format="btn btn-primary"
        operation="6"
        color="text-white"
        onClick={props.onClick}
        value="6"
      />
      <Button
        format="btn btn-secondary"
        image="minus"
        color="text-white"
        onClick={props.onClick}
        value="-"
      />
      <Button
        format="btn btn-primary"
        operation="1"
        color="text-white"
        onClick={props.onClick}
        value="1"
      />
      <Button
        format="btn btn-primary"
        operation="2"
        color="text-white"
        onClick={props.onClick}
        value="2"
      />
      <Button
        format="btn btn-primary"
        operation="3"
        color="text-white"
        onClick={props.onClick}
        value="3"
      />
      <Button
        format="btn btn-secondary"
        image="plus"
        color="text-white"
        onClick={props.onClick}
        value="+"
      />
      <Button
        format="btn btn-primary"
        image="plusminus"
        color="text-white"
        onClick={props.onClick}
        value="+-"
      />
      <Button
        format="btn btn-primary"
        operation="0"
        color="text-white"
        onClick={props.onClick}
        value="0"
      />
      <Button
        format="btn btn-primary"
        operation=","
        color="text-white"
        onClick={props.onClick}
        value=","
      />
      <Button
        format="btn btn-equal"
        image="equals2"
        color="text-white"
        onClick={props.onClick}
        value="="
      />
    </div>
  );
}

export default Buttons;
