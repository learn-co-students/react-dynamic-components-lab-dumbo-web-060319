import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const {opacity} = this.props
    return (
      <div className="color-box" style={{opacity: opacity}}>
<<<<<<< HEAD
        {opacity > 0.2 ? <ColorBox opacity={opacity - 0.1 } /> : null }
=======
        {opacity > 0 ? <ColorBox opacity={opacity - 0.1 } /> : null }
>>>>>>> e65251f9e0a2ce226ee401a93f51f849cb5901b2
      </div>
    )
  }
  
}
