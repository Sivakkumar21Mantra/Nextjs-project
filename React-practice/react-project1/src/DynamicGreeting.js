import React from "react";

export const DynamicGreeting = () => {
  let textColor = { color: "red" };
  let date = new Date();
  let greetings = "Good Morning";
  if (date.getHours() < 12) {
    greetings = "Good Morning";
    textColor.color = "red";
  } else if (date.getHours() < 18) {
    greetings = "Good Afternoon";
    textColor.color = "blue";
  } else {
    greetings = "Good Night";
    textColor.color = "yellow";
  }

  return (
    <div>
      <div>DynamicGreeting</div>
      <h1 style={textColor}>{greetings}</h1>
    </div>
  );
};
