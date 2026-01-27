import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import UseCases from './components/UseCases';
import TokenDetails from './components/TokenDetails';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-acl-neon selection:text-black">
      <Navbar />
      <Hero />
      <Vision />
      <UseCases />
      <TokenDetails />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
