import { Circle, CheckCircle2 } from 'lucide-react';

const phases = [
  {
    phase: "Fase 1",
    title: "Cimentación",
    status: "current",
    items: [
      "Lanzamiento de infraestructura en Hedera",
      "Despliegue del almacenamiento en Filecoin",
      "Verificación de Metadata HIP-412"
    ]
  },
  {
    phase: "Fase 2",
    title: "Expansión de Utilidad",
    status: "upcoming",
    items: [
      "Integración completa con AcademicChain-Ledger",
      "Apertura de canales de comunidad en Patreon",
      "Lanzamiento de portal de gobernanza"
    ]
  },
  {
    phase: "Fase 3",
    title: "Puentes de Liquidez",
    status: "upcoming",
    items: [
      "Entrada en DEXs (SaucerSwap/Pangolin)",
      "Establecer par ACL/HBAR",
      "Habilitar puente con XRPL"
    ]
  }
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap Estratégico</h2>
          <p className="text-gray-400">El camino hacia la interoperabilidad total.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              <div className={`h-1 w-full absolute top-8 left-0 hidden md:block ${index === phases.length - 1 ? 'hidden' : 'bg-gray-800'}`}></div>
              
              <div className="relative z-10 bg-black border border-white/10 p-6 rounded-2xl h-full hover:border-acl-neon/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${phase.status === 'current' ? 'bg-acl-neon text-black' : 'bg-gray-800 text-gray-400'}`}>
                    {phase.status === 'current' ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                  </div>
                  <span className={`text-sm font-bold tracking-wider ${phase.status === 'current' ? 'text-acl-neon' : 'text-gray-500'}`}>
                    {phase.phase}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                
                <ul className="space-y-3">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
