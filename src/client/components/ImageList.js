import React, { Component } from 'react';

export default class ImageList extends Component {

  render() {
    if (this.props.photos.length > 0) {
      return (
        <ul>
          {this.props.photos.map((photo, index) => {
            var imageUrl = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
            return (
              <li key={index}>
                <a href={imageUrl} target="_blank">
                  <img src={imageUrl} alt={photo.title} />
                  <span>{photo.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <p>Loading results...</p>;
    }
  }
}
