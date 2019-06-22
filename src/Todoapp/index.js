// TodoApp组件
import React from 'react'
// 一个组件需要引入ReactDOM吗？
class TodoAdd extends React.Component{
  constructor(props){
    super(props);
    // 初始值
    this.state={
      inputVal:'hello',
      todoList:[
      ]
    }
  }
  render(){
    return (
      <div>
        <div>
          <input type="text" ref='myInput' value={this.state.inputVal}
          onChange={this.change.bind(this)}/>
          <button onClick={this.todoAdd.bind(this)}>Add</button>
        </div>
        <ul>
          {
            this.state.todoList.map((item,index) => {
              return(
                <li
                key={index}
                >
                {item} <button onClick={this.todoDelete.bind(this,index)}>删除</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
  todoAdd(){
    let value=this.refs.myInput.value
    let list=this.state.todoList
    if(value !==''){
      list.push(value)
    }
    this.setState({
      todoList: list
    })
  }

  todoDelete(index){
    let list=this.state.todoList
    list.splice(index,1)
    this.setState({
      todoList: list
    })

  }
  change(event){
    let value=event.target.value
    this.setState({
      inputVal: value
    })
  }
}



export default TodoAdd
