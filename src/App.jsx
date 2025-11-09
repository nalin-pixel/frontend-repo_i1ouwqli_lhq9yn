import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProductsPreview from './components/ProductsPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-[#0C1A2B]">
      <Navbar />
      <main>
        <Hero3D />
        <ProductsPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
