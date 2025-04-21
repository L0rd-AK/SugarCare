import { useState } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import SugarLevelForm from './SugarLevelForm';
import Results from './Results';
import Graph from './Graph';
import Chat from './Chat';
import ClubJoin from './ClubJoin';

export default function Dashboard() {
  const [view, setView] = useState('input');
  const [sugarHistory, setSugarHistory] = useState([]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">DIU SugarCare</h1>
        <button 
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </header>

      <main className="container mx-auto p-4">
        {view === 'input' && (
          <SugarLevelForm 
            onSubmit={(level) => {
              setSugarHistory([...sugarHistory, level]);
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
