import React from "react";

const Card = (props) => {
  return <div key={props.id}>{props.children}</div>;
};

export default Card;
