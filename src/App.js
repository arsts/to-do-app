import React, { Component } from 'react';
import Todos from './components/Todos/Todos'

export default class App extends Component {
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
        completed: false
      },
      {
        id: 3,
        title: 'Buy milk',
        completed: false
      }
    ]
  }


  render() {
    return (
      <div>
        <Todos />
      </div>
    )
  }
}
