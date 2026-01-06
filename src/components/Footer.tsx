import { Github, Twitter, Disc } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 relative z-10 bg-astra-dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-gray-400 text-sm">
            &copy; 2026 ASTRA. Built with ❤️ for the Weilliptic Hackathon.
        </div>

        <div className="flex items-center gap-6">
            <SocialLink href="#" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="#" icon={<Disc size={20} />} label="Discord" />
            <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
    <a 
        href={href} 
        aria-label={label}
        className="text-gray-400 hover:text-astra-cyan transition-colors hover:scale-110 transform duration-200"
    >
        {icon}
    </a>
);

export default Footer;
