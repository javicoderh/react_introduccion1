import logo from './logo.svg';
import './App.css';
import RedRedWine from './redRedWine';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");

  function onChange(e) {
    setName(e.target.value);
  }
  return (    
    <div className="App"> 
    <label htmlfor="name">Name:</label>
    <input type="text" name="name" onChange={onChange}/>     
      <RedRedWine/>
      <h4>{name} i love u, please comeback! =')</h4> 
    </div>
  );
}

export default App;
