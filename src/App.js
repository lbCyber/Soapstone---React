import React, { Component } from 'react';
import './styles/styles.css';
import MessageField from './localComponents/messageField'
import Header from './localComponents/header'
import Footer from './localComponents/footer'
import ParallaxProvider from 'react-scroll-parallax'

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 1
    }
  }
  callBackPage = (p) => {
    this.setState({ activePage: p })
    console.log(p, "app")
    console.log(this.state.activePage, "activePage.app")
  }
  render() {
    return (
      <div className="App">
        <Header sendBackPage={this.callBackPage} />
        <ParallaxProvider>
          <MessageField page={this.state.activePage} />
        </ParallaxProvider>
        <Footer />
      </div>
    )
  }
}

export default App;
