import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';

class App extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    const dbMessageData = firebase.database().ref(messageData);

    dbRef.on('value', (response) => {
      const newState = [];
      const data = response.val();

      for (let key in data) {
        newState.push({
          key: key,
          name: data[key],
        });
      }
      this.setState({
        books: newState,
      })
    })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
