import React, { useState } from "react";
import { ChildComponent } from "./ChildComponent";

function ToDoList(props) {
  const [listItems, setListItem] = useState([]);
  const [task, setTask] = useState("");
  function handleChange(event) {
    setTask(event.target.value);
  }
  function handleClick() {
    if (task.trim()) {
      setListItem([...listItems, task]);
      setTask("");
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={task} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <ChildComponent msg={props.msg} />
    </div>
  );
}

export default ToDoList;
