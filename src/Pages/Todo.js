import MyCheckbox from "../Component/checkbox"
import MyInput from "../Component/input"

import { useState } from "react"
import { Link } from "react-router-dom";
import "./Todo.css"
import { color } from "@mui/system";

const Todo = () => {
  let myToDo = ["Clean up bedroom", "Buy some milk", "Jogging", "Learn React", "Doing Exercises"];
  const [newToDo, setToDo] = useState(myToDo);
  const [num, setNum] = useState(myToDo.length)
  const addToDo = (e) => {
    if (e.key === 'Enter') {
      setToDo([...newToDo, e.target.value]);
      setNum(num + 1);
      e.target.value = "";
    }
  }
  return (
    <div className="main">
      <div className="content">
        <h2>Todo List</h2>
        <input onKeyDown={addToDo} placeholder="Enter your task here..." />
        <div className="checkList">
          {newToDo.map(item => {
            return (
              <MyCheckbox key={item} content={item} />
            )
          })}
        </div>
        <p>The number of my to do list: {num}</p>
        <div className="goToTrafficLight">
          <Link to="/trafficlight">Go to trafficlight</Link>
        </div>
      </div>
    </div >
  )

}

export default Todo;
