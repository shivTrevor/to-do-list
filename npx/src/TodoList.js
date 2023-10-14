// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import './App.css';

const TodoList = ({ tasks, handleDelete }) => {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          handleDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
