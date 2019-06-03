import React, { Component } from 'react'

// HANDLER FOR WORDS IN CATEGORIES IN MSG BOX

class WordsHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currWords: [],
      sendBack: this.sendBack
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.wordText.map((word) => {
          return (
            <li tabIndex="200" key={word} className="word" onClick={() => {
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