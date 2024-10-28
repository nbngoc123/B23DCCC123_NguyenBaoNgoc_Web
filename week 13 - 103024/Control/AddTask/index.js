import { useState, useEffect } from "react";
import AddTodoItem from "../../Note/AddTodoItem";
import "./AddTask.css"

function AddTask({ handleItem }) {

    const [isAddingTask, setIsAddingTask] = useState(false);
    const [showAddTask, setShowAddTask] = useState(true)

    const handleAddTask = () => {
        setIsAddingTask(!isAddingTask)
        setShowAddTask(false)
    };


    return (
        <>
            <div className="add-task-container">

                {showAddTask && (
                    <button onClick={handleAddTask} className="add-task-button">Add Task
                </button>)}

                {isAddingTask && (
                    <AddTodoItem onAddItem={handleItem} setcancelForm={setIsAddingTask} setAddTask={setShowAddTask} />
                )}
            </div>
        </>
    );
}

export default AddTask;