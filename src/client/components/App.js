import React, { Component } from 'react';
import { Link } from 'react-router';

export class App extends Component {

  render() {
    return (
      <div>
        <h1><Link to="/">Image wall</Link></h1>
        {this.props.children}
      </div>
    );
  }
}
