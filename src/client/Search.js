import React, { Component } from 'react';
import rp from 'request-promise';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      photos: [],
      query: []
    };
  }

  componentDidMount() {
    var self = this;
    self.setState({
      // route components are rendered with useful information, like URL params
      query: this.props.params.query
    });
    rp('http://localhost:3001/search?query=' + self.state.query)
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
        <div>
          <h2>Results for: {this.state.query}</h2>
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
        </div>
      );
    } else {
      return <p>No results</p>;
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
