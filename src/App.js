import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <section id="home" style={{ minHeight: '100vh' }}>
          <Home />
        </section>
        <section id="services" style={{ minHeight: '100vh' }}>
          <Services />
        </section>
        <section id="about" style={{ minHeight: '100vh' }}>
          <About />
        </section>
        <section id="contact" style={{ minHeight: '100vh' }}>
          <h1>Contacto</h1>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
