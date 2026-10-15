import React from 'react';
import { Star, Phone, Calendar, ArrowRight, Sparkles, MapPin, CheckCircle, ShieldCheck, MessageCircle, Scissors, HeartHandshake, Award } from 'lucide-react';
import { SALON_INFO, REVIEWS, SALON_SERVICES } from '../data/salonData';
import { PageId } from '../components/HeaderNav';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-stone-50/50 border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-950 text-xs font-semibold shadow-2xs border border-rose-200/70">
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                </div>
                <span>Rated 4.9★ (2.2k+ reviews)</span>
                <span className="text-rose-400">·</span>
                <span className="text-rose-800">Chandigarh</span>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-bold text-rose-800 block">
                  {SALON_INFO.type}
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-extrabold text-rose-950 tracking-tight leading-tight">
                  {SALON_INFO.name}
                </h1>
                <p className="text-rose-900/80 font-medium text-sm sm:text-base">
                  SCO 41 D, 1st floor, Sector 31, Chandigarh - 160031
                </p>
              </div>

              <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Chandigarh's premier unisex destination for precision haircutting, children's cuts, 
                curly hair, dreadlocks, braiding, box braids, balayage, ombre hair colour, 
                keratin treatments, hair extensions, hair regrowth, bridal services, and body waxing.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => onNavigate('booking')}
                  className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-rose-800 hover:bg-rose-900 rounded-lg shadow-sm transition-all flex items-center gap-2 hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Online</span>
                </button>

                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {SALON_INFO.phone}</span>
                </a>

                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="px-4 py-3 text-xs sm:text-sm font-semibold text-rose-900 bg-white hover:bg-rose-50 border border-rose-200 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-rose-700" />
                  <span>Call {SALON_INFO.phone}</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-rose-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-stone-600">
                <div className="bg-white/80 p-2.5 rounded-lg border border-rose-100/60">
                  <span className="font-bold text-rose-950 block">4.9 ★ Rating</span>
                  <span className="text-[11px] text-stone-500">2.2k+ Reviews</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-lg border border-rose-100/60">
                  <span className="font-bold text-rose-950 block">Sector 31</span>
                  <span className="text-[11px] text-stone-500">SCO 41 D, 1st Floor</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-lg border border-rose-100/60">
                  <span className="font-bold text-rose-950 block">Open 7 Days</span>
                  <span className="text-[11px] text-stone-500">10:00 AM – 8:30 PM</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-lg border border-rose-100/60">
                  <span className="font-bold text-rose-950 block">Unisex Salon</span>
                  <span className="text-[11px] text-stone-500">Men, Women &amp; Kids</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-stone-900 group">
                <img
                  src={SALON_INFO.heroImage}
                  alt="Abid Hair Master - Unisex Salon Chandigarh"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />
                
                {/* Floating badge over image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-rose-100 shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800 block">
                      Master Hair Stylist &amp; Colorist
                    </span>
                    <h3 className="font-serif text-sm font-bold text-stone-900">
                      Abid Hair Master
                    </h3>
                    <p className="text-[11px] text-stone-500">
                      SCO 41 D, Sector 31, Chandigarh
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-md border border-amber-200">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      4.9★
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Feature Pillars (Exact requested services) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-700">
              Signature Service Categories
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-rose-950 mt-1">
              Featured Expertise at Abid Hair Master
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Precision haircuts, bespoke hair coloring, restorative scalp treatments, and complete bridal grooming.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-bold text-rose-800 hover:text-rose-950 flex items-center gap-1.5 shrink-0 self-start sm:self-auto bg-rose-50 px-3.5 py-2 rounded-lg border border-rose-200"
          >
            <span>View All Services &amp; Prices</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Pillar 1: Hair Styling & Haircuts */}
          <div 
            onClick={() => onNavigate('services')}
            className="p-5 bg-white rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center mb-3 group-hover:bg-rose-800 group-hover:text-white transition-colors">
                <Scissors className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">
                Haircut &amp; Styling
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Styling &amp; Haircuts
              </h3>
              <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                Specialized in <strong>Children's cuts</strong>, <strong>Curly hair</strong> styling, <strong>Dreadlocks</strong>, artistic <strong>Braiding</strong>, and protective <strong>Box braids</strong>.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Children's Cuts</span>
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Curly Hair</span>
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Dreadlocks</span>
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Box Braids</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-rose-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore Haircuts &rarr;
            </span>
          </div>

          {/* Pillar 2: Color & Highlighting */}
          <div 
            onClick={() => onNavigate('hair')}
            className="p-5 bg-white rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center mb-3 group-hover:bg-rose-800 group-hover:text-white transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">
                Color Bar
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Color &amp; Highlighting
              </h3>
              <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                Luminous <strong>Balayage</strong>, seamless <strong>Ombre hair colour</strong>, and dimensional <strong>Hair highlighting</strong> with zero brassiness and deep conditioning.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-[10px] bg-rose-50 text-rose-900 px-2 py-0.5 rounded font-medium">Balayage</span>
                <span className="text-[10px] bg-rose-50 text-rose-900 px-2 py-0.5 rounded font-medium">Ombre Colour</span>
                <span className="text-[10px] bg-rose-50 text-rose-900 px-2 py-0.5 rounded font-medium">Highlighting</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-rose-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Color Studio &rarr;
            </span>
          </div>

          {/* Pillar 3: Treatments */}
          <div 
            onClick={() => onNavigate('hair')}
            className="p-5 bg-white rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center mb-3 group-hover:bg-rose-800 group-hover:text-white transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">
                Hair Restoration
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Hair Treatments
              </h3>
              <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                Intense <strong>Keratin treatments</strong>, 100% natural <strong>Hair extensions</strong>, advanced <strong>Hair regrowth treatments</strong>, and relaxing <strong>Hair spa</strong> therapies.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Keratin</span>
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Extensions</span>
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Hair Regrowth</span>
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Hair Spa</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-rose-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              View Treatments &rarr;
            </span>
          </div>

          {/* Pillar 4: Beauty & Grooming */}
          <div 
            onClick={() => onNavigate('bridal')}
            className="p-5 bg-white rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center mb-3 group-hover:bg-rose-800 group-hover:text-white transition-colors">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">
                Beauty &amp; Aesthetics
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Beauty &amp; Grooming
              </h3>
              <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                Regal <strong>Bridal services</strong>, volumizing <strong>Blowdry</strong>, gentle <strong>Body waxing</strong>, and Rica Brazilian waxing in private sanitized suites.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-[10px] bg-rose-50 text-rose-900 px-2 py-0.5 rounded font-medium">Bridal Studio</span>
                <span className="text-[10px] bg-rose-50 text-rose-900 px-2 py-0.5 rounded font-medium">Blowdry</span>
                <span className="text-[10px] bg-rose-50 text-rose-900 px-2 py-0.5 rounded font-medium">Body Waxing</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-rose-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Bridal &amp; Waxing &rarr;
            </span>
          </div>
        </div>
      </section>

      {/* Gallery / Feature Image Showcase Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-rose-200/80 p-6 sm:p-8 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Feature Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-stone-100 group">
                <img
                  src={SALON_INFO.featureImage}
                  alt="Abid Hair Master Gallery & Feature Salon Chandigarh"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-rose-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Salon Showcase
                </div>
              </div>
            </div>

            {/* Description & Master Highlights */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold text-rose-800 uppercase tracking-widest block">
                  Excellence in Unisex Hair &amp; Beauty
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rose-950">
                  Crafting Timeless Styles in Sector 31, Chandigarh
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Led by Master Stylist Abid, our salon is celebrated for trendsetting hair artistry, 
                  protective dreadlocks, intricate box braids, and masterclass balayage color blending. 
                  Every service is delivered with dedicated consultations, hospital-grade sanitized tools, 
                  and premier international products.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-100 space-y-1">
                  <span className="font-bold text-stone-900 block flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-rose-700" />
                    Bespoke Haircuts
                  </span>
                  <p className="text-stone-500 text-[11px]">
                    Kids, men, and women cuts tailored to bone structure and personal lifestyle.
                  </p>
                </div>

                <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-100 space-y-1">
                  <span className="font-bold text-stone-900 block flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-rose-700" />
                    Texture Specialists
                  </span>
                  <p className="text-stone-500 text-[11px]">
                    Curly hair care, dreadlocks maintenance, and artistic box braiding.
                  </p>
                </div>

                <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-100 space-y-1">
                  <span className="font-bold text-stone-900 block flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-rose-700" />
                    Ammonia-Free Colors
                  </span>
                  <p className="text-stone-500 text-[11px]">
                    Sun-kissed Balayage, Ombre gradients, and protective bond-building toners.
                  </p>
                </div>

                <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-100 space-y-1">
                  <span className="font-bold text-stone-900 block flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-rose-700" />
                    Keratin &amp; Regrowth
                  </span>
                  <p className="text-stone-500 text-[11px]">
                    Deep smoothing protein therapies and scalp follicle revitalization.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Stylist on WhatsApp</span>
                </a>
                <button
                  onClick={() => onNavigate('booking')}
                  className="px-4 py-2.5 text-xs font-semibold text-rose-900 bg-rose-100 hover:bg-rose-200 rounded-lg transition-colors"
                >
                  Reserve Your Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Reviews Section (2.2k+ reviews) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-rose-50/70 rounded-3xl p-6 sm:p-8 border border-rose-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-1.5 text-amber-500 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
                <span className="text-xs font-bold text-stone-900 ml-1">
                  Rated 4.9★ (2.2k+ reviews)
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-rose-950">
                Loved by Over 2,200+ Clients in Chandigarh
              </h3>
              <p className="text-xs text-stone-600 mt-0.5">
                Verified reviews from satisfied clients across Chandigarh, Mohali, and Panchkula.
              </p>
            </div>
            <button
              onClick={() => onNavigate('booking')}
              className="px-4 py-2.5 text-xs font-semibold bg-rose-800 text-white rounded-lg hover:bg-rose-900 transition-colors self-start sm:self-auto shrink-0 shadow-2xs"
            >
              Book Your Appointment
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REVIEWS.map((rev, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-rose-100 text-xs flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-stone-700 italic mb-3 leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-bold text-stone-900">{rev.name}</span>
                  <span className="text-[10px] text-rose-700 font-semibold bg-rose-50 px-1.5 py-0.5 rounded">
                    {rev.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address & Quick Booking Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs font-semibold text-rose-800">
              <MapPin className="w-4 h-4" />
              <span>Location: Sector 31, Chandigarh</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900">
              SCO 41 D, 1st floor, Sector 31, Chandigarh - 160031
            </h4>
            <p className="text-xs text-stone-500">
              Timings: {SALON_INFO.timings} · Open All 7 Days
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="px-4 py-2.5 text-xs font-semibold text-rose-900 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-rose-700" />
              <span>Call: {SALON_INFO.phone}</span>
            </a>
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Booking</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors"
            >
              Directions &amp; Map
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
