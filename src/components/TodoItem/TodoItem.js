import React, { Component } from 'react'
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import ButtonDone from '../ButtonDone/ButtonDone';
import './TodoItem.css';


export default class Todo extends Component {
  render() {
    return (
      <li className="list-container">
        <ButtonDone className="todolist" />
        <p>Test</p>
        <ButtonDelete className="todolist" />
      </li>

    )
  }
}
