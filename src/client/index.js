import React from 'react';
import App from './App';
import Search from './Search';
import NoMatch from './NoMatch';
import { Router, Route, Link } from 'react-router';

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="search" component={Search}>
        <Route path="/search/:query" component={Search}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'));
