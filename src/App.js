import React from 'react';
import NewTodo from './components/NewTodo/NewTodo';
import TodoList from './components/TodoList/TodoList';
import './App.css';

const todosArray = {};


function App() {
  return (
    <div className="App flex-container">
    <NewTodo /> 
    <TodoList />
    
    </div>
  );
}

export default App;
