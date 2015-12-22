import React, { Component } from 'react';
import { fetchFromFlickr } from '../api';
import { ImageGrid } from './ImageGrid';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      photos: [],
      query: ''
    };
  }

  componentDidMount() {
    this.setState({
      query: this.props.params.query
    });
    fetchFromFlickr.call(this);
  }

  onQueryInput(e) {
    this.setState({
      query: React.findDOMNode(e.target).value
    });
    this.props.history.pushState(this.state.query, '/search/' + this.state.query);
    fetchFromFlickr.call(this);
  }

  render() {
    return (
      <div>
        <h2>
          Results for:
          <input type='text' onKeyUp={this.onQueryInput.bind(this)} defaultValue={this.props.params.query} />
        </h2>
        <ImageGrid photos={this.state.photos} />
      </div>
    );
  }
}
