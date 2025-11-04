import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <div id="process">
          <Process />
        </div>
        <CTA />
        <footer className="border-t border-black/10 py-10 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Digilary. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;
