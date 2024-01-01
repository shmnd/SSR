import { useState } from 'react';
import './App.css';
import About from './container/About';
import Profile from './container/Profile';

function App() {
  const [state,setState]=
  ('')


  let check

  if (state==='about'){
    check=<About></About>
  }
  else if( state==='profile'){
    check=<Profile></Profile> 
  }
  
  return (
    <div className='App'>
      <button onClick={()=>setState('about')}> About</button>
      <button onClick={()=>setState('profile')} > Profile</button>
      {check}
      
    </div>
  );
}

export default App;
