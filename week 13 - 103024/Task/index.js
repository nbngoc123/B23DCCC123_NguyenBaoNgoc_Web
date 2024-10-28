// import { data } from "../Data/TodoListData"
import React, { useState } from 'react';
import "./Task.css";
import AddTodoItem from '../AddTodoItem';
import AddTask from '../../Control/AddTask';

function Task() {
    const data = []
    const [todoList, setTodoList] = useState(data);
    console.log(todoList)
    const handleAddItem = async (newItem) => {
        console.log(newItem)

        const response = await fetch('http://localhost:3001/api/generate/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            // body: `prompt=${"output để dạng JSON"}${newItem}`,
            body: `prompt=${"output để dạng JSON"}${JSON.stringify(newItem)}`, // Sử dụng JSON.stringify vif lúc train model data mình để dạng string nên newItem ỏ đây model không hiểu

          });
          const data = await response.json();
          console.log(data)

        setTodoList([...todoList, { ...newItem, id: todoList.length + 1 }]);
        
    };


    return (
        <>
            <div className="note-container">
                {/* <AddTodoItem onAddItem={handleAddItem} />  */}
                <AddTask handleItem={handleAddItem} />
            </div>
            {todoList.map(task => (
                <div key={task.id} className="task-item">
                    <div className="task-content">
                        <div style={{ width: '154%' }}>
                            <h2 className="task-title"> Title: {task.title}</h2>
                            <p className="task-description">Description: {task.content}</p>
                        </div>

                        <div className="task-process">
                            <span>
                                <p className="task-status completed"> {task.status ? "Completed" : "In Progress"} </p>:
                            </span>
                        </div>

                    </div>


                    <div className="task-time">
                        <div className="task-due">Due:
                           <p className="task-due-date" style={{ fontSize: '1rem', fontWeight: '500' }}>{new Date(task.datetime).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                            })}</p>
                        </div>
                        <p className="task-duration">Thời gian đã thực hiện: {task.actual_duration}h </p>

                        <button className="task-detail">Detail</button>

                    </div>


                </div>
            ))}
        </>
    )
}
export default Task;