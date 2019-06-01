import React, { Component } from 'react';
import './styles/styles.css';
import MessageWindow from './localComponents/msgBox/messageWindow'

class App extends Component {
  state = {

  }
  render() {
    return (
      <div className="App">
        <MessageWindow />
      </div>
    )
  }
}

export default App;
