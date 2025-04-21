import React from 'react';

export default function Results({ onShowChat, onShowGraph, onShowClub, onBack }) {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Results</h2>
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Diet and Exercise Recommendations</h3>
        <p className="text-gray-600 mb-4">Based on your sugar level, here are personalized recommendations...</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={onShowGraph}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          View Graph
        </button>
        <button 
          onClick={onShowChat}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
        >
          Start AI Chat
        </button>
        <button 
          onClick={onShowClub}
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
        >
          Join DIU SugarCare Club
        </button>
        <button 
          onClick={onBack}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
