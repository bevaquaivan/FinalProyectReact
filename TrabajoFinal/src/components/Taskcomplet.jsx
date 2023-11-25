import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import '../App.css'


const TaskComplet = () => {
 
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

// Nueva función para eliminar tareas
const handleDeleteTask = (taskId) => {
  setTasks(tasks.filter((task) => task.id !== taskId));
};

return (
    <div className="app-container">
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDeleteTask={handleDeleteTask} />
    </div>
      );
}
 export default TaskComplet;