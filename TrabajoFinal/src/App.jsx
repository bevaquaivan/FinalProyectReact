import './index.css'; 
import React, { useState, useEffect } from 'react';
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";


const App = () => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(savedTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="app-container">
      <h1>Lista de Tareas</h1>
      <TaskList tasks={tasks} />
      <TaskForm addTask={addTask} />
    </div>
  );
};

export default App;
