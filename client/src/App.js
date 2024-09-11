import React, { useState } from 'react';
import axios from 'axios';
import ChatBox from './components/ChatBox';
import './styles/App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);

      try {
        const response = await axios.post('http://localhost:5000/api/chat', { message: input });
        const aiMessage = { text: response.data.message, sender: 'ai' };
        setMessages([...messages, userMessage, aiMessage]);
      } catch (error) {
        console.error('Error:', error);
      }

      setInput('');
    }
  };

  return (
    <div className="App">
      <h1>AI Assistant - Customer Service</h1>
      <ChatBox messages={messages} />
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default App;
