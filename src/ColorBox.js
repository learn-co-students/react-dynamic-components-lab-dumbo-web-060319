import React, { Component } from 'react';

export default class ColorBox extends Component {

  cond1 = () => <ColorBox opacity={this.props.opacity - 0.1} />

  cond2 = () => null

  render() {
    return (
      <div className="color-box" style={{ opacity: this.props.opacity }}>
        {this.props.opacity >= 0.2 ? this.cond1() : this.cond2()}
      </div>
    )
  }

}
