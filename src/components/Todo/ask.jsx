import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id, newText) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <AddToDo addTask={addTask} />
      <ToDoList todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} handleToggle={handleToggle} />
    </div>
  );
}

function ToDoList({ todos, handleDelete, handleEdit, handleToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <ToDo key={todo.id} todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleToggle={handleToggle} />
      ))}
    </ul>
  );
}

function ToDo({ todo, handleDelete, handleEdit, handleToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    handleEdit(todo.id, newText);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewText(todo.text);
  };

  const handleInputChange = (event) => {
    setNewText(event.target.value);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input type="text" value={newText} onChange={handleInputChange} />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
          <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
          <span>{todo.text}</span>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      )}
    </li>
  );
}

function AddToDo({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== '') {
      addTask(text);
      setText('');
    }
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleInputChange} placeholder="Add a task" />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default App;
