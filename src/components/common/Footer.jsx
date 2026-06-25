import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, ChevronRightIcon, MapPinIcon, PhoneIcon, MailIcon } from '../icons/Icons';
import { CONTACT_INFO } from '../../data/mockData';

const Footer = () => (
  <footer className="bg-slate-900 text-gray-300 pt-20 pb-10 border-t-4 border-amber-600 relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <h2 className="font-serif text-2xl font-bold tracking-wider mb-2 text-white">RAMANUJ</h2>
          <p className="text-amber-500 text-xs tracking-[0.2em] uppercase mb-6">Marble & Temple Works</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Pioneers in luxury marble craftsmanship from Makrana. We bring stones to life through divine murtis, majestic temples, and premium slabs.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 hover:text-white transition-all"><InstagramIcon size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 hover:text-white transition-all"><FacebookIcon size={18} /></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { path: '/about', label: 'Our Story' },
              { path: '/products', label: 'Collections' },
              { path: '/gallery', label: 'Gallery' },
              { path: '/contact', label: 'Contact Us' }
            ].map(link => (
              <li key={link.label}>
                <Link to={link.path} className="text-gray-400 hover:text-amber-500 transition-colors flex items-center text-sm">
                  <ChevronRightIcon size={14} className="mr-2 opacity-50" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Our Services</h3>
          <ul className="space-y-3">
            {['Custom Temple Design', 'Deity Murtis', 'Premium Makrana Slabs', 'Architectural Carving'].map(item => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors flex items-center text-sm">
                  <ChevronRightIcon size={14} className="mr-2 opacity-50" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start text-sm">
              <MapPinIcon className="text-amber-500 mr-3 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-400 leading-relaxed">{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center text-sm">
              <PhoneIcon className="text-amber-500 mr-3 flex-shrink-0" size={18} />
              <span className="text-gray-400">{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-center text-sm">
              <MailIcon className="text-amber-500 mr-3 flex-shrink-0" size={18} />
              <span className="text-gray-400">{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-800 pt-8 text-center flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Ramanuj Marble. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for Luxury & Elegance</p>
      </div>
    </div>
  </footer>
);

export default Footer;
