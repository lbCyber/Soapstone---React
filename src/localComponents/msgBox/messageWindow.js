import React, { Component } from 'react';
import SentenceDropdown from './sentenceDropdown';
import WordCats from './wordCats';
import firebase from "../../globalComponents/firebase"


class MessageWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '****',
      structure: '',
      completeSentence: ''
    }
  }

  callBackStructure = (chosenStructure) => {
    let word = '****'
    if (this.state.word !== "****") {
      word = this.state.word
    }
    let newState = { structure: chosenStructure, word: word }
    this.setState(newState)
  }

  callBackWord = (chosenWord) => {
    let newState = {
      word: chosenWord,
      completeSentence: this.state.structure.replace("****", this.state.word)
    }
    this.setState(newState)
  }


  messageSubmit = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref('pages/page1/messages');
    const complete = this.state.completeSentence
    console.log(complete)
    const messageToPush = ( {
      message: complete,
      posX: this.props.posX,
      posY: this.props.posY
    })
    dbRef.push(messageToPush);
  }

  render() {
    return (
      <div className="msgWindow">
        <h2>Select your message</h2>
        <form action="">
          <SentenceDropdown sendBack={this.callBackStructure} />
          <div className="result"></div>
        </form>
        <h3 className="messagePreview">{this.state.completeSentence}</h3>
        <WordCats sendBack={this.callBackWord} />
        <button className="submitButton" onClick={this.messageSubmit}>Submit!</button>
      </div>
    )
  }
}

export default MessageWindow;