import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos/Todos'
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo/AddTodo';
import About from './components/Pages/About';
import uuid from 'uuid';

class App extends Component {
  state= {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Walk the dog',
        completed: true
      },
      {
        id: uuid.v4(),
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
      id: uuid.v4(), 
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
    
  }

  render() {
    return (

      <Router>
      <div>
        <div className="conatiner">
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path='/about' component={About} />
        </div>
      </div>
      </Router>
    )
  }
}

export default App;