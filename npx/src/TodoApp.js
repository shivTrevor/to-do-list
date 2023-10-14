import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a task..."
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TodoList tasks={tasks} handleDelete={handleDeleteTask} />
    </div>
  );
};

export default TodoApp;
