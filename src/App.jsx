import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-primary">
        <div className="text-center">
          <div className="animate-bounce-gentle mb-4">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-large flex items-center justify-center mx-auto">
              <span className="text-3xl">🩺</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">SugarCare</h1>
          <p className="text-white/80">Loading your health companion...</p>
          <div className="mt-6">
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {user ? <Dashboard /> : <Auth />}
    </div>
  );
}
