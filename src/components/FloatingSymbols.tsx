import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const FloatingSymbols: React.FC = () => {
  const { isDark } = useTheme();

  const symbols = [
    '{ }', '<>', 'const', '#', '//', '[]', '()', '=>', '&&', '||',
    'function', 'class', 'import', 'export', 'async', 'await',
    '===', '!==', '++', '--', '...', '?:', 'typeof', 'null'
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {symbols.map((symbol, index) => (
        <motion.div
          key={index}
          className={`
            absolute text-xs font-mono opacity-10
            ${isDark ? 'text-cyan-400' : 'text-blue-500'}
          `}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingSymbols;