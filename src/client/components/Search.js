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
    fetchFromFlickr.call(this, this.props.params.query);
  }

  onQueryInput(e) {
    let val = React.findDOMNode(e.target).value
    this.setState({
      query: val
    });
    this.props.history.pushState(val, '/search/' + val);
    fetchFromFlickr.call(this, val);
  }

  render() {
    return (
      <div>
        <h2>
          Results for:
          <input type='text' onChange={this.onQueryInput.bind(this)} defaultValue={this.props.params.query} />
        </h2>
        <ImageGrid photos={this.state.photos} />
      </div>
    );
  }
}
