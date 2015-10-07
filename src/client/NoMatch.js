import React, { Component } from 'react';

export default class NoMatch extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>404</h1>
        <p>No such page.</p>
      </div>
    );
  }
}
