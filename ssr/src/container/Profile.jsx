// import React from 'react'

// function Profile() {
//   return (
//     <div>
//       {/* <h1>Profile Page using second methode</h1> */}
//       <h1>Profile Page using button methode</h1>

//     </div>
//   )
// }

// export default Profile


// //////////////////////////////////////////////////////// to CONTEXT //////////////////
import React from 'react'
import One from '../Components/One'
function Profile(props) {
  return (
    <div style={{backgroundColor:'yellow'}}>
      <h1>Profile Page using button methode</h1>
     
      <One  data={props.data} ></One>

    </div>
  )
}

export default Profile