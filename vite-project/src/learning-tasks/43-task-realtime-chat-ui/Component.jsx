import React, { useState } from 'react';

export default function RealtimeChatDemo() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hello! How is your React & Frontend learning going?' },
    { id: 2, sender: 'user', text: 'Everything is structured and running smoothly!' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), sender: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: `Great progress on topic #43! 🚀 Keep building amazing full-stack apps!` }
      ]);
    }, 900);
  };

  return (
    <div className="module-card">
      <h3>🏆 Milestone Task 4: Real-Time Chat Interface</h3>
      
      <div className="chat-window">
        {messages.map(m => (
          <div key={m.id} className={`chat-bubble chat-${m.sender}`}>
            <strong>{m.sender === 'user' ? 'You' : 'Assistant'}:</strong> {m.text}
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="form-inline mt-2">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
          className="input-field"
        />
        <button type="submit" className="btn-primary">Send</button>
      </form>
    </div>
  );
}