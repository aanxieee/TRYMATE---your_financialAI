import React from 'react';
import { LogIn, LogOut, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  user: { name: string } | null;
  onSignIn: () => void;
  onSignOut: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, onSignIn, onSignOut }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <motion.h1 
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              TRYmate
            </motion.h1>
          </div>
          
          <div className="flex items-center">
            {user ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className="flex items-center gap-2">
                  <User size={20} className="text-gray-500" />
                  <span className="text-gray-700">{user.name}</span>
                </div>
                <button
                  onClick={onSignOut}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
              </motion.div>
            ) : (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={onSignIn}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
              >
                <LogIn size={18} />
                Sign In
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};