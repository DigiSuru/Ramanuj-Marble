import { useState } from 'react';
import { ArrowRightIcon, CheckCircleIcon } from '../components/icons/Icons';
import { PRODUCTS } from '../data/mockData';
import ProductModal from '../components/common/ProductModal';

const HomePage = ({ setCurrentPage }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Marble Architecture" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="block text-amber-400 tracking-[0.3em] uppercase text-sm md:text-base mb-4 animate-fade-in-up">
            Crafting Eternity in Stone
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold mb-6 leading-tight drop-shadow-lg">
            Exquisite Marble <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Masterpieces</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            From divine temple structures to premium Makrana slabs. Discover the finest craftsmanship from the heart of Rajasthan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => setCurrentPage('products')}
              className="bg-amber-600 text-white px-8 py-4 uppercase tracking-wider text-sm font-semibold hover:bg-amber-700 transition-colors w-full sm:w-auto"
            >
              Explore Collection
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="border border-white text-white px-8 py-4 uppercase tracking-wider text-sm font-semibold hover:bg-white hover:text-slate-900 transition-colors w-full sm:w-auto flex items-center justify-center"
            >
              Request Inquiry <ArrowRightIcon size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-amber-600/10 transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1629850020131-7e8c3b53f65e?auto=format&fit=crop&q=80&w=800" 
                alt="Marble Crafting" 
                className="w-full h-auto object-cover shadow-2xl rounded-sm"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-amber-600 text-sm tracking-[0.2em] uppercase mb-3 font-bold">The Heritage</h2>
              <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                Generations of <br/>Master Craftsmanship
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Based in Makrana, the city of world-renowned white marble, Sahara Marble & Temple Works has been a symbol of purity and artistic excellence for over three decades. We don't just cut stone; we breathe life into it.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Direct from Makrana Mines",
                  "Custom Designs & Dimensions",
                  "World-wide Export & Installation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckCircleIcon size={20} className="text-amber-600 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setCurrentPage('about')}
                className="group flex items-center text-amber-700 font-bold uppercase tracking-wider text-sm"
              >
                Read Our Story 
                <span className="block h-[1px] w-8 bg-amber-700 ml-3 group-hover:w-12 transition-all"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 tracking-[0.2em] uppercase text-sm font-bold">Curated Selection</span>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mt-2 mb-4">Featured Collections</h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.filter(p => p.isFeatured).map(product => (
              <div 
                key={product.id} 
                className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden border border-gray-100 flex flex-col"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden h-72">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs uppercase tracking-wider font-bold text-slate-800 rounded-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-between">
                  <h3 className="font-serif text-xl text-slate-900 mb-2">{product.name}</h3>
                  <button 
                    className="text-amber-600 text-sm font-bold uppercase tracking-wider hover:text-slate-900 transition-colors mt-2"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('products')}
              className="border-2 border-slate-900 text-slate-900 px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-slate-900 hover:text-white transition-colors"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1544085023-e2bc00ee200c?auto=format&fit=crop&q=80" 
            alt="Texture" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Need a Custom Design?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Share your vision, dimensions, and reference designs. Our artisans will carve your imagination into reality with pure Makrana marble.
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-amber-600 text-white px-10 py-4 uppercase tracking-wider font-bold hover:bg-amber-500 transition-colors shadow-lg shadow-amber-600/30"
          >
            Contact Our Experts
          </button>
        </div>
      </section>

      {/* Product Modal overlay for Homepage */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onInquire={() => setCurrentPage('contact')}
      />
    </div>
  );
};

export default HomePage;
