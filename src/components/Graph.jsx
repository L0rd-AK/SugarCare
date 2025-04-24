import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

export default function Graph({ data, onBack }) {
  const [timeRange, setTimeRange] = useState('all'); // all, week, month
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const filterData = () => {
    if (timeRange === 'all') return data;
    
    const now = new Date();
    const threshold = new Date();
    if (timeRange === 'week') {
      threshold.setDate(now.getDate() - 7);
    } else if (timeRange === 'month') {
      threshold.setMonth(now.getMonth() - 1);
    }
    
    return data.filter(reading => new Date(reading.timestamp) > threshold);
  };

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const filteredData = filterData();
    const ctx = chartRef.current.getContext('2d');
    
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: filteredData.map(d => new Date(d.timestamp).toLocaleDateString()),
        datasets: [{
          label: 'Blood Sugar Level',
          data: filteredData.map(d => d.sugarLevel),
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          fill: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Your Blood Sugar Trends'
          },
          legend: {
            position: 'bottom'
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
  }, [data, timeRange]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Your Blood Sugar Trends</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setTimeRange('all')}
            className={`px-3 py-1 rounded ${timeRange === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            All
          </button>
          <button
            onClick={() => setTimeRange('week')}
            className={`px-3 py-1 rounded ${timeRange === 'week' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Week
          </button>
          <button
            onClick={() => setTimeRange('month')}
            className={`px-3 py-1 rounded ${timeRange === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Month
          </button>
        </div>
      </div>
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
