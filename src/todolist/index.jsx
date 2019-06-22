import React from 'react'

class Todoadd extends React.Component{
  constructor(props){
    super(props)
    this.state={
      inputVal:'hello',
      todolist:[]
    }
  }
  render(){
    return(
      <div>
        <div>
          <input type="text" ref='myinput' value={this.state.inputVal}
          onChange={this.change.bind(this)}/>
          <button onClick={this.todoAdd.bind(this)}>Add</button>
        </div>
        <ul>
          {
            this.state.todolist.map((item,index) =>{
              return(
                <li
                key={index}
                >
                  {item}<button onClick={this.todoDelete.bind(this,index)}>删除</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
  todoAdd(){
    let value=this.refs.myinput.value
    let list=this.state.todolist
    if(value !==''){
      list.push(value)
    }
    this.setState({
      todolist: list
    })
  }
  todoDelete(index){
    let list=this.state.todolist
    list.splice(index,1)
    this.setState({
      todolist: list
    })
  }
  change(event){
    let value=event.target.value
    this.setState({
      inputVal: value
    })
  }
}
export default Todoadd
