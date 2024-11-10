import { useState } from 'react';

function MessageForm() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);

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

      setMessages([...messages, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MessageForm;
