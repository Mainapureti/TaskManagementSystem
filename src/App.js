import React, { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showAllTasks, setShowAllTasks] = useState(false);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    }
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const handleShowAllTasks = () => {
    setShowAllTasks(!showAllTasks);
  };

  return (
    <div>
      <h1  className="app-title"   > Task Management App</h1>
      <TaskForm onAdd={addTask} />

      <table className="task-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <Task
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onUpdate={updateTask}
              taskNumber={index + 1}
            />
          ))}
        </tbody>
      </table>

      <button onClick={handleShowAllTasks}>
        {showAllTasks ? 'Hide All Tasks' : 'Show All Tasks'}
      </button>

      {showAllTasks && (
        <div>
          <h2>All Tasks</h2>
          <table className="task-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <Task
                  key={task.id}
                  task={task}
                  onDelete={deleteTask}
                  onUpdate={updateTask}
                  taskNumber={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
