import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { cubicBezier } from '@popmotion/easing';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// Variants améliorés pour Framer Motion
const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 20,
    scale: 0.98,
    filter: "blur(4px)"
  },
  in: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    filter: "blur(0px)"
  },
  out: { 
    opacity: 0, 
    y: -20, 
    scale: 1.02,
    filter: "blur(4px)"
  },
};

const pageTransition = {
  duration: 0.4,
  ease: cubicBezier(0.6, 0.05, 0.01, 0.9)
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Services />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;