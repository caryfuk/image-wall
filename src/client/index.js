import React from 'react';
import Home from './Home';
import Search from './Search';
import NoMatch from './NoMatch';
import { Router, Route, Link } from 'react-router';

window.Router = Router;

const routes = (
  <Route path="/" component={Home}>
    <Route path="search" component={Search}>
      <Route path="/search/:query" component={Search}/>
    </Route>
    <Route path="*" component={NoMatch}/>
  </Route>
);

React.render((
  <Router>{routes}</Router>
), document.getElementById('root'));
