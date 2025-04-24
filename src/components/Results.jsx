import React from 'react';

export default function Results({ onShowChat, onShowGraph, onShowClub, onBack, sugarLevel, mealStatus }) {
  const getRecommendations = () => {
    if (!sugarLevel) return {
      status: 'No data',
      recommendations: ['Please input your blood sugar level for personalized recommendations.']
    };

    const isBefore = mealStatus === 'before';
    
    if (isBefore) {
      if (sugarLevel < 70) return {
        status: 'Low Blood Sugar (Hypoglycemia)',
        recommendations: [
          'Consume 15-20 grams of fast-acting carbohydrates immediately',
          'Consider eating glucose tablets or drinking fruit juice',
          'Wait 15 minutes and recheck your blood sugar',
          'Consult your doctor if symptoms persist'
        ]
      };
      if (sugarLevel >= 70 && sugarLevel <= 130) return {
        status: 'Normal (Before Meal)',
        recommendations: [
          'Maintain your current diet plan',
          'Continue regular exercise routine',
          'Monitor blood sugar levels regularly'
        ]
      };
      return {
        status: 'High Blood Sugar (Hyperglycemia)',
        recommendations: [
          'Drink plenty of water',
          'Exercise moderately if safe to do so',
          'Review your meal plan',
          'Consider consulting your healthcare provider',
          'Monitor ketones if blood sugar is above 240 mg/dL'
        ]
      };
    } else {
      if (sugarLevel < 70) return {
        status: 'Low Blood Sugar (Hypoglycemia)',
        recommendations: [
          'Consume 15-20 grams of fast-acting carbohydrates immediately',
          'Consider eating glucose tablets or drinking fruit juice',
          'Wait 15 minutes and recheck your blood sugar',
          'Consult your doctor if symptoms persist'
        ]
      };
      if (sugarLevel >= 70 && sugarLevel <= 180) return {
        status: 'Normal (After Meal)',
        recommendations: [
          'Continue your regular post-meal routine',
          'Consider a light walk to help lower blood sugar',
          'Monitor blood sugar levels regularly'
        ]
      };
      return {
        status: 'High Blood Sugar (Hyperglycemia)',
        recommendations: [
          'Drink plenty of water',
          'Take a 15-30 minute walk if safe to do so',
          'Review your meal portions and carbohydrate intake',
          'Consider consulting your healthcare provider',
          'Monitor ketones if blood sugar is above 240 mg/dL'
        ]
      };
    }
  };

  const { status, recommendations } = getRecommendations();

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Results</h2>
      <div className="mb-6">
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-lg mb-2">
            Blood Sugar Level: <span className="font-semibold">{sugarLevel} mg/dL</span>
          </p>
          <p className="text-lg mb-2">
            Timing: <span className="font-semibold">{mealStatus === 'before' ? 'Before' : 'After'} Meal</span>
          </p>
          <p className="text-lg font-medium text-blue-600">
            Status: {status}
          </p>
        </div>
        
        <h3 className="text-xl font-medium mb-2">Recommendations</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
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
