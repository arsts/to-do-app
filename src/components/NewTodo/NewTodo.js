import React, { Component } from 'react'

export default class NewTodo extends Component {
  render() {
    return (
 
        
        <form>
          <label>
          <input type="text" name="name" placeholder="Enter Todo" />
          </label>
          <input type="submit" value="Submit" />
        </form>

    )
  }
}
