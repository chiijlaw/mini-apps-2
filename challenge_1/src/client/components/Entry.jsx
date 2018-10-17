import React from "react";

const Entry = props => {
  const { data } = props;
  return (
    <div>
      <p>---------------------------</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Entry;
