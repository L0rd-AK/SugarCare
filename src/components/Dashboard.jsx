import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import SugarLevelForm from './SugarLevelForm';
import Results from './Results';
import Graph from './Graph';
import Chat from './Chat';
import ClubJoin from './ClubJoin';

export default function Dashboard() {
  const [view, setView] = useState('input');
  const [sugarHistory, setSugarHistory] = useState(() => {
    const saved = localStorage.getItem('sugarHistory');
    return saved ? JSON.parse(saved) : [];
  });
  const [lastReading, setLastReading] = useState(() => {
    const saved = localStorage.getItem('lastReading');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem('sugarHistory', JSON.stringify(sugarHistory));
  }, [sugarHistory]);

  useEffect(() => {
    localStorage.setItem('lastReading', JSON.stringify(lastReading));
  }, [lastReading]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-blue-600">DIU SugarCare</h1>
              <div className="hidden md:flex space-x-4">
                <button 
                  onClick={() => setView('input')}
                  className={`px-3 py-2 rounded-md ${view === 'input' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  New Reading
                </button>
                <button 
                  onClick={() => setView('graph')}
                  className={`px-3 py-2 rounded-md ${view === 'graph' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  History
                </button>
                <button 
                  onClick={() => setView('chat')}
                  className={`px-3 py-2 rounded-md ${view === 'chat' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  AI Chat
                </button>
                <button 
                  onClick={() => setView('club')}
                  className={`px-3 py-2 rounded-md ${view === 'club' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Club
                </button>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <div className="md:hidden flex space-x-2 mb-4">
          <button 
            onClick={() => setView('input')}
            className="flex-1 px-3 py-2 bg-blue-500 text-white rounded"
          >
            New
          </button>
          <button 
            onClick={() => setView('graph')}
            className="flex-1 px-3 py-2 bg-blue-500 text-white rounded"
          >
            History
          </button>
          <button 
            onClick={() => setView('chat')}
            className="flex-1 px-3 py-2 bg-blue-500 text-white rounded"
          >
            Chat
          </button>
          <button 
            onClick={() => setView('club')}
            className="flex-1 px-3 py-2 bg-blue-500 text-white rounded"
          >
            Club
          </button>
        </div>

        {view === 'input' && (
          <SugarLevelForm 
            onSubmit={(reading) => {
              setSugarHistory([...sugarHistory, reading]);
              setLastReading(reading);
              setView('results');
            }}
          />
        )}

        {view === 'results' && (
          <Results 
            onShowChat={() => setView('chat')}
            onShowGraph={() => setView('graph')}
            onShowClub={() => setView('club')}
            onBack={() => setView('input')}
            sugarLevel={lastReading?.sugarLevel}
            mealStatus={lastReading?.mealStatus}
          />
        )}

        {view === 'graph' && (
          <Graph 
            data={sugarHistory}
            onBack={() => setView('results')}
          />
        )}

        {view === 'chat' && (
          <Chat 
            onBack={() => setView('results')}
          />
        )}

        {view === 'club' && (
          <ClubJoin 
            onBack={() => setView('results')}
          />
        )}
      </main>
    </div>
  );
}
