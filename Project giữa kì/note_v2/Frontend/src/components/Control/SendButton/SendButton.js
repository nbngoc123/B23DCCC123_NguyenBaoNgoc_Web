import React from 'react';
import './SendButton.css';

function SendButton({ handleClick, value, onChange }) {
  return (
    <>
      <input
      type="text"
      name="prompt"
      placeholder="Enter your prompt"
      value={value}
      onChange={onChange}
    />
    
    <button type="button" onClick={handleClick} className="send-button">
      Send
    </button>
    </>
  );
}

export default SendButton;
