import React, { Component } from 'react';
import { fetchFromFlickr } from '../api';
import { ImageList } from './ImageList';

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
        <ImageList photos={this.state.photos} />
      </div>
    );
  }
}
