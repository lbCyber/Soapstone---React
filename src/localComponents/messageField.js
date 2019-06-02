import React, { Component } from 'react';
import MessageWindow from './msgBox/messageWindow'

class MessageField extends Component {
  constructor() {
    super();
    this.state = {
      create: false,
      posX: 0,
      posY: 0
    }
  }

  messageCreate = (e) => {
    let xCoord = e.clientX;
    let yCoord = e.clientY;
    console.log(xCoord, yCoord)
    this.setState({
      create: true,
      posX: xCoord,
      posY: yCoord
      })
  }

  windowSwitch = (e) => {
    this.setState({create:e})
  }

  render() {
    return (
      <div className="messageField" onClick={this.messageCreate}>
        {
          this.state.create?
        <MessageWindow windowState={this.windowSwitch} posX={this.state.posX} posY={this.state.posY}/>
        : null
        }
      </div>
    )
  }
}

export default MessageField;
