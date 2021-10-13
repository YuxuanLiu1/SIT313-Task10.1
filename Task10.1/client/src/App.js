import React, { useState } from 'react';
import './App.css';
import Page from './Page'
import Greeting from './Greeting';

function App() {
  const [text,setText] = useState('')
  const changeText = () => {
      setText(text)
  }





  
  return <div className= 'header-div'>
  <br></br>
  
  <br></br>
   <Page 
   />
  </div>
}

export default App;
