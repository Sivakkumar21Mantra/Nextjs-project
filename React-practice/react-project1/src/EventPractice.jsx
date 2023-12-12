import React, { useState } from "react";

const EventPractice = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseLeave() {
    setIsMouseOver(false);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        style={isMouseOver ? { backgroundColor: "black" } : null}
      >
        Submit
      </button>
    </div>
    // {isMouseOver ? backgroundColor : null}
  );
};

export default EventPractice;
