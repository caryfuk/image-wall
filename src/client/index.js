import React from 'react';
import Home from './Home';
import Search from './Search';
import NoMatch from './NoMatch';
import { Router, Route, Link } from 'react-router';
import { createHistory } from 'history';

const routes = (
  <Router history={createHistory()}>
    <Route path="/" component={Home}/>
    <Route path="search" component={Search}/>
    <Route path="search/:query" component={Search}/>
    <Route path="*" component={NoMatch}/>
  </Router>
);

React.render(routes, document.getElementById('root'));
