import React, { useState } from 'react';
import './index.css'; 

const TaskItem = ({ task }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);

  };

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      {task.name}
      <button onClick={handleComplete}>Eliminar</button>
    </div>
  );
};

export default TaskItem;
