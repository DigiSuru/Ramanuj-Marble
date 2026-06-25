
import { InstagramIcon, FacebookIcon, ChevronRightIcon, MapPinIcon, PhoneIcon, MailIcon } from '../icons/Icons';
import { CONTACT_INFO } from '../../data/mockData';

const Footer = ({ setCurrentPage }) => (
  <footer className="bg-slate-950 text-white pt-16 pb-8">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <h2 className="font-serif text-2xl font-bold tracking-wider mb-2 text-white">SAHARA</h2>
          <p className="text-amber-500 text-xs tracking-[0.2em] uppercase mb-6">Marble & Temple Works</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Pioneers in luxury marble craftsmanship from Makrana. We bring stones to life through divine murtis, majestic temples, and premium slabs.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><InstagramIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><FacebookIcon size={20} /></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-serif mb-6 border-b border-slate-800 pb-2">Quick Links</h3>
          <ul className="space-y-3">
            {['Home', 'About', 'Products', 'Gallery', 'Contact'].map(item => (
              <li key={item}>
                <button 
                  onClick={() => setCurrentPage(item.toLowerCase())}
                  className="text-gray-400 hover:text-amber-500 text-sm transition-colors flex items-center"
                >
                  <ChevronRightIcon size={14} className="mr-2" /> {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6 border-b border-slate-800 pb-2">Our Products</h3>
          <ul className="space-y-3">
            {['Marble Temples', 'Marble Murtis', 'Statues & Arts', 'Marble Slabs', 'Custom Inlay Work'].map(item => (
              <li key={item}>
                <span className="text-gray-400 text-sm flex items-center">
                  <ChevronRightIcon size={14} className="mr-2" /> {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6 border-b border-slate-800 pb-2">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start text-gray-400 text-sm">
              <MapPinIcon size={18} className="mr-3 text-amber-500 shrink-0 mt-0.5" />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center text-gray-400 text-sm">
              <PhoneIcon size={18} className="mr-3 text-amber-500 shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-center text-gray-400 text-sm">
              <MailIcon size={18} className="mr-3 text-amber-500 shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-800 pt-8 text-center flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Sahara Marble & Temple Works. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for Luxury & Elegance</p>
      </div>
    </div>
  </footer>
);

export default Footer;
