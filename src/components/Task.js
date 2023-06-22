import React, { useState } from 'react';

const Task = ({ task, onDelete, onUpdate, taskNumber }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(editedTask);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task.id);
    }
  };

  if (isEditing) {
    return (
      <tr>
        <td colSpan="5">
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
          ></textarea>
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleChange}
          />
          <button style={{ backgroundColor: 'green', color: 'white' }} onClick={handleSave}>
            Save
          </button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{taskNumber}</td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.dueDate}</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
        <button style={{ backgroundColor: 'red', color: 'white' }} onClick={handleDelete}>
          Delete
          </button>
      </td>
    </tr>
  );
};

export default Task;
