import React from 'react'
import store from '../../store'
import TodoInput from './Todoinput'
import {setInputVal,addTodo} from '../../store/actionCreate'
import TodoList from './TodoList'
// import { directive } from '@babel/types';

class TodoApp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      inputVal: store.getState().inputVal,
      todoList: store.getState().todoList
    }
    store.subscribe(() => {
      this.setState(() => ({
        inputVal: store.getState().inputVal,
        todoList: store.getState().todoList
      }))
    })
  }
  render(){
    return(
      <div>
        <TodoInput
        inputVal={this.state.inputVal}
        onChange={this.handleInput}
        onClick={this.todoAdd}/>
        <TodoList todoList={this.state.todoList}/>
      </div>
    )
  }
  handleInput(event) {
    let value = event.target.value;
    // dispatch只能接收对象
    store.dispatch(setInputVal(value))
    // console.log('hello');
    // // 1. action
    // let action = {
    //   type: 'SETINPUTVAL',
    //   value
    // }
    // console.log(action)
    // // 2. dispatch()
    // store.dispatch(action);
  }
  todoAdd(){
    store.dispatch(addTodo())
    // store.dispatch({
    //   type: 'TODOADD'
    // })
  }
}
export default TodoApp
