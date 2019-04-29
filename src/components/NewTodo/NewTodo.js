import React, { Component } from 'react'

export default class NewTodo extends Component {
  render() {
    return (
      <div>
        <h1>TODO's</h1>
        <form>
          <label>
          <input type="text" name="name" placeholder="Enter Todo" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
