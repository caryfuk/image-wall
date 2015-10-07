import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchFromFlickr } from '../api';
import { List } from './List';

export default class Home extends Component {

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
          <h2>Random images</h2>
          <p>Try: <Link to="/search/hloubetin">hloubetin</Link></p>

          <List photos={this.state.photos} />
        </div>
      );
    } else {
      return <p>Loading results...</p>;
    }
  }
}
