import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Start from './Start';
import Photo from './Photo';
import Judge from './Judge';
import Winner from './Winner';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Pick Meme!</Link></li>
            <li><Link to="/Start.js">Who is playing?</Link></li>
            <li><Link to="/Photo.js">Choose a caption!</Link></li>
            <li><Link to="/Judge.js">Pick a winner</Link></li>
            <li><Link to="/Winner.js">Winner</Link></li>
          </ul>

          <hr/>
          <Route exact path="/" component={App}/>
          <Route path="/Start.js" component={Start}/>
          <Route path="/Photo.js" component={Photo}/>
          <Route path="/Judge.js" component={Judge}/>
          <Route path="/Winner.js" component={Winner}/>
        </div>
      </Router>
    );
  }
}

export default App;
