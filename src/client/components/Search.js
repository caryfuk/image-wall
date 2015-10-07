import React, { Component } from 'react';
import { fetchFromFlickr } from '../api';

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
          <ul>
            {this.state.photos.map(function (photo, index) {
              var imageUrl = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
              return (
                <li>
                  <a href={imageUrl} target="_blank">
                    <img src={imageUrl} alt={photo.title} />
                    <span>{photo.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
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
