import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let value=this.props.opacity
    if(value>=0.2){
      console.log(value)
      return (
        <div className="color-box" style={{opacity: value}}>
          {/* your conditional code here! */}
          <ColorBox opacity={value-0.1} />
        </div>
      )
    }else{return null;}
  }

}
