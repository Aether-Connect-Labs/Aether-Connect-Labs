import React from 'react';
import { GraduationCap, Gamepad2, BarChart3 } from 'lucide-react';

const cases = [
  {
    icon: GraduationCap,
    title: "AcademicChain-Ledger",
    category: "Ecosistema Educativo",
    description: "Nuestra primera implementación a gran escala. ACL es el combustible que permite la verificación instantánea de credenciales académicas, eliminando el fraude mediante un registro descentralizado.",
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    icon: Gamepad2,
    title: "Gaming & Social Labs",
    category: "Comunidad Digital",
    description: "El token sirve como medio de intercambio y acceso en nuestras comunidades digitales, integrando plataformas como Patreon y Discord para recompensar a los colaboradores.",
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    icon: BarChart3,
    title: "Eficiencia en Nichos Críticos",
    category: "Logística & Finanzas",
    description: "ACL escala hacia cualquier industria que requiera transparencia absoluta, desde logística hasta auditoría financiera, proporcionando una capa de confianza inmutable.",
    color: "text-green-400",
    bg: "bg-green-400/10"
  }
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Uso</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Separando la identidad del token pero conectándolo estratégicamente con proyectos reales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div key={index} className="bg-black/50 border border-white/5 rounded-xl p-6 hover:border-acl-neon/30 transition-all hover:translate-y-[-4px]">
              <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center mb-6`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <div className="text-sm font-mono text-gray-500 mb-2">{item.category}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
