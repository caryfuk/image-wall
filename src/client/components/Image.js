import React, { Component } from 'react';

export class Image extends Component {

  render() {
    return(
      <div className="img-cont">
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}
