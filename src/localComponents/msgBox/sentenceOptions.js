import React from 'react';

const stopFocus = () => {
  document.getElementById("structureSelect").blur()
}

const SentenceOptions = (props) => {
  return (
    <option onClick={() => stopFocus()} key={props.id} value={props.text}>{props.text}</option>
  )
}

export default SentenceOptions;