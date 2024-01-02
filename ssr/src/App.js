// import { useState } from 'react';
import './App.css';
import About from './container/About';
import Profile from './container/Profile';
import {BrowserRouter as Router,Routes, Route ,Link} from 'react-router-dom'

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

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/about' > About page</Link>
        <Link to='/profile'> Profile page </Link>
        <Routes>
          <Route path='/about' element={'hi everyone this is about page '} />
          <Route path='/profile' element={'hello guys this is profile page'} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;




