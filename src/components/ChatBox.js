import React, { useState } from 'react';
import './ChatBox.css';
import { BsSendFill } from "react-icons/bs";




function ChatBox() {
    const[text, setText] = useState(""); 
    const conversation = [
        { id: 1, sender: 'user', message: 'Hi there!' },
        { id: 2, sender: 'bot', message: 'Hello! How can I help you?' },
        { id: 3, sender: 'user', message: 'I have a question about...' },
      ];

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

  return (
    <div>
        
      {/* Conversation messages */}
            

        <div className='display'>


            <div className='conversation'>
                {conversation.map(msg => (
                <div key={msg.id} className={`message ${msg.sender}`}>
                    {msg.message}
                </div>
                ))}
            </div>

            <div className="msg-box">
                <textarea className="form-control" value={text} onChange={handleOnChange} id='text-input' placeholder='Type a message here...'></textarea>
                <div id='send'><BsSendFill /></div>
            </div>
        </div>
        
    </div>
  )
}

export default ChatBox