import React, { Component } from 'react';
import SentenceDropdown from './sentenceDropdown';
import WordCats from './wordCats';
import SubmitWord from './submitWord'

class MessageWindow extends Component {
  constructor() {
    super();
    this.state = {
      currentStructure: '',
      sentences: [],
      categories: [],
      wordList: [],
      activeCat: null,
      currentWord: ''
    }
  }
  callResultStructure = (s) => {
    const localState = Object.assign({}, this.state)
    localState.currentStructure = s
    this.setState(localState)
  }


  callResultWord = (w) => {
    const localState = Object.assign({}, this.state)
    localState.currentWord = w
    this.setState(localState)
  }

  render() {
    return (
      <div className="msgWindow">
        <h2>Select your message</h2>
        <form action="">
          <SentenceDropdown structure={this.callResultStructure}/>
          <div className="result"></div>
        </form>
        <WordCats word={this.callResultWord}/>
        <SubmitWord />
        <button onClick={() => { console.log(this.state.currentStructure) }}>Structure</button>
        <button onClick={() => { console.log(this.state.currentWord) }}>Word</button>
      </div>
    )
  }
}

export default MessageWindow;