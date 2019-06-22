import React from 'react'
import ReactDOM from 'react-dom'
// 1.App - 获取音乐列表数据
// 2.Hello通过App传递过来的list
// 3.Hello 需要搜索功能
class Hello extends React.Component{
  constructor(props){
    super(props)
    this.state={
      searchVal:''
    }
  }
  chgInput=event=>{
    let value=event.target.value;
    this.setState({
      searchVal: value
    })
  }
  render(){
    let myList=this.props.list.filter(item => {
      return item.title.indexOf(this.state.searchVal) > -1
    })
    return(
      <div>
        <input
        type="text"
        value={this.state.searchVal}
        onChange={this.chgInput}
        placeholder="请输入搜索的内容"
        />
        <ul>
          {myList.map(item => {
            return <li key={item.id}>{item.title}</li>
          })}

        </ul>
      </div>
    )
  }
}
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      musicList:[]
    }
  }
  // fn1 = list => {
  //   this.setState({
  //     musciList: list
  //   });
  // };
  render(){
    return(
      <Hello list={this.state.musicList}/>
    )
  }
  componentDidMount(){
    fetch('http://localhost:3001/music')
    .then(response => response.json())
    .then(res => {
      this.setState({
        musicList:res
      })
    })
  }
}
ReactDOM.render(<App />,document.getElementById('root'))
