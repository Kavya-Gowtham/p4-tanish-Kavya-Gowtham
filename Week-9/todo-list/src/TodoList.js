import React from 'react'

const TodoList = ({tasks,removeTodo,completeTodo}) => {
    // const [checked, setChecked] = React.useState(false);

    const remove= (id) => {
        removeTodo(id)
    }

    // const handlecheckBox = (uuid) => {
    //     setChecked(!checked)
    //     console.log("handle",uuid)
    // //     if(checked === true)
    // //  completeTodo(checked,id);
    // }

    const complete = (id) => {
        console.log("complete",id)
        completeTodo(id)
    }
    return (
        <div>
        {tasks.length ? 
        (<ul className="list">
            {tasks.map((task) => {
                return (
                <div>
                    <li className="list-item">
                        <span style={{ textDecoration: task.isDone ? "line-through" : "" }}>{task.title}</span>
                        <div>
                            <button onClick={() => remove(task.id)} className="btn-delete task-btn">
                            <i class="las la-trash-alt"></i>
                            </button>
                            <button onClick={() => complete(task.id)} className="btn-delete task-btn">
                            <i class="las la-check"></i>
                            </button>

                            {/* <input type="checkbox"
                             defaultChecked={checked}
                             onChange={handlecheckBox(task.uuid)}></input> */}
                        </div>
                    </li>
                </div>
                )
            })}
        </ul>) :(
            <div className="no-tasks">No Tasks</div>
        )}
        
    </div>
    )
}

export default TodoList
