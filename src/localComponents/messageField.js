import React, { Component } from 'react';
import MessageWindow from './msgBox/messageWindow'
import MsgSign from './msgBox/msgSign'
import firebase from '../globalComponents/firebase'
import ImageCredit from './imageCredit'

// COMPONENT FOR GENERAL PLAY AREA (WHERE MESSAGES ARE PLACED)

class MessageField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: '',
      posX: 0,
      posY: 0,
      activePage: 1,
      signs: []
    }
  }


  // START ON PAGE 1
  componentDidMount() {
    this.setState({ activePage: 1 })
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

  // IF PAGE CHANGES, SWITCH FIREBASE SCOPE
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.props.page) {
      let newPage = this.props.page
      this.setState({ activePage: newPage })
      const dbRef = firebase.database().ref('pages/page' + newPage + '/messages')
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
  }

// RECORDS CURSOR POSITION RELATIVE TO MESSAGE FIELD OBJECT
  messageCreate = (e) => {
    if (!(this.state.create)) {
      let boundary = e.target.getBoundingClientRect()
      let xCoord = (e.clientX - boundary.left)
      let yCoord = (e.clientY - boundary.top)
      this.setState({
        create: true,
        posX: xCoord,
        posY: yCoord
      })
    }
  }

  //  TOGGLES OFF MESSAGE WINDOW
  windowMsgToggle = () => {
    this.setState({ create: false })
  }
  // CALLBACK FUNCTION
  grabPage = (n) => {
    let newPage = n
    this.props.sendBackPage(newPage)
  }

  // INJECTS STYLE CHANGE TO NEW BACKGROUND DEPENDING ON SELECTED PAGE
  backgroundPick = () => {
    if (this.props.page === 1) {
      return './assets/back1.jpg'
    } else {
      return './assets/back2.jpg'
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="fieldContainer">
          <div className="messageField" onClick={this.messageCreate} style={{ backgroundImage: "url("+this.backgroundPick()+")" }}>
            {
              this.state.create ?
                <MessageWindow createMsg={this.windowMsgToggle} posX={this.state.posX} posY={this.state.posY} page={this.props.page}/>
                : null
            }
            <MsgSign page={this.props.page} returnPage={this.grabPage} signs={this.state.signs} />
          </div>
          <ImageCredit page={this.props.page}/>
        </div>
      </div>
    )
  }
}

export default MessageField;
