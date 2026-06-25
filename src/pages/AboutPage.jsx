
import { AwardIcon, ShieldIcon, ClockIcon } from '../components/icons/Icons';

const AboutPage = () => (
  <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
    {/* Header */}
    <div className="bg-slate-900 py-20 text-center relative overflow-hidden">
      <img src="https://images.unsplash.com/photo-1544085023-e2bc00ee200c?auto=format&fit=crop&q=80" alt="Marble texture" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">About Ramanuj Marble</h1>
        <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
      </div>
    </div>

    <div className="container mx-auto px-4 md:px-8 mt-16">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-3xl font-serif text-slate-900 mb-6">The Legacy of Makrana</h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Founded over 30 years ago, Ramanuj Marble stands at the intersection of traditional artistry and modern precision. Located in Makrana, Rajasthan—the sole source of the marble used in the Taj Mahal—we possess an intimate understanding of this divine stone.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Our mission is to preserve the ancient art of stone carving while providing our global clients with unparalleled quality in marble temples, statues, and premium architectural slabs. Every piece that leaves our workshop carries the soul of the artisan and the purity of the stone.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1629850020131-7e8c3b53f65e?auto=format&fit=crop&q=80&w=400" alt="Crafting" className="rounded-tl-3xl rounded-br-3xl shadow-lg w-full h-64 object-cover" />
          <img src="https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=400" alt="Detailing" className="rounded-tr-3xl rounded-bl-3xl shadow-lg w-full h-64 object-cover mt-8" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        {[
          { icon: <AwardIcon size={40} className="mx-auto mb-4 text-amber-600" />, title: "Premium Quality", text: "We source only the highest grade of marble, ensuring longevity and a brilliant natural luster." },
          { icon: <ShieldIcon size={40} className="mx-auto mb-4 text-amber-600" />, title: "Authenticity", text: "100% genuine Makrana marble guaranteed. We believe in transparency and trust." },
          { icon: <ClockIcon size={40} className="mx-auto mb-4 text-amber-600" />, title: "Timely Delivery", text: "Professional project management ensures your custom orders are delivered on schedule." }
        ].map((feature, idx) => (
          <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            {feature.icon}
            <h3 className="text-xl font-serif text-slate-900 mb-3">{feature.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;
