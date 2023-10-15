import React, { Component } from 'react'

export default class About extends Component {

  state={
    name:"ons",
    age:21,
    show:false

  }
  changeName=()=>{
    if(this.state.name=="ons")
    this.setState({name:"mootez"})
else this.setState({name:"ons"})
  }
  showInfos=()=>{
    this.setState({show:!this.state.show})
  }
  render() {
   
    return (
      <div>
      

        {this.state.show?<>  {this.state.name} {this.state.age}
        <button onClick={this.changeName}>change name</button></>:null}
        <br></br>
        <button onClick={this.showInfos}>show</button>

      </div>
    )
  }
}
