import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function Graph({ data, onBack }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map((_, index) => `Reading ${index + 1}`),
        datasets: [{
          label: 'Blood Sugar Level',
          data: data.map(d => d.sugarLevel),
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Your Blood Sugar Trends'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Blood Sugar Level (mg/dL)'
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Blood Sugar Trends</h2>
      <div className="mb-6 aspect-w-16 aspect-h-9">
        <canvas ref={chartRef}></canvas>
      </div>
      <button
        onClick={onBack}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Back
      </button>
    </div>
  );
}
