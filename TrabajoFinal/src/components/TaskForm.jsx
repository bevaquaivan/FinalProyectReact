import React, { useState } from 'react';
import '../style/index.css';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      addTask({ id: Date.now(), name: taskName, completed: false });
      setTaskName('');
    }
  };

  return (
    <form className={`task-form ${taskName.trim() !== '' ? 'task-form-completed' : ''}`} onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit" className="add-button">
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;
