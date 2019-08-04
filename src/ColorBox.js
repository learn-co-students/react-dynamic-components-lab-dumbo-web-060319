import React, { Component } from 'react';

export default class ColorBox extends Component {
  render() {
    const opac = this.props.opacity
    if (opac >= 0.2) {
      return (
        <div className="color-box" style={{opacity: 2}}>
          {opac}
        </div>
      )
    } 
  }
  
}
