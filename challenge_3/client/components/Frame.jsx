import React from "react";

const Frame = props => {
  let F1 = 0;
  if (props.score) {
    F1 = props.score[0];
  }

  let F2 = 0;
  if (props.score) {
    F2 = props.score[1];
  }

  return (
    <div>
      <div>
        Frame {props.id}: {F1} | {F2}
      </div>
    </div>
  );
};

export default Frame;
