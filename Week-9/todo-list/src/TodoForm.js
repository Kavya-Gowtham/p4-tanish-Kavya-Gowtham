import React, {useState} from 'react'


const TodoForm = ({addTodo,clearList}) => {
    
    const [title,setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
            addTodo(title);
            setTitle("");
    }
    const handleChange = (e) =>{
        setTitle(e.target.value);
    }
    const clearTodoList = () =>{
        clearList();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input onChange={handleChange} value={title} type="text" className="task-input" placeholder="Add task..." required />
                <div className="buttons">
                    <button type="submit" className="btn add-task-btn">
                        Add Task
                    </button>
                    <button onClick={clearTodoList} className="btn clear-btn">clear</button>
                </div>    
            </form>
        </div>
    )
}

export default TodoForm
