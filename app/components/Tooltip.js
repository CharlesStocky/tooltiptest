import React from 'react'

const Tooltip = (props) =>{
  return(
    <h3 id='hoverDiv' onMouseOver={props.onMouseOver}>Hover over me</h3>
  )
}

module.exports = Tooltip; 
