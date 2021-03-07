import React, { Component } from 'react'
import Header from './components/Header'
import Todo from './components/Todo'

export default class App extends Component {
  render() {
    return (
      <div className="App font-mono">
        <Header/>
        <div className="container mx-auto max-w-screen-sm">
          <Todo/>
        </div>
      </div>
    )
  }
}