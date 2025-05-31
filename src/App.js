import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <section id="home" style={{ height: '100vh' }}>
          <Home />
        </section>
        <section id="services" style={{ height: '100vh' }}>
          <h1>Servicios</h1>
        </section>
        <section id="gallery" style={{ height: '100vh' }}>
          <h1>Galería</h1>
        </section>
        <section id="about" style={{ height: '100vh' }}>
          <h1>Sobre Nosotros</h1>
        </section>
        <section id="contact" style={{ height: '100vh' }}>
          <h1>Contacto</h1>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
