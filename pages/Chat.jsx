import React from 'react'

export default function Chat() {
    return (
        <>
            <div className="Chat">
                <div className="messages">
                    <input type="text" name="chatSession" id="chatSession" />
                </div>
                <form className="message-form">
                    <input type="text" placeholder="Send your message" />
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    )
}
