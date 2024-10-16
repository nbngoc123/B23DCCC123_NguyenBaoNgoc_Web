import React, { useState } from 'react';

function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [content, setContent] = useState('');
    const [daysOfWeek, setDaysOfWeek] = useState([]);


    const handleAddTask = () => {
        const newTask = {
        id: tasks.length + 1,
        content,
        completed: false,
        daysOfWeek,
    };
        setTasks([...tasks, newTask]);
        setContent('');
        setDaysOfWeek([]);

    };
    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
      };

    return (
<div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <form className="mb-4">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Nội dung task"
          className="block w-full p-2 mb-2 border border-gray-400 rounded"
        />
        <button
          type="button"
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Thêm task
        </button>
        </form>
        <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mb-2">
            <span 
              className={`${
                task.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              {task.content} - {task.daysOfWeek.join(', ')}
              <button
              type="button"
              onClick={() => handleDeleteTask(task.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Xóa
            </button>
            </span>

          </li>
        ))}
      </ul>
        </div>
    );
}

export default Todolist;