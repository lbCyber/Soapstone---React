import React, { Component } from 'react'


class WordsHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currWords: [],
      sendBack: this.sendBack
    }
  }
  words = (props) => {
    if (props.wordId === props.cats) {
      const localState = {}
      if (props.wordId === props.cats) {
        localState.currWords = props.wordText;
      } else {
        localState.currWords = []
      }
      this.setState({currWords: localState.currWords})
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.wordText.map((word) => {
          return (
            <li key={word} className="word" onClick={() => {
              this.props.sendBack({ word })
            }
            }>
              {word}
            </li>
          )
        })}
      </React.Fragment>
    )
  }
}
export default WordsHandler