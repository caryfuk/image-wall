import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchFromFlickr } from '../api';

export default class Home extends Component {

  constructor() {
    super();

    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.setState({photos: fetchFromFlickr()});
  }

  render() {
    if (this.state.photos.length > 0) {
      return (
        <div>
          <h2>Random images</h2>
          <p>Try: <Link to="/search/hloubetin">hloubetin</Link></p>

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
      return <p>Loading results...</p>;
    }
  }
}
