import React, { Component } from 'react';
import SentenceDropdown from './sentenceDropdown';
import WordCats from './wordCats';
import firebase from "../../globalComponents/firebase"

//  MESSAGE SELECT WINDOW FOR INPUTTING MESSAGE TO FIELD

class MessageWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '****',
      structure: '',
      completeSentence: '',
      currentPage: props.page
    }
  }

  // CALLBACK FUNCTION FOR SENTENCE STRUCTURE
  callBackStructure = (chosenStructure) => {
    let word = '****'
    if (this.state.word !== "****") {
      word = this.state.word
    }
    let newState = { structure: chosenStructure, word: word }
    this.setState({ structure: newState.structure, word: newState.word })
  }

  // CALLBACK FUNCTION FOR SELECTED WORD
  callBackWord = (chosenWord) => {
    let chosenStructure = this.state.structure
    let newState = {
      word: chosenWord,
      completeSentence: chosenStructure.replace("****", chosenWord)
    }
    this.setState({ word: newState.word, completeSentence: newState.completeSentence })
  }

  // CHECK IF CANCEL BUTTON PRESSED, THEN CLOSE SUBMIT BOX
  backOut = () => {
    this.props.createMsg();
  }

  // GRABS AVAILABLE OPTIONS TO DISPLAY FROM DATABASE
  messageSubmit = (e) => {
    e.preventDefault();
    let currentPage = this.props.page
    const dbRef = firebase.database().ref('pages/page'+currentPage+'/messages');
    const complete = this.state.completeSentence
    const messageToPush = ({
      message: complete,
      posX: this.props.posX,
      posY: this.props.posY
    })
    dbRef.push(messageToPush);
    this.props.createMsg();
  }

  render() {
    return (
      <div className="msgWindow">
        <h2 className="msgHeader">Select your message</h2>
        <form action="">
          <SentenceDropdown sendBack={this.callBackStructure} />
          <h3 className="previewText" tabIndex="300">{this.state.completeSentence}</h3>
        </form>
        <WordCats sendBack={this.callBackWord} />
        <div className="messageWindowButtons">
          <button className="submitButton buttonGo" onClick={this.messageSubmit} tabIndex="301">Submit</button>
          <button className="submitButton buttonLeave" onClick={this.backOut} tabIndex="302">Cancel</button>
        </div>
      </div>
    )
  }
}

export default MessageWindow;