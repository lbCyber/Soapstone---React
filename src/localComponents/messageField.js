import React, { Component } from 'react';
import MessageWindow from './msgBox/messageWindow'

class MessageField extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="messageField">
        <MessageWindow />
      </div>
    )
  }
}

export default MessageField;
