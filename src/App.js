import React, { Component } from 'react';
import Todos from './components/Todos/Todos'

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


  // Passed from the very botom in TodoItem, to handle CheckBox
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id ) { // check if passed id === to actual id
        todo.completed = !todo.completed // set it to opposite
      }
      return todo;
    }) });
    
  }

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    )
  }
}

export default App;