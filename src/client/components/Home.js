import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchFromFlickr } from '../api';
import { ImageList } from './ImageList';

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

        <ImageList photos={this.state.photos} />
      </div>
    );
  }
}
