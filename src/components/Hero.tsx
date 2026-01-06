import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import logo from '../assets/astra-logo.png';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Mouse proximity state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [logoCenter, setLogoCenter] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const updateLogoCenter = () => {
        const logoEl = document.getElementById('hero-logo');
        if (logoEl) {
            const rect = logoEl.getBoundingClientRect();
            setLogoCenter({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            });
        }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateLogoCenter);
    updateLogoCenter(); // Initial calc

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', updateLogoCenter);
    };
  }, []);

  // Calculate distance
  const distance = Math.sqrt(
      Math.pow(mousePos.x - logoCenter.x, 2) + 
      Math.pow(mousePos.y - logoCenter.y, 2)
  );
  
  // Max distance to react
  const maxDist = 500;
  const proximity = Math.max(0, 1 - distance / maxDist); // 0 to 1 (1 is closest)

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        
        {/* Content Container */}
        <motion.div 
            style={{ y, opacity }}
            className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center"
        >
            {/* Animated Logo */}
            <motion.div 
                id="hero-logo"
                initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ duration: 1.2, type: "spring" }}
                className="relative mb-8 group perspective-1000"
            >
                <motion.div 
                    animate={{ 
                        opacity: 0.5 + proximity * 0.5,
                        scale: 1 + proximity * 0.2
                    }}
                    className="absolute inset-0 bg-astra-cyan/30 blur-[60px] rounded-full"
                ></motion.div>
                
                <motion.img 
                    src={logo} 
                    alt="ASTRA Logo" 
                    className="h-32 w-32 md:h-48 md:w-48 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(100,255,218,0.5)]"
                    animate={{ 
                        rotateY: [0, 360],
                        scale: 1 + proximity * 0.1
                    }}
                    transition={{ 
                        rotateY: {
                            duration: 10 - (proximity * 8), // Speed up when close (10s -> 2s)
                            repeat: Infinity,
                            ease: "linear" 
                        },
                        scale: { duration: 0.2 }
                    }}
                />
            </motion.div>

            {/* Headline */}
            <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
                ASTRA: Bridging the <br/>
                <span className="text-gradient">AI Economy</span> with <span className="text-gradient-gold">On-Chain Trust</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
            >
                The first Autonomous Service & Transaction Routing Agent built on Weilliptic Icarus. 
                We turn 'black box' AI automation into verifiable, on-chain financial settlement.
            </motion.p>

            {/* CTAs */}
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-6"
            >
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-astra-cyan text-astra-dark font-bold text-lg rounded-full shadow-[0_0_20px_rgba(100,255,218,0.4)] hover:shadow-[0_0_40px_rgba(100,255,218,0.6)] transition-all relative overflow-hidden group"
                >
                    <span className="relative z-10">Deploy Your First Agent</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </motion.button>

                <motion.a 
                    href="#manifesto" 
                    className="text-astra-cyan hover:text-white transition-colors flex items-center gap-2 group"
                >
                    Read the Manifesto 
                    <span className="group-hover:translate-x-1 transition-transform">&gt;</span>
                </motion.a>
            </motion.div>

        </motion.div>
    </section>
  );
};

export default Hero;
