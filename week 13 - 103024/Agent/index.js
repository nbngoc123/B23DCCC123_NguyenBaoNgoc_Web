import React, { useState } from 'react';
import "./Agent.css";

function Agent() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);
console.log(prompt)
  const handleSubmit = async (event) => {
      event.preventDefault();

    // Add user message to messages state
    setMessages([...messages, { role: 'user', content: prompt }]);

    // Clear input field
    setPrompt('');
      const outputFormat = "output để dạng JSON";

    try {
      const response = await fetch('http://localhost:3001/api/generate/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `prompt=${outputFormat}${prompt}`,
      });
      const data = await response.json();

      // Add assistant response to messages state
      setMessages([...messages, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    return (
        <>
        <h1>Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="prompt"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <div id="message-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>
    </>
  );
}

export default Agent;