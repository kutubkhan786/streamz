import React, { useState } from "react";

const Chat = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    console.log(message);
  };

  return (
    <div className="Chat">
      <div className="messages">
        <input type="text" name="chatSession" id="chatSession" />
      </div>
      <form className="message-form">
        <input type="text" placeholder="Send your message" className="chat-message-input"
          value={message}
          onChange={handleInputChange} />
        <button type="submit" className="chat-message-send-button" onClick={handleSendMessage}>Send</button>
      </form>
    </div>
  );
};

export default Chat;

