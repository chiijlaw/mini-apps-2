import React from "react";

const Enter = props => {
  return (
    <div>
      <div onClick={() => props.handleEnter(props.number)}>Enter</div>
    </div>
  );
};

export default Enter;
