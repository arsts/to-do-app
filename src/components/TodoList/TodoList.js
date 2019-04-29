import React, { Component } from 'react';
import Todo from '../Todo/Todo';

import './TodoList.css';



export default class TodoList extends Component {
  render() {
    return (

      <ul>
        <Todo className="todolist"/>

      </ul>
     
        

    )
  }
}
