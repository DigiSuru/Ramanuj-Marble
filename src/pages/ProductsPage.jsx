import { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/mockData';
import ProductModal from '../components/common/ProductModal';

const ProductsPage = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="bg-slate-900 py-16 text-center relative overflow-hidden mb-12">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Collections</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Explore our range of premium marble products crafted with devotion.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-amber-600 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white group rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 text-xs font-bold text-slate-800 rounded">
                  {product.category}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-serif text-lg text-slate-900 mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-amber-600 font-medium text-sm mb-4">{product.price}</p>
                <div className="mt-auto">
                  <button 
                    className="w-full py-2 bg-slate-900 text-white text-sm uppercase tracking-wider font-medium hover:bg-amber-600 transition-colors rounded"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No products found in this category.
          </div>
        )}
      </div>

      {/* Modal Popup */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onInquire={() => setCurrentPage('contact')}
      />
    </div>
  );
};

export default ProductsPage;
