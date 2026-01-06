import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProblemSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">The Trust Gap</h2>
                    <div className="h-1 w-20 bg-astra-cyan mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Before ASTRA - Black Box */}
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-black/40 border border-gray-800 rounded-2xl p-8 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-32 h-32 bg-gray-900 rounded-lg mb-6 flex items-center justify-center relative shadow-inner shadow-black">
                                <span className="text-4xl">?</span>
                                {/* Glitch effect overlay */}
                                <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay animate-pulse"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-300 mb-2">Current Automation</h3>
                            <p className="text-gray-500 text-sm tracking-widest mb-4">(BLACK BOX)</p>
                            <ul className="space-y-3 text-gray-400 text-left w-full max-w-xs">
                                <li className="flex items-center gap-2">
                                    <span className="text-red-500">×</span> No proof of work
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-500">×</span> Fragile trust
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-500">×</span> Disconnected payments
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* After ASTRA - Glass Box */}
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="glass-panel rounded-2xl p-8 relative overflow-hidden"
                    >
                         <div className="absolute inset-0 bg-gradient-to-br from-astra-cyan/10 to-astra-purple/10"></div>
                         <div className="relative z-10 flex flex-col items-center">
                            <div className="w-32 h-32 border border-astra-cyan/50 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden backdrop-blur-sm shadow-[0_0_20px_rgba(100,255,218,0.2)]">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                                <svg className="w-12 h-12 text-astra-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">ASTRA Workflow</h3>
                            <p className="text-astra-cyan text-sm tracking-widest mb-4">(GLASS BOX)</p>
                            <ul className="space-y-3 text-gray-200 text-left w-full max-w-xs">
                                <li className="flex items-center gap-2">
                                    <span className="text-astra-cyan">✓</span> Immutable audit trails
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-astra-cyan">✓</span> Cryptographic proof
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-astra-cyan">✓</span> Instant settlement
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
