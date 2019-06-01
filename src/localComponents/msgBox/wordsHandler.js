import React, { Component } from 'react'
import WordsRender from './wordsRender'


class WordsHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currWords: props.wordText,
      currWordsId: props.wordId
    }
  }

  render() {
    return (
      <ul className={this.state.currWordsId.replace(/\s/g, "_")}>
        {/* {console.log(this.props.wordId, "wordid", this.props.cats, "currentcat", this.state.currWords, "currwords")} */}
        <WordsRender currentCat={this.props.cats} currentWords={this.state.currWords} currentId={this.state.currWordsId}/>
        {console.log(this.state)}
      </ul>
    )
  }

  // words = (props) => {
  //   if (props.wordId === props.cats) {
  //     const localState = Object.assign({}, this.state)
  //     if (props.wordId === props.cats) {
  //       localState.currWords = props.wordText;
  //     } else {
  //       localState.currWords = []
  //     }
  //     this.setState(localState)
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // insertWords = (w) => {
  //   w.map((word) => {
  //     { console.log(word) }
  //     return (
  //       <li className="word">{word.wordText}</li>
  //     )
  //   })
  // }

  // render() {
  //   return (
  //     this.props.wordId === this.props.cats ? () => {
  //       console.log('beep')
  //       return (
  //         <ul id={this.props.wordId} >
  //           {this.props.wordText.map((word) => {
  //             return (
  //               // <li className="word" onClick={() => handleClick()}>{word}</li>
  //               <li className="word">{word}</li>
  //             )
  //           })
  //           }
  //         </ul>
  //       )
  //     } : null
  //   )
  // }



  // componentDidMount() {
  //   const wordHandle = this.props
  //   console.log(wordHandle)
  // wordHandle.on('value', (response) => {
  //   const newState = [];
  //   const data = response.val();

  //   for (let key in data) {
  //     newState.push({
  //       id: key,
  //       text: data[key],
  //       activeCat: 
  //     });
  //   }
  //   this.setState({
  //     categories: newState,
  //   })
  // })
  // }


  // allCats.forEach((item) => {
  //   document.getElementById(item['id']).innerHTML = "";
  // })
  // if ((id !== localState.activeCat) || (localState.activeCat === null)) {
  //   localState.activeCat = id
  //   obj.forEach((item) => {
  //     let idProp = `${item.replace(/\s/g, "_")}`
  //     let idTag = `word_${idProp}`
  //     wordsPick.innerHTML = wordsPick.innerHTML + `<li class="word" id="${idTag}">${item}</li>`;
  //   })
  // } else {
  //   localState.activeCat = null
  // }
}
export default WordsHandler