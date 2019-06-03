import React, { Component } from 'react'
import PageButtons from './pageButtons'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  grabPage = (p) => {
    this.props.sendBackPage(p)
    console.log(p,"header")
  }

  render() {
    return (
      <header>
        <h1>Soapstone</h1>
        <PageButtons sendBackPage={this.grabPage}/>
      </header>
    )
  }
}

export default Header