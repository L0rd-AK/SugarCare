import React, { useState } from 'react';

export default function SugarLevelForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    sugarLevel: '',
    mealStatus: 'before', // before or after meal
    timestamp: new Date()
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.sugarLevel) {
      onSubmit({
        ...formData,
        sugarLevel: Number(formData.sugarLevel)
      });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Enter Sugar Level</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-gray-700">Blood Sugar Level (mg/dL)</label>
          <input
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            value={formData.sugarLevel}
            onChange={(e) => setFormData({...formData, sugarLevel: e.target.value})}
            required
            min="0"
            max="600"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700">Meal Status</label>
          <select
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.mealStatus}
            onChange={(e) => setFormData({...formData, mealStatus: e.target.value})}
          >
            <option value="before">Before Meal</option>
            <option value="after">After Meal</option>
          </select>
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
