import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './screens/Profile.js';
import Results from './screens/Results.js';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Profile} />
      <Route exact path="/user/:username" component={Profile} />
      <Route path="/search/:query" component={Results} />
    </div>
  </Router>,
  document.getElementById('root'));
