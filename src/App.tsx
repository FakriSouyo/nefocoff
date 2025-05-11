import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  // Update document title
  React.useEffect(() => {
    document.title = "Nefo Coff - Sip, Snack, and Chill";
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Location />
      <Footer />
    </div>
  );
}

export default App;