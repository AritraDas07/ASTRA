import { motion } from 'framer-motion';
import { Database, ShieldCheck, MessageSquareCode } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Trustless Verification",
      icon: <Database className="w-10 h-10 text-astra-cyan" />,
      description: "Real-time verification of external data (GitHub, Jira, IoT) before any action is taken.",
      delay: 0
    },
    {
      title: "On-Chain Auditability",
      icon: <ShieldCheck className="w-10 h-10 text-astra-gold" />,
      description: "Every decision hash is committed to Polygon/Base for permanent policy enforcement.",
      delay: 0.2
    },
    {
      title: "Natural Language Control",
      icon: <MessageSquareCode className="w-10 h-10 text-purple-400" />,
      description: "Powered by Icarus LLM. Just tell the agent what to audit and pay.",
      delay: 0.4
    }
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Key Features</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                z: 50
              }}
              className="glass-panel p-8 rounded-xl relative group transform-style-3d perspective-1000"
            >
              <div className="mb-6 bg-white/5 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
