import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const logoUrl = "https://ipfs.io/ipfs/bafkreicickkyjjn3ztitciypfh635lqowdskzbv54fiqbrhs4zbmwhjv4q";

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={logoUrl} alt="ACL Logo" className="h-8 w-8 rounded-full" />
            <span className="font-bold text-xl tracking-wider text-white">Aether Connect Labs</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#vision" className="hover:text-acl-neon transition-colors px-3 py-2 rounded-md text-sm font-medium">Visión</a>
              <a href="#use-cases" className="hover:text-acl-neon transition-colors px-3 py-2 rounded-md text-sm font-medium">Casos de Uso</a>
              <a href="#token" className="hover:text-acl-neon transition-colors px-3 py-2 rounded-md text-sm font-medium">Token ACL</a>
              <a href="#transparency" className="hover:text-acl-neon transition-colors px-3 py-2 rounded-md text-sm font-medium">Transparencia</a>
              <a href="#roadmap" className="hover:text-acl-neon transition-colors px-3 py-2 rounded-md text-sm font-medium">Roadmap</a>
              <a href="https://ecosistema-oficial-acl.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-acl-neon transition-colors px-3 py-2 rounded-md text-sm font-medium">Comunidad</a>
              <a href="https://hashscan.io/mainnet/token/0.0.10207330" target="_blank" rel="noopener noreferrer" className="bg-acl-neon/10 text-acl-neon border border-acl-neon/50 hover:bg-acl-neon/20 px-4 py-2 rounded-md text-sm font-medium transition-all">
                HashScan
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#vision" className="text-gray-300 hover:text-acl-neon block px-3 py-2 rounded-md text-base font-medium">Visión</a>
            <a href="#use-cases" className="text-gray-300 hover:text-acl-neon block px-3 py-2 rounded-md text-base font-medium">Casos de Uso</a>
            <a href="#token" className="text-gray-300 hover:text-acl-neon block px-3 py-2 rounded-md text-base font-medium">Token ACL</a>
            <a href="#transparency" className="text-gray-300 hover:text-acl-neon block px-3 py-2 rounded-md text-base font-medium">Transparencia</a>
            <a href="#roadmap" className="text-gray-300 hover:text-acl-neon block px-3 py-2 rounded-md text-base font-medium">Roadmap</a>
            <a href="https://ecosistema-oficial-acl.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-acl-neon block px-3 py-2 rounded-md text-base font-medium">Comunidad</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
