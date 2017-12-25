import React from 'react';

const Form = (props) =>{ 
  return(
    <form onSubmit={props.onSubmit}> 
      <input id='textValue' onChange={props.onChange} placeholder='Enter text to tooltiperize' type='text'></input>
      <button type='submit'>Submit</button>
    </form>
  )
}

module.exports = Form
