// import { useState } from 'react';
// import './App.css';
// import About from './container/About';
// import Profile from './container/Profile';
// import {BrowserRouter as Router,Routes, Route ,Link,} from 'react-router-dom'

// function App() {
//   // const [state,setState]=useState('')
//   return (
//     <div className='App'>
//       <Router>
//         <Link to='/about' > About page</Link>
//         <Link to='/profile'> Profile page </Link>
//         <Routes>
//           <Route Component={About} path='/about' />
//           <Route Component={Profile} path='/profile' />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

/////////////////////////////////////////////////////USING RENDERING METHOD//////////////////////////////////////

// function App() {
//   return (
//     <div className='App'>
//       <Router>
//         <Link to='/about' > About page</Link>
//         <Link to='/profile'> Profile page </Link>
//         <Routes>
//           <Route path='/about' element={'hi everyone this is about page '} />
//           <Route path='/profile' element={'hello guys this is profile page'} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



///////////////////////////////////////////////////// ROUTE USING BUTTON ///////////////////////////////////////


// import About from './container/About';
// import Profile from './container/Profile';
// import { Route,useNavigate,Routes } from 'react-router-dom'
// import React from 'react'

// function App() {
//     const navigate=useNavigate()

//   return (
//     <div>
//       <button onClick={()=>navigate('/about')}>About</button>
//       <button onClick={()=>navigate('/profile')}>Profile</button> 
//       <Routes>
//         <Route path='/about' element={<About/>} />
//         <Route  path='/profile' element={<Profile/>} /> 
//       </Routes>     
//     </div>
//   )
// }

// export default App



//////////////////////////////////////////////////// CONTEXT //////////////////////////////////

// import About from './container/About';
// import Profile from './container/Profile';
// import { Route,useNavigate,Routes } from 'react-router-dom'
// import React from 'react'

// function App() {
//     const navigate=useNavigate()

//   return (
//     <div>
//       <button onClick={()=>navigate('/about')}>About</button>
//       <button onClick={()=>navigate('/profile')}>Profile</button> 
//       <Routes>
//         <Route path='/about' element={<About/>} />
//         <Route  path='/profile' element={<Profile/>} /> 
//       </Routes>     
//     </div>
//   )
// }

// export default App

/////////////////// passing data to one from profile via two ////////////////////

import About from './container/About';
import Profile from './container/Profile';
import { Route,useNavigate,Routes } from 'react-router-dom'
import React, { useState } from 'react'

function App() {
    const [state,setState]=useState(10)
    const navigate=useNavigate()

  return (
    <div>
      <button onClick={()=>navigate('/about')}>About</button>
      <button onClick={()=>navigate('/profile')}>Profile</button> 
      
      <Routes>

        <Route path='/about' element={<About/>}>  </Route>

        <Route  path='/profile' element={<Profile  data={state} />} > </Route> 

      </Routes>     
    </div>
  )
}

export default App