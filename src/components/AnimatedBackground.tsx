import React from 'react';
import { motion } from 'framer-motion';

const symbols = ['$', '€', '¥', '£', '₹', '₿'];
const chartPatterns = ['📈', '📉'];

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Animated grid lines */}
      <div className="absolute inset-0" style={{ opacity: 0.05 }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`grid-${i}`}
            className="absolute left-0 right-0 h-px bg-blue-500"
            style={{ top: `${(i + 1) * 5}%` }}
          />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`grid-vertical-${i}`}
            className="absolute top-0 bottom-0 w-px bg-blue-500"
            style={{ left: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>

      {/* Currency symbols */}
      {Array.from({ length: 30 }).map((_, index) => (
        <motion.div
          key={`symbol-${index}`}
          className="absolute text-2xl text-green-500/20 select-none font-mono"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -50,
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0
          }}
          animate={{
            y: [null, window.innerHeight + 50],
            opacity: [0, 0.3, 0],
            scale: Math.random() * 0.5 + 1
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
          {symbols[Math.floor(Math.random() * symbols.length)]}
        </motion.div>
      ))}

      {/* Chart patterns */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={`chart-${index}`}
          className="absolute text-xl select-none"
          initial={{
            x: -50,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            x: [null, window.innerWidth + 50],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20
          }}
        >
          {chartPatterns[Math.floor(Math.random() * chartPatterns.length)]}
        </motion.div>
      ))}

      {/* Glowing orbs */}
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              Math.random() > 0.5 ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)'
            } 0%, transparent 70%)`
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900/80" />
    </div>
  );
};