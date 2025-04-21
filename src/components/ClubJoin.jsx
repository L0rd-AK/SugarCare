import React, { useState } from 'react';

export default function ClubJoin({ onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    diabetesStage: 'Stage 1'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">You are now a member of the DIU SugarCare Club!</h2>
        <p className="text-gray-600 mb-6">Welcome! We're here to help you maintain your blood sugar levels.</p>
        <button
          onClick={onBack}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Join DIU SugarCare Club</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Student ID</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            value={formData.studentId}
            onChange={(e) => setFormData({...formData, studentId: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Diabetes Stage</label>
          <select
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            value={formData.diabetesStage}
            onChange={(e) => setFormData({...formData, diabetesStage: e.target.value})}
          >
            <option value="Stage 1">Stage 1</option>
            <option value="Stage 2">Stage 2</option>
            <option value="Stage 3">Stage 3</option>
          </select>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onBack}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
