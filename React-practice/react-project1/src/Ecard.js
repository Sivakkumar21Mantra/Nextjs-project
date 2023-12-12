import React from "react";
import "./ecard.css";

const Ecard = (props) => {
  console.log(props);
  return (
    <div className="ecard-container">
      <div>{props.emoji}</div>
      <div> {props.title}</div>
      <div>{props.description}</div>
    </div>
  );
};

export default Ecard;
