import React from 'react';

//  FORMATTER FOR OPTIONS IN SELECTION DROP DOWN

// REMOVE FOCUS OF OBJECT WHEN OPTION IS SELECTED (FOR CONSISTENT STYLE)
const stopFocus = () => {
  document.getElementById("structureSelect").blur()
}

const SentenceOptions = (props) => {
  return (
    <option onClick={() => stopFocus()} key={props.id} value={props.text}>{props.text}</option>
  )
}

export default SentenceOptions;