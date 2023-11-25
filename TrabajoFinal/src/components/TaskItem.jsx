import React from 'react';
import '../style/index.css';
import { FaDeleteLeft } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa6";


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
      <FaClipboardCheck />

      </button>
      <button onClick={handleDelete}><FaDeleteLeft /></button>
    </div>
  );
};

export default TaskItem;
