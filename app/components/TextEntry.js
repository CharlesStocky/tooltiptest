import React from 'react';

const Form = (props) =>{ 
  return(
    <form onSubmit={props.onSubmit}> 
      <input id='textValue' placeholder='Enter text to tooltiperize' type='text'></input>
    </form>
  )
}

module.exports = Form
