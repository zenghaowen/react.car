import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// import './index.css'

class Hello extends React.Component{
  constructor(props){
    super(props)
    this.state={
      list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

    }
  }
  render(){
    return(
      <div>
        <ul ref="myUl">
          {this.state.list.map((item,index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.add2}>ADD2</button>
      </div>
    )
  }
  add2 =() => {
    let list=[...this.state.list]
    list.push('0');
    this.setState({
      list
    })
  }
  add = () => {
    let list = [...this.state.list]
    list.unshift('0')
    this.setState({
      list
    })
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    if(prevState.list.length<this.state.list.length){
      let box=this.refs.myUl
      return box.scrollHeight
    }
    return null
  }
  componentDidUpdate(prevProps,prevState,snapshot){
    if(snapshot !== null){
      let box=this.refs.myUl
      console.log('之前：' + snapshot);
      console.log('现在：' + box.scrollHeight);
      box.scrollTop = box.scrollTop + (box.scrollHeight - snapshot);

    }
  }
}
ReactDOM.render(<Hello />,document.getElementById('root'))
