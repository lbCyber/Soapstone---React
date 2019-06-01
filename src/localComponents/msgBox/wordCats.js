import React, { Component } from 'react';
import firebase from '../../globalComponents/firebase';
// import WordsHandler from './wordsHandler'

class WordCats extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      activeCat: "null"
    }
  }

  componentDidMount() {
    const structure = firebase.database().ref("messageData/words");

    structure.on('value', (response) => {
      const newState = [];
      const data = response.val();

      for (let key in data) {
        newState.push({
          id: key,
          text: data[key],
        });
      }
      this.setState({
        categories: newState,
      })
    })
  }

  render() {
    return (
      <div className="wordCats">
        {this.state.categories.map((cats) => {
          return (
            <div className="wordCategory" key={cats.id}>
              <h2 onClick={() => this.handleClick(cats.id)}>
                {cats.id}
              </h2>
              {/* <WordsHandler wordId={cats.id} wordText={cats} cats={this.state.activeCat} /> */}
              {/* {console.log(this.state)} */}
            </div>
          )
        })
        }
      </div>
    )
  }

  handleClick = (id) => {
    const localState = Object.assign({}, this.state)
    if ((id !== localState.activeCat) || (localState.activeCat === "null")) {
      localState.activeCat = id
      console.log('yes')
    } else {
      localState.activeCat = "null"
      console.log('no')
    }
    this.setState(localState)
  }
}


export default WordCats;