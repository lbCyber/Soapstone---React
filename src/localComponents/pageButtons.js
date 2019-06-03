import React, { Component } from 'react'

class PageButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  grabPage = (p) => {
    this.props.sendBackPage(p)
    console.log(p)
  }
  render() {
    return (
      <div className="buttons">
        <h4 className="pageButtons pageButton1" onClick={() => this.grabPage(1)}>Burg</h4>
        <h4 className="pageButtons pageButton2" onClick={() => this.grabPage(2)}>Wilds</h4>
      </div>
    )
  }
}

export default PageButtons