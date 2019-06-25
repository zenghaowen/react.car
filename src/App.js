import React, {Component} from 'react'

class One extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <div>
        <h1>蔡徐坤</h1>
      </div>
    )
  }
}
class Two extends Component{
  render(){
    return(
      <div>
        <h1>我是你</h1>
      </div>
    )
  }
}
export default{
  One,
  Two
}
