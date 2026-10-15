import React from 'react';
import { Scissors, Check, Sparkles, Calendar, Clock, ShieldCheck, HeartHandshake, MessageCircle, Phone } from 'lucide-react';
import { SALON_SERVICES, SalonService, SALON_INFO } from '../data/salonData';
import { PageId } from '../components/HeaderNav';

interface HairStudioPageProps {
  selectedServices: SalonService[];
  onToggleService: (service: SalonService) => void;
  onNavigate: (page: PageId) => void;
}

export const HairStudioPage: React.FC<HairStudioPageProps> = ({
  selectedServices,
  onToggleService,
  onNavigate,
}) => {
  const isSelected = (id: string) => selectedServices.some((s) => s.id === id);

  // Filter hair, color, and treatment services
  const hairServices = SALON_SERVICES.filter(
    (s) => s.category === 'hair' || s.category === 'color' || s.category === 'treatments'
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Title */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-rose-700">
          Abid Hair Master · Specialist Studio
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-rose-950 mt-1">
          Hair Styling, Balayage, Dreadlocks &amp; Keratin
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          Master-level transformations located at SCO 41 D, 1st floor, Sector 31, Chandigarh. 
          Expertise in children's cuts, curly hair styling, dreadlocks crafting, box braids, 
          dimensional balayage &amp; ombre, 100% natural hair extensions, and restorative keratin hair spas.
        </p>
      </div>

      {/* Featured Banner: Highlights + Global + Spa */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-rose-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-400 text-stone-950 text-[10px] font-bold uppercase tracking-wider">
              Signature Transformation Combo
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Balayage Highlights + Global Color + Deep Hair Spa
            </h2>
            <p className="text-xs sm:text-sm text-rose-100 max-w-xl leading-relaxed">
              Complete hair metamorphosis by Abid Hair Master: Seamless hand-painted balayage highlights, 
              rich global base tone, and an intensive bond-repair hair spa to keep your strands mirror-shiny, soft, and healthy.
            </p>
            <div className="flex items-center gap-4 text-xs text-rose-200 pt-1 font-mono">
              <span>Duration: ~3 Hours</span>
              <span>·</span>
              <span>Ammonia-Free Bond Builder</span>
            </div>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="text-xs uppercase text-rose-300 block">All-Inclusive Combo</span>
            <span className="font-mono text-3xl font-bold text-white block mb-3">
              ₹5,999
            </span>
            <button
              onClick={() => {
                const combo = SALON_SERVICES.find((s) => s.id === 'highlights-global-spa');
                if (combo && !isSelected(combo.id)) {
                  onToggleService(combo);
                }
                onNavigate('booking');
              }}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold rounded-lg shadow-sm transition-colors"
            >
              Book This Combo
            </button>
          </div>
        </div>
      </div>

      {/* Specialty Highlights: Dreadlocks, Box Braids & Curly Hair */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-xl border border-rose-100 shadow-2xs space-y-2">
          <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center font-bold">
            <Scissors className="w-4 h-4" />
          </div>
          <h3 className="font-serif text-base font-bold text-stone-900">
            Dreadlocks &amp; Box Braids
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Clean locking, interlocking, retwisting, and protective box braids with neat square parting.
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-rose-100 shadow-2xs space-y-2">
          <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <h3 className="font-serif text-base font-bold text-stone-900">
            Curly Hair Cutting &amp; Styling
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Custom curl shaping that defines coil patterns, banishes frizz, and locks in vital moisture.
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-rose-100 shadow-2xs space-y-2">
          <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center font-bold">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h3 className="font-serif text-base font-bold text-stone-900">
            Keratin &amp; Hair Regrowth
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Smoothing keratin sealants for gloss plus scalp micro-stimulation therapy for stronger hair follicles.
          </p>
        </div>
      </div>

      {/* Hair Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hairServices.map((service) => {
          const selected = isSelected(service.id);
          return (
            <div
              key={service.id}
              className={`p-5 bg-white rounded-xl border flex flex-col justify-between transition-all ${
                selected ? 'border-rose-500 ring-1 ring-rose-500 bg-rose-50/20' : 'border-stone-200 hover:border-rose-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    {service.duration}
                  </span>
                  {service.popular && (
                    <span className="text-rose-700 font-bold text-[11px] bg-rose-50 px-2 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
                  {service.name}
                </h3>
                <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                <span className="font-mono text-base font-bold text-stone-900">
                  ₹{service.price.toLocaleString('en-IN')}
                </span>

                <button
                  onClick={() => onToggleService(service)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    selected
                      ? 'bg-rose-800 text-white'
                      : 'bg-stone-100 text-stone-800 hover:bg-rose-100 hover:text-rose-900'
                  }`}
                >
                  {selected ? 'Added to Booking' : '+ Add Service'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hair Extensions & Direct WhatsApp Note */}
      <div className="p-6 bg-stone-900 text-white rounded-2xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-bold text-base text-amber-300">
            Natural Remy Hair Extensions &amp; Color Consultations:
          </h4>
          <p className="text-xs text-stone-300 max-w-xl">
            We offer 100% human Remy hair extensions that can be washed, heat styled, and colored. 
            Free shade matching and thickness assessment at our Sector 31 Chandigarh studio!
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={SALON_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat (9418329786)</span>
          </a>
          <a
            href={`tel:${SALON_INFO.phone}`}
            className="px-3.5 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-lg transition-colors"
          >
            Call Salon
          </a>
        </div>
      </div>
    </div>
  );
};
