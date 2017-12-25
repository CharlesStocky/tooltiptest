import React from 'react'
import Form from './TextEntry'

class Tooltip extends React.Component{
  constructor(){
    super()
    this.state={
      text: ''  
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    //this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e){
    e.preventDefault() 
    console.log(e.target.value)
    this.setState({
      text: e.target.value 
    })
  }
  /*handleChange(e){
    let texts = e.target.value
    this.setState(
      text:  
    )
  }*/
  render(){
    return(
      this.state.text === '' &&
      <Form 
        onSubmit={this.handleSubmit} 
      />
    ) 
  }
}

module.exports = Tooltip

