import React, { Component } from 'react';
import SentenceDropdown from './sentenceDropdown';
import WordCats from './wordCats';
import SubmitWord from './submitWord'


class MessageWindow extends Component {
  constructor() {
    super();
    this.state = {
      word: '****',
      structure: ''
    }
  }

  callBackWord = (chosenWord) => {
    let newState = {word: chosenWord}
    this.setState(newState)
  }

  callBackStructure = (chosenStructure) => {
    let newState = { structure: chosenStructure }
    this.setState(newState)
  }

  render() {
    return (
      <div className="msgWindow">
        <h2>Select your message</h2>
        <form action="">
          <SentenceDropdown sendBack={this.callBackStructure} />
          <div className="result"></div>
        </form>
        <h3 className="messagePreview">{this.state.structure.replace("****", this.state.word)}</h3>
        <WordCats sendBack={this.callBackWord} />
        <SubmitWord />
      </div>
    )
  }
}

export default MessageWindow;