import React, { Component } from 'react';
import rp from 'request-promise';

export default class Home extends Component {

  constructor() {
    super();

    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    var self = this;
    rp('http://localhost:3001/search?query=')
      .then(
        function(response) {
          self.setState({photos: JSON.parse(response)});
        }
      )
      .catch(function(e) {
        console.error('Error loading response.');
      });
  }

  renderResults() {
    if (this.state.photos.length > 0) {
      return (
        <ul>
          {this.state.photos.map(function (photo, index) {
            var imageUrl = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
            return (
              <li>
                <div>
                  <a href={imageUrl} target="_blank">
                    <img src={imageUrl} alt={photo.title} />
                    <span>{photo.title}</span>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <p>empty</p>;
    }
  }

  render() {
    return (
      <div>
        <h1>Image wall</h1>
        {this.renderResults()}
      </div>
    );
  }
}
