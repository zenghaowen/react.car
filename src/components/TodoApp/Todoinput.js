import React from 'react'

class TodoInput extends React.Component{
  render(){
    return(
      <div>
      <input
      type="text"
      value={this.props.inputVal}
      onChange={this.props.onChange}/>
      <button
      onClick={this.props.onClick}
      >
      增加
      </button>
      </div>
    )
  }
}
export default TodoInput
