import React from 'react';

const SentenceOptions = (props) => {
  return (
    <option key={props.id} value={props.text}>{props.text}</option>
  )
}

export default SentenceOptions;