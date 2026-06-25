
import { MessageCircleIcon } from '../icons/Icons';
import { CONTACT_INFO } from '../../data/mockData';

const WhatsAppButton = () => (
  <a 
    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`} 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
    aria-label="Contact us on WhatsApp"
  >
    <MessageCircleIcon size={28} />
    <span className="absolute right-16 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none whitespace-nowrap">
      Chat with us!
    </span>
  </a>
);

export default WhatsAppButton;
