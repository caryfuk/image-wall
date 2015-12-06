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

  onQueryEnter() {
    let query = React.findDOMNode(this.refs.queryInput).value;
    this.props.history.pushState({ the: 'state' }, '/search/' + query);
  }

  render() {
    return (
      <div>
        <h2>Random images</h2>
        <input type='text' onChange={this.onQueryEnter.bind(this)} ref='queryInput' />

        <ImageGrid photos={this.state.photos} />
      </div>
    );
  }
}
