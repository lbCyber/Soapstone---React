import React, { Component } from 'react';

//  HANDLES SIGN NODES (WHERE MESSAGES ARE PLACED)

class MsgSign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signs: this.props.signs,
      activePage: this.props.page
    }
  }

  render() {
    let tabCounter = 500;
    return (
      <React.Fragment>
        {this.props.signs.map((msg) => {
          let divStyle = {
            top: msg.messageData.posY + 'px',
            left: msg.messageData.posX + 'px'
          }
          return (
            <div
              style={divStyle}
              className='droppedSign'
              key={msg.key}
              data-label={msg.messageData.message}
              tabIndex={tabCounter++}
            >
            </div>
          )
        })}
      </React.Fragment>
    )
  }

}
export default MsgSign;