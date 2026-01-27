import React from 'react';
import { Github, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Aether Connect Labs</h3>
            <p className="text-gray-400 max-w-sm">
              El motor de interoperabilidad para la nueva economía de datos. Conectando Hedera, XRPL y el mundo real.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Ecosistema</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-acl-neon transition-colors">AcademicChain</a></li>
              <li><a href="#" className="hover:text-acl-neon transition-colors">Gaming Labs</a></li>
              <li><a href="#" className="hover:text-acl-neon transition-colors">DeFi Bridges</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Comunidad</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-acl-neon hover:text-black transition-all">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-acl-neon hover:text-black transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-acl-neon hover:text-black transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>© 2024 Aether Connect Labs. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
