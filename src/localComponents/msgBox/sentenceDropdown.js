import React, { Component } from 'react';
import firebase from '../../globalComponents/firebase';
import SentenceOptions from './sentenceOptions'

class SentenceDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentences: [],
      currentStructure: 'blep',
    }
  }

  selectHandler = () => {
    const localState = Object.assign({}, this.state)
    const select = document.getElementById("structureSelect")
    localState.currentStructure = select.value
    this.setState({localState})
    this.props.sendBack(localState.currentStructure)
  }

  render() {
    return (
      <div>
        <select id="structureSelect" className="structureSelect" onChange={this.selectHandler} >
          <option className="defOption" val="null" selected disabled>Choose a sentence structure</option>
          {this.state.sentences.map((sentence) => {
            return (
              <SentenceOptions
                text={sentence.text}
                key={sentence.id}
              />
            )
          })}
        </select>
      </div>
    )
  }
  componentDidMount() {
    const structure = firebase.database().ref("messageData/structure");

    structure.on('value', (response) => {
      const newState = [];
      const data = response.val();

      for (let key in data) {
        newState.push({
          id: key,
          text: data[key],
        });
      }
      this.setState({sentences: newState})
    })
  }
}

export default SentenceDropdown;