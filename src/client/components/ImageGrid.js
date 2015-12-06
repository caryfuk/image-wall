import React, { Component } from 'react';
import { Image } from './Image';

export class ImageGrid extends Component {

  render() {
    if (this.props.photos.length > 0) {
      return (
        <ul>
          {this.props.photos.map((photo, index) => {
            let imageUrl =
                  'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' +
                  photo.id + '_' + photo.secret + '.jpg',
                itemStyle = {
                  animationDelay: 100*index + 'ms'
                };

            return (
              <li key={index} style={itemStyle}>
                <a href={imageUrl} target="_blank">
                  <Image src={imageUrl} alt={photo.title} />
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
