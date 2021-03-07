import React, { Component } from 'react'

export default class Todo extends Component {
  state = {
    element: ""
  }

  render() {
    return (
      <div className='m-4'>
        <form className="flex flex-col p-4 bg-yellow-200 rounded">
          <label 
            className="mb-2"
            htmlFor="element"
          >
            Chose à faire :
          </label>
          <input 
            type="text" 
            className="p-4 rounded focus:outline-none"
            name="element"
            value={this.state.element}
            onChange={this.onChange
            }
          />
          <button className="mt-4 p-4 bg-yellow-500 rounded uppercase font-bold cursor-pointer hover:bg-yellow-700 transition">
            Ajouter une chose à faire
          </button>
        </form>
      </div>
    )
  }
}
