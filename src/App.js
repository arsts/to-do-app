import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos/Todos'
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo/AddTodo';
import About from './components/Pages/About';
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state= {
    todos: [],
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
     .then(response => this.setState({ todos: response.data }))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
    
    
  }

  // Add Todo
  addTodo = (title) => {
    axios.post('this.setState({ todos: json})', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    
    
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