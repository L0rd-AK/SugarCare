import React, { useState } from 'react';

export default function SugarLevelForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    sugarLevel: '',
    mealStatus: 'before', // before or after meal
    timestamp: new Date()
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.sugarLevel) {
      setIsSubmitting(true);
      // Simulate API call delay for better UX
      setTimeout(() => {
        onSubmit({
          ...formData,
          sugarLevel: Number(formData.sugarLevel)
        });
        setIsSubmitting(false);
      }, 500);
    }
  };

  const getSugarLevelStatus = (level) => {
    if (!level) return '';
    const num = Number(level);
    if (formData.mealStatus === 'before') {
      if (num < 80) return 'Low - Consider a snack';
      if (num <= 130) return 'Normal range';
      return 'High - Monitor closely';
    } else {
      if (num < 80) return 'Low - Consider a snack';
      if (num <= 180) return 'Normal range';
      return 'High - Monitor closely';
    }
  };

  const getStatusColor = (level) => {
    if (!level) return '';
    const num = Number(level);
    const isBeforeMeal = formData.mealStatus === 'before';
    
    if (num < 80) return 'text-red-600';
    if (isBeforeMeal ? num <= 130 : num <= 180) return 'text-green-600';
    return 'text-yellow-600';
  };

  return (
    <div className="card animate-slide-up">
      <div className="card-body">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium">
            <span className="text-2xl text-white">🩸</span>
          </div>
          <h2 className="text-xl font-bold text-secondary-900 mb-2">Blood Glucose Reading</h2>
          <p className="text-secondary-600 text-sm">Enter your current blood sugar level</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Meal Status Selection */}
          <div className="space-y-3">
            <label className="form-label">When did you take this reading?</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({...formData, mealStatus: 'before'})}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  formData.mealStatus === 'before' 
                    ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-medium' 
                    : 'border-secondary-200 hover:border-secondary-300 hover:shadow-soft'
                }`}
              >
                <div className="text-2xl mb-1">🍽️</div>
                <div className="font-medium text-sm">Before Meal</div>
                <div className="text-xs text-secondary-500">Fasting</div>
              </button>
              <button
                type="button"
                onClick={() => setFormData({...formData, mealStatus: 'after'})}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  formData.mealStatus === 'after' 
                    ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-medium' 
                    : 'border-secondary-200 hover:border-secondary-300 hover:shadow-soft'
                }`}
              >
                <div className="text-2xl mb-1">🍴</div>
                <div className="font-medium text-sm">After Meal</div>
                <div className="text-xs text-secondary-500">Postprandial</div>
              </button>
            </div>
          </div>

          {/* Blood Sugar Input */}
          <div className="space-y-3">
            <label className="form-label">Blood Sugar Level</label>
            <div className="relative">
              <input
                className="form-input pr-16 text-lg font-semibold"
                type="number"
                placeholder="Enter level"
                value={formData.sugarLevel}
                onChange={(e) => setFormData({...formData, sugarLevel: e.target.value})}
                required
                min="0"
                max="600"
                step="1"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary-500 font-medium">
                mg/dL
              </div>
            </div>
            
            {/* Real-time feedback */}
            {formData.sugarLevel && (
              <div className={`text-sm font-medium ${getStatusColor(formData.sugarLevel)} animate-fade-in`}>
                {getSugarLevelStatus(formData.sugarLevel)}
              </div>
            )}
          </div>

          {/* Reference Ranges */}
          <div className="bg-secondary-50 rounded-xl p-4">
            <h4 className="font-semibold text-secondary-900 mb-3 text-sm">Normal Ranges</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-secondary-600">Before meal:</span>
                <span className="font-medium">80-130 mg/dL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary-600">After meal:</span>
                <span className="font-medium">80-180 mg/dL</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={!formData.sugarLevel || isSubmitting}
            className="btn-primary w-full py-4 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Recording...</span>
              </div>
            ) : (
              'Record Reading'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
