import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './components/TodoApp'
import CarApp from './components/CarApp'
ReactDOM.render(
  <div>
    <TodoApp />
    <hr />
    <CarApp />
  </div>,
  document.getElementById('root')
)
