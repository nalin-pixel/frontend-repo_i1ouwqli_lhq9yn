import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProductsPreview from './components/ProductsPreview';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-[#0C1A2B]">
      <Navbar />
      <main>
        <Hero3D />
        <ProductsPreview />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
