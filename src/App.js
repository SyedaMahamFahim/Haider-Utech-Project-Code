import './App.css';
import React from 'react';
import Config from './Configuration/Config';
import { Link } from 'react-router-dom'

const App = () => {

  return (
    <div className="App">

      <Config />
      <ul>


        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/state">State</Link></li>
        <li> <Link to="/effect">Effect</Link>
        </li>
        <li><Link to="/hook-router">Router</Link></li>
        <li><Link to="/map">Map</Link></li>
        <li> <Link to="/taking-input">Input</Link>
        </li>
        <li>
          <Link to="/conditional-rendering">Condition</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
