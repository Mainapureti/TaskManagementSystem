import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    const formErrors = {};
    if (title.trim() === '') {
      formErrors.title = 'Title is required';
    }
    if (dueDate.trim() === '') {
      formErrors.dueDate = 'Due Date is required';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Create new task object
    const newTask = {
      id: new Date().getTime().toString(),
      title,
      description,
      dueDate,
    };

    // Call the onAdd function from the App component
    onAdd(newTask);

    // Reset form inputs and errors
    setTitle('');
    setDescription('');
    setDueDate('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="error">{errors.title}</p>}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        {errors.dueDate && <p className="error">{errors.dueDate}</p>}
      </div>
      <button type="submit">Add Task</button>
      </form>
    
  )
};

export default TaskForm;
