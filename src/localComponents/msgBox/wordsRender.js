import React from 'react'

const WordsRender = (props) => {
  if (props.currentCat === props.currentId) {
    return (
      <React.Fragment>
        {props.currentWords[props.currentCat].map((word) => {
          return (
            // <li className="word" key={"word_" + word.wordId.replace(/\s/g, "_")}>blep</li>
            <React.Fragment>
            <li className="word">blep</li>
            {/* {console.log(word)} */}
            </React.Fragment>
          )
        })
        }
      </React.Fragment>
    )
  } else {
    return null
  }
}

export default WordsRender