// import React from 'react'
// import ReactDOM from 'react-dom'
// 同时处理多个表单元素的设置

// 1.onChange的事件处理函数设置为一个
// 2.在input上面设置不同的name属性
// 2.然后在事件处理函数中根据name属性来修改state的数据

class Hello extends React.Component{
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: '',
      isOk: false
    }
  }
  render(){
    return(
      <div>
        <label>
          <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.chgInput}
          placeholder="请输入用户名"/>
        </label>
        <label>
          <input
          type= "password"
          name= "password"
          value={this.state.password}
          onChange={this.chgInput}
          placeholder="请输入密码"/>
        </label>
        <label>
          <input
          type="checkbox"
          name="isOk"
          checked={this.state.isOk}
          onChange={this.chgInput}
        />
        </label>
      </div>
    )
  }
  chgInput = (event) => {
    // let type=event.target.type
    let name=event.target.name
    let type=event.target.type
    let value=type==="checkbox"?event.target.checked:event.target.value
    this.setState({
      [name]: value
    })

  }
}
// ReactDOM.render(<Hello />,document.getElementById('root'))
