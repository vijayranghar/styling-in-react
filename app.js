import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
class App extends Component {
  render () {
    return (
      <div>
        <h1>
        Hello World
        </h1>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("App"))
