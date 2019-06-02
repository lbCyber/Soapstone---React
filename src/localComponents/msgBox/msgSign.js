import React, { Component } from 'react';
import firebase from '../../globalComponents/firebase';

class MsgSign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signs: [],
      signCounter: 0,
      signNum: 0,
      activePage: this.props.page
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.page !== prevState.page) {
  //     const newPage = this.props.page
  //     const thisPage = (p) => {
  //       return (firebase.database().ref('pages/page' + p + '/messages')
  //       )
  //     }
  //     const dbRef = thisPage(newPage)
  //     dbRef.on('value', (response) => {
  //       const newState = []
  //       const data = response.val()
  //       for (let key in data) {
  //         newState.push({
  //           key: key,
  //           messageData: data[key]
  //         });
  //       }
  //       this.setState({
  //         signs: newState
  //       })
  //     })
  //   }
  // }

  componentDidMount() {
    this.setState({activePage: 1})
    const dbRef = firebase.database().ref('pages/page1/messages')
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
    })
  }

  render() {
    let signLength = this.state.signs.length
    let tabCounter = 500;
    return (
      <div>
        {this.state.signs.map((msg) => {
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
      </div>
    )
  }

}
export default MsgSign;