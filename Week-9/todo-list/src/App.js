
import './App.css';
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import React, {useState} from "react"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([{
    title: "This is a sampe todo",
    isDone: false,
  }]);

  const addTodo = (title) =>{
    setTasks([...tasks, {title,id:uuidv4()}])
}
const clearList = () =>{
  setTasks([])
}
  return (
    <div className="container">
    <div className="app-wrapper">
      <div className="header">
      <h1>Task manager</h1>
      </div>
      <div className="main">
      <TodoForm addTodo={addTodo} clearList={clearList}/>
      <TodoList tasks={tasks}/>
      </div>
    </div>
  </div>
  );
}

export default App;
