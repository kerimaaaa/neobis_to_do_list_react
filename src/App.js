
import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [todoList, setTodoList] = useState([])


  const handleAddTodoButtonClick = (todo) => {
    setTodoList([...todoList, todo])
  }

  const deleteTask = (id) => {
    setTodoList(todoList => todoList.filter(t => t.id !== id));
  }

  const handleEdit = (id, newText) => {
    const updatedTodos = todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });

    setTodoList(updatedTodos);
  };
  const toggleTask = (id) => {
    setTodoList(todoList => todoList.map(t => (t.id === id
      ? { ...t, checked: !t.checked } : t)))
  }
  
  return (
    <div className="App">
      
      <AddTodo onClickAddTodo={handleAddTodoButtonClick} />
      <TodoList 
      todoList={todoList} 
      handleEdit={handleEdit}
      deleteTask={deleteTask}
      toggleTask = {toggleTask} />
    </div>
  );
}

export default App;

