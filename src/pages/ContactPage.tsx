import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Star, ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-rose-700">
          Abid Hair Master · Location &amp; Directions
        </span>
        <h1 className="font-serif text-3xl font-bold text-rose-950 mt-1">
          Contact &amp; Studio Location
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Visit Abid Hair Master - Unisex Salon in Sector 31, Chandigarh. Open 7 days a week.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Contact Details Card */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-5">
          <h2 className="font-serif text-xl font-bold text-rose-950">
            Salon Information
          </h2>

          <div className="space-y-4 text-xs">
            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-stone-500 block">Phone &amp; Appointments:</span>
                <a href={`tel:${SALON_INFO.phone}`} className="font-bold text-base text-stone-900 hover:text-rose-800 font-mono">
                  {SALON_INFO.phone}
                </a>
                <div className="mt-1">
                  <a
                    href={SALON_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 hover:bg-emerald-100 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp: 9418329786</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-stone-500 block">Full Address:</span>
                <p className="font-bold text-stone-900 leading-relaxed text-sm">
                  {SALON_INFO.address.shop},<br />
                  {SALON_INFO.address.area},<br />
                  {SALON_INFO.address.city} - {SALON_INFO.address.pincode}
                </p>
                <span className="text-stone-500 text-[11px] block mt-0.5">
                  Landmark: {SALON_INFO.address.landmark}
                </span>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-stone-500 block">Opening Timings:</span>
                <p className="font-bold text-stone-900">{SALON_INFO.timings}</p>
                <span className="text-emerald-700 text-[11px] font-semibold">Open all 7 days for Men, Women &amp; Kids</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-start gap-3 pt-2 border-t border-stone-100">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <span className="text-stone-500 block">Verified Client Rating:</span>
                <p className="font-bold text-stone-900">
                  Rated {SALON_INFO.rating}★ ({SALON_INFO.totalReviews} Google Reviews)
                </p>
              </div>
            </div>
          </div>

          <a
            href={SALON_INFO.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 text-xs font-semibold text-white bg-rose-800 hover:bg-rose-900 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-2xs"
          >
            <Navigation className="w-4 h-4" />
            <span>Open SCO 41 D in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Landmarks & Parking Guide */}
        <div className="space-y-4">
          {/* Studio Image preview */}
          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-xs relative">
            <img
              src={SALON_INFO.featureImage}
              alt="Abid Hair Master Studio in Chandigarh"
              className="w-full h-48 object-cover object-center"
            />
            <div className="absolute bottom-2 left-2 bg-stone-950/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded">
              Sector 31 Chandigarh Lounge
            </div>
          </div>

          <div className="bg-rose-50/70 p-5 rounded-2xl border border-rose-100 space-y-3">
            <h3 className="font-serif text-lg font-bold text-rose-950 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-700" />
              <span>How to Reach Abid Hair Master</span>
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We are situated at <strong>SCO 41 D, on the 1st floor</strong> in the bustling commercial heart of Sector 31, Chandigarh.
            </p>
            <ul className="text-xs text-stone-600 space-y-1.5 pt-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                <span>Easily accessible from Tribune Chowk &amp; Sector 32 Hospital</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                <span>Direct approach with ample open parking in Sector 31 market</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                <span>Dedicated private salon booths for bridal and waxing care</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 text-xs text-stone-600 space-y-2">
            <h4 className="font-bold text-stone-900">Appointments &amp; Walk-ins:</h4>
            <p>
              Walk-in clients are warmly welcomed throughout our working hours. 
              For intensive services like dreadlocks creation, box braids, balayage color, or bridal makeup packages, booking 1 day in advance is highly recommended.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
