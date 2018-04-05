//Comment.js
import React, { Component } from 'react';
import style from './style';


class Comment extends Component {
 
  render() {
    return (
      <div style={ style.comment }>
        <h3>{this.props.author}</h3>
        <h3>{this.props.text}</h3>
        {/* <span dangerouslySetInnerHTML={ this.rawMarkup() } /> */}
      </div>
    )
  }
}

export default Comment;