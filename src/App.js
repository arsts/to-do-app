import React from 'react';
import Header from './components/Header/Header';
import NewTodo from './components/NewTodo/NewTodo';
import TodoList from './components/TodoList/TodoList';
import './App.css';

const todos = [
  {text: 'buy milk'},
  {text: 'do the laundry'},
  {text: 'walk the dog'},
  {text: 'buy milk'},

];

function App() {
  return (
    <div className="App flex-container">
    <Header />
    <NewTodo /> 
    <TodoList />
    
    </div>
  );
}

export default App;
