import React, { useState } from 'react';
import './ChatBox.css';



function ChatBox() {
    const[text, setText] = useState(""); 

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

  return (
    <div>
        <div className="msg-box">
            <textarea className="form-control" value={text} onChange={handleOnChange} id='text-input'></textarea>
        </div>
    </div>
  )
}

export default ChatBox