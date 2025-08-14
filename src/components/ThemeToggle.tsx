import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative w-16 h-8 rounded-full p-1 transition-colors duration-300
        ${isDark 
          ? 'bg-gradient-to-r from-purple-900 to-blue-900' 
          : 'bg-gradient-to-r from-blue-200 to-cyan-200'
        }
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`
          w-6 h-6 rounded-full flex items-center justify-center
          ${isDark ? 'bg-gray-800' : 'bg-white'}
        `}
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-cyan-400" />
          ) : (
            <Sun className="w-4 h-4 text-orange-500" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;