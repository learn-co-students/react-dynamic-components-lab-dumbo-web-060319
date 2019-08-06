// add Comment component here

import React, { Component } from 'react'

 export default class Comment extends Component {
  render(){
    const arr=this.props.commentText.map(eachEl=>{
          return <div className="comment">{eachEl}</div>
    })
    // console.log(arr)

  return (
    <div>
      {arr}
    </div>
    )
  }
}
