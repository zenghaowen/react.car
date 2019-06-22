import React from 'react'
import ReactDOM from 'react-dom'
// context
// 1.let MyContext=React.createContext(defaultValue)创建出一个context
// 2.MyContext.Provider 组件   供应商
// 3.MyContext.Consumer 组件   消费者  开始于结束里面需要使用一个函数来return jsx，
// 而这个函数接收一个参数，参数的值就是供应商的value数据
// 一.使用上面的3个步骤
// 二.不需要使用消费者组件，弄成组件的contextType属性
// Button.contextType = MyContext
// 使用 this.context 获取供应商的数据

let MyContext=React.createContext();
class App extends React.Component{
  state = {
    worldName: '李四',
    color: '#000'
  }
  render(){
    let {worldName}=this.state
    return(
      <MyContext.Provider value={this.state.color}>
        <div>
          <button onClick={this.chgTheme}>切换皮肤</button>
          <Hello onAbc={this.chgWorldName} />
          <hr/>
          <World name={worldName}/>
        </div>
      </MyContext.Provider>
    )
  }
  chgTheme=()=>{
    this.setState({
      color:'red'
    })
  }
}
class Hello extends React.Component{
  render(){
    return(
      <div>
        <h2>我是 hello</h2>
        <Button>点我</Button>
      </div>
    )
  }
}
class World extends React.Component{
  render(){
    let {name}=this.props
    return(
      <div>
        <h2>我是world</h2>
        <p>我的名字是 {name}</p>
        <Button>点我</Button>
      </div>
    )
  }
}
class Button extends React.Component{
  static contextType=MyContext
  render(){
    return(
      <button style={{color:this.context}}>{this.props.children}</button>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'))
