import React, { Component } from 'react';
import ImageLoader from 'react-imageloader';
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
                  animationDelay: 25*index + 'ms'
                };

            return (
              <li key={index} style={itemStyle}>
                <a href={imageUrl} target="_blank">
                  <ImageLoader
                    src={imageUrl}
                    wrapper={React.DOM.div}>
                    Image load failed!
                  </ImageLoader>
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
