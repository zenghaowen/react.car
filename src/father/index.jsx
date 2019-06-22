import React from 'react'

class Parent extends React.Component{
  constructor(props){
    super(props)
    this.state={
      inputVal:'hello',
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.inputVal}</h1>
        <Son fn1={this.add.bind(this)}></Son>
      </div>
    )
  }
  add(value){
    this.setState({
      inputVal: value
    })
  }
}
class Son extends React.Component{
  render(){
    return(
      <div>
      <input type="text" ref='myinput' />
      <button onClick={this.revise.bind(this)}>点击修改标题</button>
      </div>
    )
  }
  revise(){
    let value=this.refs.myinput.value
    this.props.fn1(value)
  }
}
export default Parent
