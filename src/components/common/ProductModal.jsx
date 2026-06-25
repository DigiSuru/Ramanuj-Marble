
import { XIcon, CheckCircleIcon, MessageCircleIcon } from '../icons/Icons';
import { CONTACT_INFO } from '../../data/mockData';

const ProductModal = ({ product, onClose, onInquire }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/50 backdrop-blur hover:bg-white text-slate-900 p-2 rounded-full transition-colors border border-gray-200 shadow-sm"
        >
          <XIcon size={20} />
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 h-64 md:h-auto relative bg-slate-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 text-xs uppercase tracking-wider font-bold rounded shadow">
            {product.category}
          </div>
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-2">{product.name}</h2>
          <div className="text-amber-600 font-medium text-lg mb-6 pb-4 border-b border-gray-100">{product.price}</div>
          
          <div className="flex-1">
            <h3 className="text-sm tracking-[0.1em] uppercase text-slate-400 font-bold mb-2">Description</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {product.description}
            </p>

            <h3 className="text-sm tracking-[0.1em] uppercase text-slate-400 font-bold mb-3">Ideal Applications</h3>
            <ul className="space-y-3 mb-8">
              {product.applications.map((app, idx) => (
                <li key={idx} className="flex items-start text-slate-700 text-sm">
                  <CheckCircleIcon size={18} className="text-amber-500 mr-2 shrink-0 mt-0.5" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-100 mt-auto flex gap-4">
            <button 
              onClick={() => {
                onClose();
                onInquire();
              }}
              className="flex-1 bg-slate-900 text-white py-3 md:py-4 uppercase tracking-widest text-sm font-bold hover:bg-amber-600 transition-colors rounded"
            >
              Enquire via Form
            </button>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hello Sahara Marble, I am interested in inquiring about the *${product.name}*.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#25D366] text-white p-3 md:p-4 hover:bg-[#20b858] transition-colors rounded"
              title="Enquire on WhatsApp"
            >
              <MessageCircleIcon size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
