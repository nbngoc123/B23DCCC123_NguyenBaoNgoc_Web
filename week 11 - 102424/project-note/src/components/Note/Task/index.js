import { data } from "../Data/TodoListData"
import React, { useState } from 'react';
import {  todoList, setTodoList } from '../Form'


import "./Task.css";
// import Form from "../Form";
import AddTodoItem from '../AddTodoItem';

function Task() {

    const [todoList, setTodoList] = useState(data);
    console.log(todoList)
    const handleAddItem = (newItem) => {
        setTodoList([...todoList, { ...newItem, id: todoList.length + 1, description: { ...newItem.description, id: todoList.length + 1 } }]);
    };


    return (
        <>
            <div className="note-container">
                <AddTodoItem onAddItem={handleAddItem} /> {/* Use the new component */}
            </div>
            {todoList.map(task => (
                <div key={task.id} className="task-item">
                    <div className="task-content">
                        <div style={{ width: '154%' }}>
                            <h2 className="task-title"> Title: {task.description.title}</h2>
                            <p className="task-description">Description: {task.description.content}</p>
                        </div>

                        <div className="task-process">
                            <span>
                                <p className="task-status completed"> Completed </p>
                            </span>
                        </div>

                    </div>


                    <div className="task-time">
                        <div className="task-due">Due:
                           <p className="task-due-date" style={{ fontSize: '1rem', fontWeight: '500' }}>{new Date(task.date.datetime).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                            })}</p>
                        </div>
                        <p className="task-duration">Thời gian đã thực hiện: {task.process.actual_duration}h </p>

                        <button className="task-detail">Detail</button>

                    </div>


                </div>
            ))}
        </>
    )
}
export default Task;