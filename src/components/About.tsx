import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import CodePlayground from './CodePlayground';
import FloatingSymbols from './FloatingSymbols';

const About: React.FC = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
    { icon: Lightbulb, label: 'Creative Solutions', value: '100+' },
    { icon: Zap, label: 'Years Experience', value: '5+' }
  ];

  return (
    <section id="about" className={`py-20 relative ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <FloatingSymbols />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className={`
            text-4xl md:text-5xl font-bold mb-6
            ${isDark 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
            }
          `}>
            About Me
          </h2>
          <div className={`w-20 h-1 mx-auto rounded ${isDark ? 'bg-cyan-400' : 'bg-blue-500'}`} />
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Aspiring SDE & Full-Stack Developer
            </h3>
            <div className={`space-y-4 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <p>
                Currently pursuing B.Tech in Electrical Engineering at Punjab Engineering College (PEC), 
                I have developed a strong passion for software development. My journey includes hands-on 
                experience with modern web technologies and a proven track record of building scalable applications.
              </p>
              <p>
                I specialize in full-stack development using React, Django, and MySQL. My experience includes 
                reducing backend response times by 30% during my internship at WoRisGo and contributing to 
                open-source projects where I ranked in the top 1% among 200+ participants.
              </p>
              <p>
                Beyond coding, I actively participate in tech competitions, contribute to open-source projects, 
                and continuously learn new technologies. I'm passionate about creating innovative solutions 
                that solve real-world problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <CodePlayground />
            
            <div className={`
              relative p-6 rounded-2xl
              ${isDark 
                ? 'bg-gradient-to-br from-gray-800/50 to-purple-900/50 border border-cyan-500/20' 
                : 'bg-gradient-to-br from-blue-50/50 to-white border border-gray-200'
              }
              backdrop-blur-sm
            `}>
              <motion.div
                className={`
                  w-24 h-24 mx-auto mb-4 rounded-full
                  ${isDark 
                    ? 'bg-gradient-to-br from-cyan-400 to-purple-400' 
                    : 'bg-gradient-to-br from-blue-400 to-purple-400'
                  }
                  flex items-center justify-center text-white text-2xl font-bold
                `}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                DJ
              </motion.div>
              
              <div className="text-center">
                <div className={`text-sm font-mono ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                  &gt; console.log("Hello World!");
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 gap-8 mt-20 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`
                p-6 rounded-xl text-center
                ${isDark 
                  ? 'bg-gray-800/50 border border-cyan-500/20' 
                  : 'bg-gray-50 border border-gray-200'
                }
                backdrop-blur-sm hover:scale-105 transition-transform duration-300
              `}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-cyan-400' : 'text-blue-500'}`} />
              <div className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;