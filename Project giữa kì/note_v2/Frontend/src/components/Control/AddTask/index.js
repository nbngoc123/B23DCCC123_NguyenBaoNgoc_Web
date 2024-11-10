import { useState, useEffect } from "react";
import AddTodoItem from "../../Note/AddTodoItem";
import "./AddTask.css"
import { FaCalendarPlus } from "react-icons/fa";

function AddTask({ handleItem, todoList, setTodoList}) {

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
                    <div className="add-button"><button onClick={handleAddTask} className="add-task-button"><FaCalendarPlus style={{fontSize: '1.5em'}} />
                </button></div>)}

                {isAddingTask && (
                    <AddTodoItem onAddItem={handleItem} 
                     setcancelForm={setIsAddingTask} 
                     setAddTask={setShowAddTask} 
                    />
                )}
            </div>
        </>
    );
}

export default AddTask;
