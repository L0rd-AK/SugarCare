import React, { useState } from 'react';

export default function Chat({ onBack }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hello! Ask me anything about diet, exercise, and health.', sender: 'bot' },
    { text: 'Choose an option below to get started:', sender: 'bot' }
  ]);

  const predefinedQuestions = [
    'What is a good diet for diabetics?',
    'How much exercise should I do daily?',
    'What foods should diabetics avoid?',
    'How can I manage my blood sugar through exercise?'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Thank you for your question. Our healthcare team will respond shortly.", 
          sender: 'bot' 
        }]);
      }, 1000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">AI Health Chatbot</h2>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-4 h-96 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-3 rounded-lg ${
              msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2">
        {predefinedQuestions.map((q, index) => (
          <button
            key={index}
            onClick={() => {
              setMessages([...messages, { text: q, sender: 'user' }]);
            }}
            className="bg-gray-100 p-2 rounded hover:bg-gray-200 text-sm"
          >
            {q}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
        <button 
          onClick={onBack}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
      </form>
    </div>
  );
}
