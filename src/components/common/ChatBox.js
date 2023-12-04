import React, { useState, useEffect } from 'react';
import './ChatBox.css';
import apigClient from '../../api/apigClient';

function ChatBox() {

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Function to send a message to the server
  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      const messageToSend = { text: newMessage, sender: 'user' };
      setMessages([...messages, messageToSend]);
      setNewMessage('');

      try {
        // Use the apigClient to send the message to API
        const response = await apigClient.messagesPost({}, messageToSend, {});
        // Assuming the bot's response is immediately returned in the POST request
        
        const botResponse = JSON.parse(response.data.body);
        setMessages(prevMessages => [...prevMessages, botResponse]);
      } catch (error) {
        console.error('Error sending/receiving message:', error);
        // Handle the error appropriately
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
      event.preventDefault(); // Prevent form submission
    }
  };

  return (
    <div className="chatbox">
      <div className="chat-header">
        <h2>Chat Chat</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Send a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;