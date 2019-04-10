import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage.js';
import About from './About/About.js';
import Work from './Work/Work.js';

const App = () => {

  return (
    <Router>
    <h3 id='name'>Miriam Frank</h3>
        <div>
          <Route exact path="/" component ={ HomePage } />
          <Route exact path="/about" component ={ About } />
          <Route exact path="/work" component ={ Work } />
        </div>
    </Router>
  )
}

export default App;
