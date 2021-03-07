import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="sticky p-4 bg-yellow-500 text-2xl font-black text-center">
          <h1>
            <a href="/">TODOLIST APP</a>
          </h1>
        </nav>
      </header>
    )
  }
}
