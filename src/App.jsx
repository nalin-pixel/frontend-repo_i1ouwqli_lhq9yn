import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProductsPreview from './components/ProductsPreview';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="min-h-screen font-sans bg-[#0C1A2B]">
      <Navbar />
      <main>
        <ErrorBoundary>
          <Hero3D />
        </ErrorBoundary>
        <ProductsPreview />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
