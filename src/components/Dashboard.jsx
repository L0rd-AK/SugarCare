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

  const navigationItems = [
    { id: 'input', label: 'New Reading', icon: '📝' },
    { id: 'graph', label: 'History', icon: '📊' },
    { id: 'chat', label: 'AI Chat', icon: '🤖' },
    { id: 'club', label: 'Community', icon: '👥' },
  ];

  return (
    <div className="min-h-screen gradient-secondary">
      {/* Modern Header */}
      <header className="glass border-b border-white/20 sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-medium">
                  <span className="text-xl">🩺</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-secondary-900">SugarCare</h1>
                  <p className="text-xs text-secondary-500">Smart Health Management</p>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-2">
                {navigationItems.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => setView(item.id)}
                    className={`nav-item flex items-center space-x-2 ${view === item.id ? 'active' : ''}`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* User Actions */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-secondary-900">
                  {auth.currentUser?.email?.split('@')[0]}
                </p>
                <p className="text-xs text-secondary-500">
                  {sugarHistory.length} readings tracked
                </p>
              </div>
              <button 
                onClick={handleLogout}
                className="btn-secondary"
              >
                Sign Out
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden sticky top-16 z-40 bg-white/90 backdrop-blur-sm border-b border-secondary-100">
        <div className="flex overflow-x-auto px-4 py-2">
          {navigationItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => setView(item.id)}
              className={`flex-shrink-0 flex flex-col items-center space-y-1 px-4 py-2 mx-1 rounded-xl transition-all duration-200 ${
                view === item.id 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'text-secondary-600 hover:bg-secondary-50'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-xs font-medium whitespace-nowrap">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 animate-slide-up">
        {view === 'input' && (
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-2">Record Blood Sugar</h2>
              <p className="text-secondary-600">Track your glucose levels to stay healthy</p>
            </div>
            <SugarLevelForm 
              onSubmit={(reading) => {
                setSugarHistory([...sugarHistory, reading]);
                setLastReading(reading);
                setView('results');
              }}
            />
          </div>
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
