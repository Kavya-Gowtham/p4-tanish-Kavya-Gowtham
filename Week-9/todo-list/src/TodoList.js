import React from 'react'

const TaskList = ({tasks}) => {

    return (
        <div>
        {tasks.length ? 
        (<ul className="list">
            {tasks.map((task) => {
                return (
                <div>
                    <li className="list-item">
                        <span>{task.title}</span>
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

export default TaskList
