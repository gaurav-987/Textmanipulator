import React from 'react';
import Navbar from './Navbar';
import InputOutput from './InputOutput';

const App = () => {
  return(
    <>
      <Navbar title="TextManipulator" link="About Us"/>
      <div className='container' style={{textAlign:'center'}}>
      <h1>Welcome to TextManipulator</h1>
      <InputOutput/>

      </div>
    </>
  )
}

export default App;