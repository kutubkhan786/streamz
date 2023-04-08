// import React from 'react'

// export default function Chat() {
//     return (
//         <>
//             <div className="Chat">
//                 <div className="messages">
//                     <input type="text" name="chatSession" id="chatSession" />
//                 </div>
//                 <form className="message-form">
//                     <input type="text" placeholder="Send your message" />
//                     <button type="submit">Send</button>
//                 </form>
//             </div>
//         </>

//     )
// }

import React, { useState } from "react";

const Chat = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // if (message.trim() !== "") {
    //   onSendMessage(message);
    //   setMessage("");
    // }
    console.log(message);
  };

  return (
    <div className="chat-message-box">
      <input
        type="text"
        className="chat-message-input"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message..."
      />
      <button className="chat-message-send-button" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default Chat;
