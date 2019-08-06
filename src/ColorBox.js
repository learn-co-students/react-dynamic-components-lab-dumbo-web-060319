import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    // let newOpacity = this.props.opacity - 0.1

    // return (
    //   <div className="color-box" style={{opacity: 2}}>
    //     {/* your conditional code here! */}
    //   </div>
    // )

    if (this.props.opacity < 0.2) {
      return null;
    } 
    else {
      return (
          <div className="color-box" style={{opacity: this.props.opacity}}>
            <ColorBox opacity={this.props.opacity - 0.1}/>
          </div>
      );
    }

  }
  
}
