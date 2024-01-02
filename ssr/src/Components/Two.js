// import React from 'react'

// function Two(props) {
//   return (
//     <div style={{backgroundColor:'green',width:'200px'}}>
//       <h1>layer two   {props.data}</h1>
//     </div>
//   )
// }

// export default Two



// without drilling

import React, { useContext } from 'react'
import { Acontext } from '../AppContext'

function Two() {
  const {daata} = useContext(Acontext)
  return (
    <div style={{backgroundColor:'green',width:'200px'}}>
      <h1>layer two   value= {daata} </h1>
    </div>
  )
}

export default Two
