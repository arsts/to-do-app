import React, { Component } from 'react'
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import ButtonDone from '../ButtonDone/ButtonDone';


export default class Todo extends Component {
  render() {
    return (
      <li>
        <ButtonDone className="todolist" />
        <p>Test</p>
        <ButtonDelete className="todolist" />
      </li>

    )
  }
}
