import React from 'react';
import Home from './Home';
import Search from './Search';
import NoMatch from './NoMatch';
import { Router, Route, Link } from 'react-router';

window.Router = Router;

const routes = (
  <Router>
    <Route path="/" component={Home}/>
    <Route path="search" component={Search}/>
    <Route path="search/:query" component={Search}/>
    <Route path="*" component={NoMatch}/>
  </Router>
);

React.render(routes, document.getElementById('root'));
