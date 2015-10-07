import React from 'react';
import App from './components/App';
import Home from './components/Home';
import Search from './components/Search';
import NoMatch from './components/NoMatch';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

const routes = (
  <Router history={createHistory()}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='search' component={Search}>
        <Route path=':query' component={Search}/>
      </Route>
      <Route path='*' component={NoMatch}/>
    </Route>
  </Router>
);

React.render(routes, document.getElementById('root'));
