import React, { Component } from 'react';
import Todos from './components/Todos/Todos'
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo/AddTodo';

class App extends Component {
  state= {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Walk the dog',
        completed: true
      },
      {
        id: 3,
        title: 'Buy milk',
        completed: false
      }
    ]
  }

  // TOGGLE COMPLETE
  // Passed from the very botom in TodoItem, to handle CheckBox
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id ) { // check if passed id === to actual id
        todo.completed = !todo.completed // set it to opposite
      }
      return todo;
    }) 
  }); 
  }

  // DeleteTodo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)] })
    
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id:4, 
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
    
  }

  render() {
    return (
      <div>
        <div className="conatiner">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    )
  }
}

export default App;