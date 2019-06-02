import React, { Component } from 'react';
import MessageWindow from './msgBox/messageWindow'
import MsgSign from './msgBox/msgSign'

class MessageField extends Component {
  constructor() {
    super();
    this.state = {
      create: '',
      posX: 0,
      posY: 0
    }
  }

  messageCreate = (e) => {
    if (!(this.state.create)) {
      let xCoord = e.clientX;
      let yCoord = e.clientY;
      console.log(xCoord, yCoord)
      this.setState({
        create: true,
        posX: xCoord,
        posY: yCoord
      })
    }
  }

  windowMsgToggle = () => {
    this.setState({ create: false })
    console.log(this.state, 'state', 'boop')
  }

  render() {
    return (
      <div className="wrapper">
        <div className="messageField" onClick={this.messageCreate}>
          {
            this.state.create ?
              <MessageWindow createMsg={this.windowMsgToggle} posX={this.state.posX} posY={this.state.posY} />
              : null
          }
          <MsgSign />
        </div>
      </div>
    )
  }
}

export default MessageField;
