import React, { Component } from 'react';
import { fetchFromFlickr } from '../api';
import { ImageGrid } from './ImageGrid';

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
    return (
      <div>
        <h2>Results for: {this.props.params.query}</h2>
        <ImageGrid photos={this.state.photos} />
      </div>
    );
  }
}
