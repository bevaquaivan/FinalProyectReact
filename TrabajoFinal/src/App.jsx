import React, { useState, useEffect } from 'react';
import "./App.css" // Importa estilos CSS locales
import TaskList from "./components/TaskList"; // Importa el componente TaskList
import TaskForm from "./components/TaskForm"; // Importa el componente TaskForm

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

  const handleToggleComplete = (taskId, completed) => {

    setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed } : task)));
  };

  return (
    <div className="app-container">
      <h1>Lista de Tareas</h1>
            <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} />
    </div>
  );
};

export default App;
