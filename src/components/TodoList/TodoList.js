import React, { Component } from 'react';
import Todo from '../TodoItem/TodoItem';

import './TodoList.css';



export default class TodoList extends Component {
  render() {
    return (

      <ul>
        <Todo className="todolist"/>
        <Todo className="todolist"/>
        <Todo className="todolist"/>
        <Todo className="todolist"/>
        <Todo className="todolist"/>
        <Todo className="todolist"/>

      </ul>
     
        

    )
  }
}
