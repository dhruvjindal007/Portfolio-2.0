import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const commands = [
    'dhruv@portfolio:~$ whoami',
    'Dhruv Jindal - Software Development Engineer',
    'dhruv@portfolio:~$ ls -la skills/',
    'drwxr-xr-x  2 dhruv dhruv 4096 Dec 15 2024 frontend/',
    'drwxr-xr-x  2 dhruv dhruv 4096 Dec 15 2024 backend/',
    'drwxr-xr-x  2 dhruv dhruv 4096 Dec 15 2024 databases/',
    'dhruv@portfolio:~$ cat experience.txt',
    'WoRisGo Internship: Backend optimization +30% performance',
    'PWOC: Top 1% contributor among 200+ participants',
    'dhruv@portfolio:~$ npm run build-career',
    '✓ Building amazing projects...',
    '✓ Learning new technologies...',
    '✓ Contributing to open source...',
    'dhruv@portfolio:~$ git status',
    'On branch main',
    'Your portfolio is up to date.',
    'dhruv@portfolio:~$ echo "Ready for new opportunities!"',
    'Ready for new opportunities!',
    'dhruv@portfolio:~$ _'
  ];

  useEffect(() => {
    if (!isOpen) {
      setCurrentLine(0);
      setDisplayText('');
      return;
    }

    const timer = setTimeout(() => {
      if (currentLine < commands.length) {
        const command = commands[currentLine];
        let charIndex = 0;
        
        const typeWriter = setInterval(() => {
          if (charIndex < command.length) {
            setDisplayText(prev => prev + command[charIndex]);
            charIndex++;
          } else {
            clearInterval(typeWriter);
            setTimeout(() => {
              setDisplayText(prev => prev + '\n');
              setCurrentLine(prev => prev + 1);
            }, 500);
          }
        }, 50);

        return () => clearInterval(typeWriter);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [currentLine, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            className={`
              relative w-full max-w-4xl h-96 rounded-lg overflow-hidden
              ${isDark 
                ? 'bg-gray-900 border border-cyan-500/30' 
                : 'bg-gray-900 border border-gray-600'
              }
              shadow-2xl
            `}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between p-3 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300 font-mono">dhruv@portfolio:~</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400"
                />
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 h-full overflow-y-auto bg-black text-green-400 font-mono text-sm">
              <pre className="whitespace-pre-wrap">{displayText}</pre>
              <motion.span
                className="inline-block w-2 h-4 bg-green-400 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalModal;