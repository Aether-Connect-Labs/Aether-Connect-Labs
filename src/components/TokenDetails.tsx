import React from 'react';
import { Copy, Check } from 'lucide-react';

const TokenDetails = () => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("0.0.10207330");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const details = [
    { label: "Token Name", value: "Aether Connect Labs" },
    { label: "Symbol", value: "ACL" },
    { label: "Token ID", value: "0.0.10207330", copy: true },
    { label: "Max Supply", value: "1,000,000,000" },
    { label: "Network", value: "Hedera Hashgraph (Mainnet)" },
    { label: "Estatus", value: "Verificado con Metadata HIP-412" },
  ];

  return (
    <section id="token" className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Especificaciones Técnicas</h2>
            <p className="text-gray-400 mb-8">
              ACL opera en la red Hedera Hashgraph, ofreciendo transacciones de alta velocidad, bajo costo y finalidad justa, con metadatos verificados bajo el estándar HIP-412.
            </p>
            <div className="inline-block p-1 rounded-xl bg-gradient-to-r from-acl-neon/20 to-purple-500/20">
              <div className="bg-black rounded-lg p-6 backdrop-blur-sm">
                <div className="text-sm text-gray-400 mb-2">Contrato / Token ID</div>
                <div className="text-2xl font-mono text-white flex items-center gap-4">
                  0.0.10207330
                  <button onClick={copyToClipboard} className="hover:text-acl-neon transition-colors">
                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-4 text-gray-400 font-medium">Especificación</th>
                    <th className="p-4 text-gray-400 font-medium">Detalle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {details.map((item, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-gray-300 font-medium">{item.label}</td>
                      <td className="p-4 text-white font-mono flex items-center gap-2">
                        {item.value}
                        {item.copy && (
                          <button onClick={copyToClipboard} className="text-gray-500 hover:text-white transition-colors">
                            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenDetails;
