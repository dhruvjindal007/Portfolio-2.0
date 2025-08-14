import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogDetail from './components/BlogDetail';
function App() {
  return (
    <ThemeProvider>
      <Router>
        <CustomCursor />
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Testimonials />
              <Blog />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;