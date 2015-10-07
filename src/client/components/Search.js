import React, { Component } from 'react';
import { fetchFromFlickr } from '../api';
import { List } from './List';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    fetchFromFlickr.bind(this)();
  }

  render() {
    if (this.state.photos.length > 0) {
      return (
        <div>
          <h2>Results for: {this.props.params.query}</h2>
          <List photos={this.state.photos} />
        </div>
      );
    } else {
      return (
        <div>
          <h2>Results for: {this.props.params.query}</h2>
          <p>Loading results...</p>
        </div>
      );
    }
  }
}
