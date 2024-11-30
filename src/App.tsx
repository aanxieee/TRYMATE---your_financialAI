import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ServiceOption } from './components/ServiceOption';
import { StockDashboard } from './components/StockDashboard';
import { MarketingDashboard } from './components/MarketingDashboard';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { AuthPage } from './components/auth/AuthPage';
import { Navbar } from './components/Navbar';
import { User } from './types/auth';

function App() {
  const [selectedService, setSelectedService] = useState<'stocks' | 'marketing' | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [showAuthPage, setShowAuthPage] = useState(false);

  const handleAuthSuccess = () => {
    setUser({
      id: '1',
      email: 'user@example.com',
      name: 'Demo User',
    });
    setShowAuthPage(false);
  };

  const handleSignOut = () => {
    setUser(null);
    setSelectedService(null);
  };

  if (showAuthPage) {
    return <AuthPage onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <AnimatedBackground />
      <Navbar 
        user={user} 
        onSignIn={() => setShowAuthPage(true)}
        onSignOut={handleSignOut}
      />
      <main className="flex-grow relative">
        {!selectedService ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
          >
            <div className="text-center mb-12">
              <motion.h1 
                className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                TRYmate
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Your AI-powered companion for intelligent stock predictions and digital marketing optimization. Make data-driven decisions with confidence.
              </motion.p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ServiceOption type="stocks" onSelect={() => setSelectedService('stocks')} />
              <ServiceOption type="marketing" onSelect={() => setSelectedService('marketing')} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {selectedService === 'stocks' ? <StockDashboard /> : <MarketingDashboard />}
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;