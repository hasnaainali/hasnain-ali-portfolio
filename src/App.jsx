import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

// Import components one by one to see which one fails
import Navbar from "./components/logic/Navbar";
import Hero from "./components/logic/Hero";
import About from "./components/logic/About";
import Skills from "./components/logic/Skills";
import Services from "./components/logic/Services";
import Projects from "./components/logic/Projects";
import Contact from "./components/logic/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="loader"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        >
          <div className="loader-ring"></div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Loading Portfolio...
        </motion.h2>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="app-background" />
      <div className="orb-global orb-1" />
      <div className="orb-global orb-2" />
      <div className="orb-global orb-3" />

      {/* Test if components render */}
      <div style={{ color: 'white', textAlign: 'center', padding: '20px', background: 'red' }}>
        App is rendering
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;