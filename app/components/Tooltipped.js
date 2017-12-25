import React from 'react'
import Form from './TextEntry'
import Tooltip from './Tooltip'

class Tooltipped extends React.Component{
  constructor(){
    super()
    this.state={
      input: '',  
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }
  handleSubmit(e){
    e.preventDefault() 
    this.setState({
      text: e.target.value 
    })
    console.log(this.state.text)
  }
  handleChange(e){
    this.setState({
      input: e.target.value 
    }) 
  }
  handleMouseOver(e){
    console.log(e) 
  }
  render(){
    return(
      <div>
        <Form 
          onSubmit={this.handleSubmit} 
          onChange={this.handleChange}
        />
        {this.state.text !== '' &&
          <Tooltip onMouseOver={this.handleMouseOver} /> 
        }
      </div>
    ) 
  }
}

module.exports = Tooltipped

