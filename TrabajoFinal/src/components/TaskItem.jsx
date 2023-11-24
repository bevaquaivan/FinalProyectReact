import React from 'react';
import '../style/index.css';

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  const handleComplete = () => {
    onToggleComplete(task.id, !task.completed);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className={`task-item ${task.completed ? 'task-item-completed' : ''}`}>
      <div className="task-item-content">{task.name}</div>
      <button onClick={handleComplete} className={task.completed ? 'completed' : ''}>
        Completar
      </button>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default TaskItem;
