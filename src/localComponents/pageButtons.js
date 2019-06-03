import React, { Component } from 'react'
// WHEN BUTTONS ARE CLICKED, OUTPUTS DATA FOR REACT APP TO KNOW TO CHANGE PAGE
class PageButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // CALLBACK FUNCTION
  grabPage = (p) => {
    this.props.sendBackPage(p)
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