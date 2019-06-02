import React, { Component } from 'react';
import './styles/styles.css';
import MessageField from './localComponents/messageField'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentStructure: 'blep',
      sentences: [],
      categories: [],
      wordList: [],
      activeCat: null
    }
  }
  render() {
    return (
      <div className="App">
        <MessageField />
      </div>
    )
  }
}

export default App;
