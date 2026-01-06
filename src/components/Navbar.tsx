import { motion } from 'framer-motion';
import logo from '../assets/astra-logo.png';

const Navbar = () => {
  return (
    <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-40 px-6 py-4"
    >
        <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                    <img src={logo} alt="ASTRA" className="h-10 w-10 object-contain relative z-10" />
                    <div className="absolute inset-0 bg-astra-cyan/50 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <span className="text-xl font-bold tracking-wider text-white">ASTRA</span>
            </div>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8">
                {['Features', 'Architecture', 'Docs'].map((item) => (
                    <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`} 
                        className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-astra-cyan transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            {/* CTA */}
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-astra-gold text-astra-dark font-bold px-6 py-2 rounded-full shadow-lg shadow-astra-gold/20 hover:shadow-astra-gold/40 transition-all"
            >
                Launch App
            </motion.button>
        </div>
    </motion.nav>
  );
};

export default Navbar;
