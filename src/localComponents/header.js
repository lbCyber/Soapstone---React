import React, { Component } from 'react'
import PageButtons from './pageButtons'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

// CALLBACK FUNCTION
  grabPage = (p) => {
    this.props.sendBackPage(p)
    console.log(p,"header")
  }

  render() {
    return (
      <header>
        <h1>Soapstone</h1>
        <ul className="headerList">
          <li className="headerListEntry">Click anywhere to leave a message</li>
          <li className="headerListEntry">Scroll anywhere to find one</li>
        </ul>
        <PageButtons sendBackPage={this.grabPage}/>
      </header>
    )
  }
}

export default Header