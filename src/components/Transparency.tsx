import { ExternalLink, Wallet, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Transparency = () => {
  const wallets = [
    {
      title: "Ecosistema & Pools",
      percentage: 45,
      id: "0.0.10269614",
      description: "Recompensas para jugadores y staking.",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      title: "Tesorería Estratégica",
      percentage: 25,
      id: "0.0.10069094",
      description: "Modelo de custodia con liberación del 1% mensual para infraestructura y desarrollo técnico.",
      icon: ShieldCheck,
      color: "bg-purple-500"
    },
    {
      title: "Reserva del Fundador",
      percentage: 20,
      id: "0.0.10243501",
      description: "Liberación progresiva del 1% mensual, garantizando compromiso a largo plazo.",
      icon: Wallet,
      color: "bg-amber-500"
    },
    {
      title: "Liquidez de Mercado",
      percentage: 10,
      id: "0.0.10269624",
      description: "Fondos destinados a la creación de mercados en exchanges (DEX).",
      icon: TrendingUp,
      color: "bg-green-500"
    }
  ];

  return (
    <section id="transparency" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-acl-neon/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Transparencia del Ecosistema ACL
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Para asegurar la integridad del proyecto AcademicChain-Ledger y el crecimiento de ACL World, 
            hemos distribuido el suministro total de <span className="text-acl-neon">1.000.000.000 ACL</span> en cuentas auditables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {wallets.map((wallet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 hover:border-acl-neon/50 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors`}>
                    <wallet.icon className="w-6 h-6 text-acl-neon" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{wallet.title}</h3>
                    <span className="text-2xl font-bold text-acl-neon">{wallet.percentage}%</span>
                  </div>
                </div>
                <a 
                  href={`https://hashscan.io/mainnet/account/${wallet.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors bg-white/5 px-3 py-1 rounded-full"
                >
                  <span className="font-mono">{wallet.id}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="w-full bg-white/5 rounded-full h-2 mb-4 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${wallet.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`h-full ${wallet.color} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                />
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {wallet.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a 
            href="https://hashscan.io/mainnet/token/0.0.10207330"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-acl-neon transition-colors text-sm"
          >
            <ShieldCheck className="w-4 h-4" />
            Haz clic en los ID de las cuentas para verificar los saldos en tiempo real a través de HashScan
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Transparency;
