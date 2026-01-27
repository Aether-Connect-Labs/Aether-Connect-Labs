import React from 'react';
import { Network, Database, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">La Visión: <span className="text-acl-neon">El Puente Multichain</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Arquitectura diseñada para la redundancia crítica de datos y la interoperabilidad sin fricción.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-acl-neon/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Network className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Interoperabilidad Nativa</h3>
            <p className="text-gray-400 leading-relaxed">
              ACL no está limitado a una sola red. Actúa como el puente de valor que permite la redundancia crítica de datos entre el consenso de <span className="text-white font-semibold">Hedera</span> y la liquidez de <span className="text-white font-semibold">XRPL</span>. Conectando ecosistemas para un flujo de valor sin interrupciones.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-acl-neon/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
              <Database className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Infraestructura de Datos Inmutable</h3>
            <p className="text-gray-400 leading-relaxed">
              Utilizamos <span className="text-white font-semibold">Filecoin</span> e <span className="text-white font-semibold">IPFS</span> para garantizar que cada bit de información gestionado por ACL sea inmutable y auditable. Cumplimos con estándares de integridad que preparan el camino para auditorías bajo normas IFRS.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
