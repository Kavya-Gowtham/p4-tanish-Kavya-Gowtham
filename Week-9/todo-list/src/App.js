
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
const removeTodo = (id) => {
  console.log(id)
  setTasks(tasks.filter(task => task.id !== id))
}


const completeTodo = (id) => {
  console.log("complete",id,tasks)
  const newTodos = [...tasks];
  newTodos[id].isDone = true;
  setTasks(newTodos);
  }

  return (
    <div className="container">
    <div className="app-wrapper">
      <div className="header">
      <h1>Task manager</h1>
      </div>
      <div className="main">
      <TodoForm addTodo={addTodo} clearList={clearList}/>
      <TodoList tasks={tasks} removeTodo={removeTodo} completeTodo={completeTodo}/>
      </div>
    </div>
  </div>
  );
}

export default App;
