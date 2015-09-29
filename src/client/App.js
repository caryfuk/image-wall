import React, { Component } from 'react';
import Request from 'request';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    var self = this;
    Request('http://localhost:3001/search?query=Hloubětín', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        self.setState({photos: JSON.parse(body)});
      }
    });
  }

  renderResults() {
    if (this.state.photos.length > 0) {
      this.state.photos.map(function (photo, index) {
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
      });
    } else {
      return <p>empty</p>;
    }
  }

  render() {
    return (
      <div>
        <h1>Image wall</h1>
        <ul>
          {this.renderResults()}
        </ul>
      </div>
    );
  }
}
