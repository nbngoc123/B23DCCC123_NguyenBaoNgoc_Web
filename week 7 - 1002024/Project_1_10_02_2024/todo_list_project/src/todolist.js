import React, { useState, useEffect } from 'react';

interface Task {
  id: number;
  content: string;
  completed: boolean;
  daysOfWeek: string[];
}

const daysOfWeek = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'];

const TaskComponent = ({ task, onDelete, onToggleCompleted, onToggleDay }: { task: Task; onDelete: () => void; onToggleCompleted: () => void; onToggleDay: (day: string) => void }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="flex items-center">
        <input type="checkbox" checked={task.completed} onChange={onToggleCompleted} className="mr-2" />
        <span className={`text-lg ${task.completed ? 'line-through' : ''}`}>{task.content}</span>
      </div>
      <div className="flex items-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="mr-2">
            <input type="checkbox" checked={task.daysOfWeek.includes(day)} onChange={() => onToggleDay(day)} />
            <span className="ml-1">{day}</span>
          </div>
        ))}
      </div>
      <button onClick={onDelete} className="text-red-500 hover:text-red-700 transition duration-300">Xóa</button>
    </div>
  );
};

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [content, setContent] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (content.trim() !== '') {
      const newTask: Task = {
        id: tasks.length + 1,
        content,
        completed: false,
        daysOfWeek: selectedDays,
      };
      setTasks([...tasks, newTask]);
      setContent('');
      setSelectedDays([]);
    }
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleCompleted = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const handleToggleDay = (id: number, day: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, daysOfWeek: task.daysOfWeek.includes(day) ? task.daysOfWeek.filter((d) => d !== day) : [...task.daysOfWeek, day] } : task)));
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-2 mb-2 border border-gray-300" placeholder="Nhập nội dung task" />
      <div className="flex items-center mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="mr-2">
            <input type="checkbox" checked={selectedDays.includes(day)} onChange={() => setSelectedDays(selectedDays.includes(day) ? selectedDays.filter((d) => d !== day) : [...selectedDays, day])} />
            <span className="ml-1">{day}</span>
          </div>
        ))}
      </div>
      <button onClick={handleAddTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Thêm</button>
      {tasks.map((task) => (
        <TaskComponent key={task.id} task={task} onDelete={() => handleDeleteTask(task.id)} onToggleCompleted={() => handleToggleCompleted(task.id)} onToggleDay={(day) => handleToggleDay(task.id, day)} />
      ))}
    </div>
  );
};
