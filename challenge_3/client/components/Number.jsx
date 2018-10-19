import React from "react";

const Number = props => {
  return (
    <div>
      <div onClick={() => props.handleClick(props.number)}>{props.number}</div>
    </div>
  );
};

export default Number;
