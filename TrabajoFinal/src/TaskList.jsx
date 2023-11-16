import React from 'react';
import TaskItem from './TaskItem';
import './index.css';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;