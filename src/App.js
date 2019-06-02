import React, { Component } from 'react';
import './styles/styles.css';
import MessageField from './localComponents/messageField'
import Header from './localComponents/header'

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 1
    }
  }
  callBackPage = (p) => {
    let newState = {activePage: p}
    this.setState(newState)
  }
  render() {
    return (
      <div className="App">
        <Header sendBackPage={this.callBackPage}/>
        <MessageField page={this.state.activePage}/>
      </div>
    )
  }
}

export default App;
