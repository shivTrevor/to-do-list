// TodoItem.js
import React from 'react';
import './App.css';

const TodoItem = ({ task, handleDelete }) => {
  return (
    <div className="task">
      {task}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
