import React from 'react'
import Form from './TextEntry'

class Tooltip extends React.Component{
  constructor(){
    super()
    this.state={
      text: ''  
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault() 
    console.log(e.target)
    this.setState({
      text: ''    
    })
  }
  render(){
    return(
      <div>
        { 
          this.state.text === '' &&
          <Form 
            onSubmit={this.handleSubmit} 
          />
        }
      </div>
    ) 
  }
}

module.exports = Tooltip

