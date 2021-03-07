import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Todo extends Component {
  state = {
    element: "", // element into input
    items: [] // array of all elements
  }

  onChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
    // console.log(this.state.element);
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      element: "", // To erase input after submit
      items: [...this.state.items, {element: this.state.element}] // To add element into existant array "items" on submit
    })
    // console.log(this.state.items)
  }

  renderTodo = () => {
    return this.state.items.map((item, index) => {
      return (
        <div className="flex justify-between items-center m-4 bg-yellow-100 rounded p-4" >
          <h4 key={index}>
            {item.element}
          </h4>
          <FontAwesomeIcon 
            icon={faTimes} 
            className="cursor-pointer"
            onClick={() => this.removeItem(index)}/>
        </div>
      )
    })
  }

  removeItem = (index) => {
    const newListItems = this.state.items

    newListItems.splice(index, 1)

    this.setState({
      items: newListItems
    })
  }

  render() {
    return (
      <Fragment>
        <div className='m-4'>
          <form 
            className="flex flex-col p-4 bg-yellow-200 rounded"
            onSubmit={this.onSubmit}
          >
            <label 
              className="mb-2"
              htmlFor="element"
            >
              Ma liste de course :
            </label>
            <input 
              type="text" 
              className="p-4 rounded focus:outline-none"
              name="element"
              value={this.state.element}
              onChange={this.onChange}
            />
            <button className="mt-4 p-4 bg-yellow-500 rounded uppercase font-bold cursor-pointer hover:bg-yellow-600 transition">
              Ajouter à ma liste
            </button>
          </form>
        </div>

        {this.renderTodo()}

      </Fragment>
    )
  }
}
