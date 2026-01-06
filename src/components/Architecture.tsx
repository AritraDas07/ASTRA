import { motion } from 'framer-motion';

const Architecture = () => {
  return (
    <section id="architecture" className="py-24 relative z-10 bg-astra-dark/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Under the Hood</h2>
            <p className="text-gray-400">The flow of trust from AI to Blockchain</p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 max-w-5xl mx-auto">
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-800 -z-10">
                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-astra-cyan via-purple-500 to-astra-gold origin-left"
                ></motion.div>
            </div>

            {/* Step 1: Input Layer */}
            <ArchitecturalNode 
                title="Input Layer" 
                subtitle="(Icarus LLM)"
                icon="🤖"
                color="border-astra-cyan"
                delay={0}
            />

            {/* Arrow/Flow Animation */}
            <FlowArrow delay={0.5} />

            {/* Step 2: Orchestration */}
            <ArchitecturalNode 
                title="Orchestration" 
                subtitle="(Weil-SDK)"
                icon="⚙️"
                color="border-purple-500"
                delay={0.6}
            />

            {/* Arrow/Flow Animation */}
            <FlowArrow delay={1.1} />

            {/* Step 3: Settlement */}
            <ArchitecturalNode 
                title="Settlement Layer" 
                subtitle="(Blockchain)"
                icon="🔗"
                color="border-astra-gold"
                delay={1.2}
            />

        </div>
      </div>
    </section>
  );
};

interface NodeProps {
    title: string;
    subtitle: string;
    icon: string;
    color: string;
    delay: number;
}

const ArchitecturalNode = ({ title, subtitle, icon, color, delay }: NodeProps) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className={`w-full md:w-64 p-6 bg-astra-navy border-2 ${color} rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col items-center text-center z-10`}
    >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
        
        {/* Internal Activity Animation */}
        <div className="mt-4 w-full h-1 bg-gray-700 rounded overflow-hidden">
            <motion.div 
                animate={{ x: [-100, 200] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-1/2 h-full bg-white/50"
            ></motion.div>
        </div>
    </motion.div>
);

const FlowArrow = ({ delay }: { delay: number }) => (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="text-gray-500 md:hidden rotate-90 my-4"
    >
        ↓
    </motion.div>
);

export default Architecture;
