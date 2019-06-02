import React, { Component } from 'react';
import firebase from '../../globalComponents/firebase';

class MsgSign extends Component {
  constructor() {
    super();
    this.state = {
      signs: []
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref('pages/page1/messages');
    dbRef.on('value', (response) => {
      const newState = []
      const data = response.val()
      for (let key in data) {
        newState.push({
          key: key,
          messageData: data[key]
        });
      }
      this.setState({
        signs: newState
      })
      console.log(newState, 'in didMount')
    })
  }

  render() {
    return (
      <div>
        {console.log(this.state, 'in render')}
        {this.state.signs.map((msg) => {
          let divStyle = {
            top: msg.messageData.posY + 'px',
            left: msg.messageData.posX + 'px'
          }
          return (
            <div 
            style={divStyle}
            className='droppedSign'
            key={msg.key}>
              {console.log(divStyle)}
              <p>{msg.messageData.message}</p>
            </div>
          )
        })}
      </div>
    )
  }

}
export default MsgSign;