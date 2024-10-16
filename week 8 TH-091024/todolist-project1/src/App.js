import React, { useState } from 'react';

const daysOfWeek = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];

const TodoList = () => {
  const [tasks, setTasks] = useState<{ id: number; content: string; completed: boolean; days: string[] }[]>([]);
  const [content, setContent] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('added');

  const handleAddTask = () => {
    if (content.trim() !== '') {
      setTasks([...tasks, { id: tasks.length, content, completed: false, days: selectedDays }]);
      setContent('');
      setSelectedDays([]);
    }
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleCompleted = (id: number) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleToggleDay = (day: string) => {
    setSelectedDays(selectedDays.includes(day) ? selectedDays.filter((d) => d !== day) : [...selectedDays, day]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'uncompleted') return !task.completed;
    return task.days.includes(filter);
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortBy === 'added') return a.id - b.id;
    if (sortBy === 'day') return a.days[0].localeCompare(b.days[0]);
    return 0;
  });

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Nhập nội dung task"
        className="w-full p-2 mb-2 border border-gray-400 rounded"
      />
      <div className="flex flex-wrap mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="mr-2 mb-2">
            <input
              type="checkbox"
              checked={selectedDays.includes(day)}
              onChange={() => handleToggleDay(day)}
              className="mr-1"
            />
            <span>{day}</span>
          </div>
        ))}
      </div>
      <button
        onClick={handleAddTask}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Thêm
      </button>
      <div className="flex flex-wrap mb-2">
        <button
          onClick={() => setFilter('all')}
          className={`mr-2 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} py-1 px-2 rounded`}
        >
          Tất cả
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`mr-2 ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} py-1 px-2 rounded`}
        >
          Hoàn thành
        </button>
        <button
          onClick={() => setFilter('uncompleted')}
          className={`mr-2 ${filter === 'uncompleted' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} py-1 px-2 rounded`}
        >
          Chưa hoàn thành
        </button>
        {daysOfWeek.map((day) => (
          <button
            key={day}
            onClick={() => setFilter(day)}
            className={`mr-2 ${filter === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} py-1 px-2 rounded`}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap mb-2">
        <button
          onClick={() => setSortBy('added')}
          className={`mr-2 ${sortBy === 'added' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} py-1 px-2 rounded`}
        >
          Thứ tự thêm
        </button>
        <button
          onClick={() => setSortBy('day')}
          className={`mr-2 ${sortBy === 'day' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} py-1 px-2 rounded`}
        >
          Ngày
        </button>
      </div>
      <ul>
        {sortedTasks.map((task) => (
          <li key={task.id} className="mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleCompleted(task.id)}
              className="mr-1"
            />
            <span className={task.completed ? 'text-gray-400' : 'text-black'}>{task.content}</span>
            <span className="ml-2 text-gray-400">{task.days.join(', ')}</span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
