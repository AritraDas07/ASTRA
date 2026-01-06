import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import NetworkBackground from './components/Background3D';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Features from './components/Features';
import Architecture from './components/Architecture';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-astra-dark text-white selection:bg-astra-cyan selection:text-astra-dark">
      
      {/* 3D Background Layer */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 50], fov: 75 }} gl={{ antialias: true, alpha: true }}>
          <Suspense fallback={null}>
            <NetworkBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* UI Layer */}
      <div className="relative z-10">
        <CustomCursor />
        <Navbar />
        <main>
            <Hero />
            <ProblemSection />
            <Features />
            <Architecture />
        </main>
        <Footer />
      </div>

    </div>
  );
}

export default App;
