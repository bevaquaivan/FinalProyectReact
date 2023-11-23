import React from 'react';
import './index.css'; 

const TaskItem = ({ task, onToggleComplete }) => {
  const handleComplete = () => {
    onToggleComplete(task.id, !task.completed);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {task.name}
      <button onClick={handleComplete}>Completar</button>
    </div>
  );
};

export default TaskItem;

