import { useEffect } from "react";
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const COLORS = ["#13FFAA", "#1E67C6", "#CEB4CF", "#00335C"];

function App() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  useEffect(() => {
      animate(color, COLORS, {
          ease: 'easeInOut',
          duration: 10,
          repeat: Infinity
      })
  }, []);
  
  return (
    <motion.div
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 text-gray-200"
      style={{
          backgroundImage,
      }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <NavBar />
        <Home color={color}/>
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
      <div className="absolute inset-0 z-0">
      <Canvas>
          <Stars radius={50} count={2500} factor={8} fade speed={2} />
      </Canvas>
      </div>
    </motion.div>
  );
}

export default App;
