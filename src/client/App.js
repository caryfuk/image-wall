import React, { Component } from 'react';
import Request from 'request';

export default class App extends Component {

  getInitialState() {
    return {
      photos: {}
    };
  }

  getPhotos() {
    Request('http://localhost:3001/search?query=Hloubětín', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        this.setState({photos: body.response});
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}
