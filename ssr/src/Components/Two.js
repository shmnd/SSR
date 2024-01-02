import React from 'react'

function Two(props) {
  return (
    <div style={{backgroundColor:'green',width:'200px'}}>
      <h1>layer two value=  {props.data}  </h1>
    </div>
  )
}

export default Two
