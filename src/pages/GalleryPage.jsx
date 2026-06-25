
import { GALLERY } from '../data/mockData';

const GalleryPage = () => (
  <div className="pt-24 pb-20 bg-white min-h-screen">
    <div className="text-center mb-16 px-4">
      <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4 mt-8">Project Gallery</h1>
      <div className="w-16 h-1 bg-amber-600 mx-auto mb-6"></div>
      <p className="text-slate-600 max-w-2xl mx-auto">A visual journey through our completed masterpieces and custom installations.</p>
    </div>

    <div className="container mx-auto px-4 md:px-8">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {GALLERY.map((imgSrc, idx) => (
          <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-shadow cursor-pointer">
            <img 
              src={imgSrc} 
              alt={`Gallery Image ${idx + 1}`} 
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                View Project
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default GalleryPage;
