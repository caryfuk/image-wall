import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchFromFlickr } from '../api';
import { ImageGrid } from './ImageGrid';

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
    return (
      <div>
        <h2>Random images</h2>
        <p>Try: <Link to="/search/hloubetin">hloubetin</Link></p>

        <ImageGrid photos={this.state.photos} />
      </div>
    );
  }
}
