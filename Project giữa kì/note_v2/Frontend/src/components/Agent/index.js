import React, { useState } from 'react';
// import "./Agent.css";
import SendButton from '../Control/SendButton/SendButton';
import Chat from './Chat/Chat';

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

    try {
      const response = await fetch('http://localhost:3006/api/tool/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ prompt })
      });
      const data = await response.json();
      console.log(data)
      const tool = data.choices[0].message.content;
      console.log(tool)
      setMessages([...messages, { role: 'assistant', content: tool }]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
        <h1 className="chatbot-title">Chatbot</h1>
        <Chat messages={messages} />
        <form onSubmit={handleSubmit} className='chat-area'>
          <SendButton handleClick={handleSubmit} value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
        </form>

    </>
  );
}


export default Agent;








{/* <div id="message-container">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              {message.content}
            </div>
          ))}
        </div> */}





{/* <input
          type="text"
          name="prompt"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        /> */}
{/* <button type="submit">Send</button> */ }

// return (
//   <>
//   <h1>Chatbot</h1>
// <div id="message-container">
//   {messages.map((message, index) => (
//     <div key={index} className={`message ${message.role}`}>
//       {message.content}
//     </div>
//   ))}
// </div>
// <form onSubmit={handleSubmit} className='chat-area'>
//   <input
//     type="text"
//     name="prompt"
//     placeholder="Enter your prompt"
//     value={prompt}
//     onChange={(e) => setPrompt(e.target.value)}
//   />
//   <button type="submit">Send</button>
// </form>
// </>
// );
// reder ở đầu
