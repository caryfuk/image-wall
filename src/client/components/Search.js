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

  onQueryEnter() {
    let query = React.findDOMNode(this.refs.queryInput).value;
    this.props.history.pushState({ query: query }, '/search/' + query);
    fetchFromFlickr.bind(this)();
  }

  render() {
    return (
      <div>
        <h2>
          Results for:
          <input type='text' onChange={this.onQueryEnter.bind(this)} ref='queryInput' value={this.props.query} />
        </h2>
        <ImageGrid photos={this.state.photos} />
      </div>
    );
  }
}
