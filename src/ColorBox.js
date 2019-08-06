import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const opac = this.props.opacity - 0.1;
    
      // <div className="color-box" style={{opacity: 2}}>
        if (this.props.opacity >= 0.2) {
            return (
              <div className ="color-box" style={{opacity: opac + 0.1}}>
                <ColorBox opacity={ opac } />
              </div>
            )
          } else {
            return null;
          }
        }
}
