import React, { useState, useEffect, useRef } from 'react';

const predefinedAnswers = {
  diet: {
    keywords: ['diet', 'food', 'eat', 'meal'],
    response: `Here are some dietary recommendations for diabetics:
    • Eat plenty of non-starchy vegetables
    • Choose whole grains over refined grains
    • Limit added sugars and refined carbs
    • Include lean proteins in your meals
    • Monitor portion sizes
    • Stay hydrated with water
    Would you like specific meal suggestions?`
  },
  exercise: {
    keywords: ['exercise', 'workout', 'physical', 'activity'],
    response: `Exercise recommendations for diabetes management:
    • Aim for 150 minutes of moderate activity per week
    • Include both cardio and strength training
    • Start slowly and gradually increase intensity
    • Check blood sugar before and after exercise
    • Always carry a fast-acting sugar source
    Would you like specific exercise routines?`
  },
  medication: {
    keywords: ['medicine', 'medication', 'insulin', 'drug'],
    response: `Important medication guidelines:
    • Take medications as prescribed by your doctor
    • Keep a regular schedule for medications
    • Monitor blood sugar levels regularly
    • Store medications properly
    • Don't skip doses
    Please consult your healthcare provider for specific medical advice.`
  },
  emergency: {
    keywords: ['emergency', 'help', 'urgent', 'critical'],
    response: `For diabetes emergencies:
    • If blood sugar is below 70 mg/dL, take 15g fast-acting carbs
    • If above 240 mg/dL, check for ketones
    • Call emergency services if you experience severe symptoms
    • Keep emergency contacts readily available
    Would you like to know more about handling emergencies?`
  }
};

export default function Chat({ onBack }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatHistory');
    return saved ? JSON.parse(saved) : [
      { text: 'Hello! I\'m your AI health assistant. How can I help you today?', sender: 'bot' },
      { text: 'You can ask me about diet, exercise, medication, or emergency care.', sender: 'bot' }
    ];
  });
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const findBotResponse = (userMessage) => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    for (const category in predefinedAnswers) {
      if (predefinedAnswers[category].keywords.some(keyword => 
        lowercaseMessage.includes(keyword)
      )) {
        return predefinedAnswers[category].response;
      }
    }
    
    return `I'm not sure about that specific query. You can ask me about:
    • Diet and nutrition
    • Exercise recommendations
    • Medication guidelines
    • Emergency situations
    What would you like to know more about?`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message.trim();
    setMessage('');
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = findBotResponse(userMessage);
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">AI Health Assistant</h2>
        <button onClick={onBack} className="text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-50 rounded">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-3 rounded-lg max-w-[80%] ${
              msg.sender === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-800'
            }`}>
              <pre className="whitespace-pre-wrap font-sans">{msg.text}</pre>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="text-gray-500 text-sm">AI is typing...</div>
        )}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}
