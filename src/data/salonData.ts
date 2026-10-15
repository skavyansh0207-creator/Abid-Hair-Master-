export interface SalonService {
  id: string;
  name: string;
  category: 'hair' | 'color' | 'treatments' | 'grooming' | 'bridal';
  duration: string;
  price: number;
  description: string;
  popular?: boolean;
}

export interface BridalPackage {
  id: string;
  title: string;
  price: number;
  duration: string;
  description: string;
  includes: string[];
  recommended?: boolean;
}

export const SALON_INFO = {
  name: 'Abid Hair Master - Unisex Salon',
  shortName: 'Abid Hair Master',
  type: 'Salon & Beauty Parlour',
  tagline: 'Premier Unisex Salon & Beauty Studio in Sector 31, Chandigarh',
  rating: 4.9,
  totalReviews: '2.2k+',
  reviewsCount: 2240,
  phone: '9418329786',
  formattedPhone: '+91 9418329786',
  whatsappUrl: 'https://wa.me/919418329786?text=Hi%20Abid%20Hair%20Master%2C%20I%20would%20like%20to%20book%20an%20appointment.',
  address: {
    shop: 'SCO 41 D, 1st floor',
    area: 'Sector 31',
    city: 'Chandigarh',
    state: 'Chandigarh',
    pincode: '160031',
    landmark: '1st Floor, Sector 31 Market',
    full: 'SCO 41 D, 1st floor, Sector 31, Chandigarh - 160031',
    mapsUrl: 'https://maps.google.com/?q=SCO+41+D+1st+floor+Sector+31+Chandigarh+160031'
  },
  timings: 'Mon – Sun: 10:00 AM – 8:30 PM',
  heroImage: 'https://i.ibb.co/LD4N002Z/Screenshot-2026-10-15-15-33-26-541-com-google-android-googlequicksearchbox-edit.jpg',
  featureImage: 'https://i.ibb.co/XfbY5ht8/Screenshot-2026-10-15-15-33-46-902-com-google-android-googlequicksearchbox-edit.jpg'
};

export const SALON_SERVICES: SalonService[] = [
  // 1. Hair Styling & Haircuts
  {
    id: 'childrens-cuts',
    name: "Children's Cuts",
    category: 'hair',
    duration: '25 min',
    price: 350,
    description: "Gentle, fun, and patient haircut styling for kids of all ages with neat finishing.",
    popular: true
  },
  {
    id: 'curly-hair',
    name: 'Curly Hair Cut & Styling',
    category: 'hair',
    duration: '45 min',
    price: 850,
    description: 'Specialized curl cutting technique tailored for natural ringlets, coils, and bounce with moisture lock.',
    popular: true
  },
  {
    id: 'dreadlocks',
    name: 'Dreadlocks (Creation & Maintenance)',
    category: 'hair',
    duration: '120 min',
    price: 2499,
    description: 'Expert dreadlock crafting, interlocking, root retwisting, and organic residue-free wash.',
    popular: true
  },
  {
    id: 'braiding',
    name: 'Artistic Braiding',
    category: 'hair',
    duration: '60 min',
    price: 1199,
    description: 'Creative cornrows, French braids, Dutch braids, and modern festival hair braid artistry.'
  },
  {
    id: 'box-braids',
    name: 'Box Braids',
    category: 'hair',
    duration: '180 min',
    price: 3499,
    description: 'Precision square-parted protective box braids with seamless tension and optional synthetic/natural extensions.',
    popular: true
  },
  {
    id: 'haircut-styling',
    name: 'Unisex Haircut & Styling',
    category: 'hair',
    duration: '40 min',
    price: 550,
    description: 'Precision haircut customized to your facial features, includes clarifying wash and blowout styling.',
    popular: true
  },

  // 2. Color & Highlighting
  {
    id: 'balayage',
    name: 'Balayage',
    category: 'color',
    duration: '150 min',
    price: 4499,
    description: 'Hand-painted seamless sun-kissed gradient with soft dimensions, gloss toner, and natural grow-out.',
    popular: true
  },
  {
    id: 'ombre-hair-colour',
    name: 'Ombre Hair Colour',
    category: 'color',
    duration: '140 min',
    price: 3999,
    description: 'Gorgeous transition from deep roots to vibrant luminous ends, custom formulated for Indian hair tones.',
    popular: true
  },
  {
    id: 'hair-highlighting',
    name: 'Hair Highlighting',
    category: 'color',
    duration: '120 min',
    price: 3200,
    description: 'Full-head or crown foil highlights, face-framing money pieces, and rich multi-dimensional tones.',
    popular: true
  },
  {
    id: 'highlights-global-spa',
    name: 'Highlights + Global Color + Hair Spa',
    category: 'color',
    duration: '180 min',
    price: 5999,
    description: 'Complete hair transformation: global base tone, seamless highlights, and an intense restorative hair spa mask.',
    popular: true
  },

  // 3. Treatments
  {
    id: 'keratin-treatments',
    name: 'Keratin Treatments',
    category: 'treatments',
    duration: '120 min',
    price: 3999,
    description: 'Deep protein infusion that eliminates 95% frizz, restores hair integrity, and leaves silky smooth glass hair.',
    popular: true
  },
  {
    id: 'hair-extensions',
    name: 'Hair Extensions',
    category: 'treatments',
    duration: '90 min',
    price: 4500,
    description: '100% genuine human Remy hair extensions for instantaneous length, density, and natural movement.',
    popular: true
  },
  {
    id: 'hair-regrowth-treatments',
    name: 'Hair Regrowth Treatments',
    category: 'treatments',
    duration: '60 min',
    price: 2199,
    description: 'Scalp micro-stimulation, follicle detox, peptide serum infusion, and high-frequency hair therapy.',
    popular: true
  },
  {
    id: 'hair-spa',
    name: 'Nourishing Hair Spa & Scalp Therapy',
    category: 'treatments',
    duration: '50 min',
    price: 1199,
    description: 'Aromatic head massage, steam therapy, and deep botanical hydration mask for dull or damaged hair.'
  },

  // 4. Beauty & Grooming
  {
    id: 'bridal-services',
    name: 'Bridal Services & Makeovers',
    category: 'bridal',
    duration: '160 min',
    price: 14500,
    description: 'Signature bridal package featuring MAC/Huda Beauty base, bridal hair updo, jewelry setting, and dupatta draping.',
    popular: true
  },
  {
    id: 'blowdry',
    name: 'Blowdry & Blowout Styling',
    category: 'grooming',
    duration: '30 min',
    price: 450,
    description: 'Volumizing salon blowout, Hollywood waves, soft beach curls, or ultra-straight mirror finish.',
    popular: true
  },
  {
    id: 'body-waxing',
    name: 'Body Waxing (Full Body)',
    category: 'grooming',
    duration: '75 min',
    price: 2199,
    description: 'Smooth, hygienic waxing for arms, legs, underarms, and back using gentle Italian Rica white chocolate wax.',
    popular: true
  },
  {
    id: 'brazilian-waxing',
    name: 'Brazilian Waxing (Rica Wax)',
    category: 'grooming',
    duration: '35 min',
    price: 1500,
    description: 'Hygienic strip-less Italian Rica wax designed for sensitive skin in private, sanitized suites.',
    popular: true
  },
  {
    id: 'hydrafacial',
    name: 'HydraFacial Glow',
    category: 'grooming',
    duration: '55 min',
    price: 2499,
    description: 'Deep pore vacuum extraction, antioxidant peel, and intensive hyaluronic hydration for radiant skin.',
    popular: true
  },
  {
    id: 'eyebrow-threading',
    name: 'Eyebrow Threading & Brow Sculpting',
    category: 'grooming',
    duration: '20 min',
    price: 120,
    description: 'Precision brow shaping with antibacterial organic thread and cooling aloe vera soothing gel.'
  }
];

export const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding & Grooming Ritual',
    price: 7999,
    duration: '2 Days',
    description: 'Essential rejuvenation before the wedding rituals commence.',
    includes: [
      'Full Body Rica Waxing & Threading',
      'HydraFacial Skin Glow Treatment',
      'Keratin Restorative Hair Spa & Scalp Therapy',
      'Luxury Spa Manicure & Pedicure',
      'Exfoliating Body Polishing'
    ]
  },
  {
    id: 'hd-bridal',
    title: 'HD Bridal Makeover Package',
    price: 14500,
    duration: 'Main Wedding Day',
    description: 'Our signature bridal look designed for high-definition photography and long-lasting freshness.',
    includes: [
      'HD Bridal Makeup (MAC / Huda / NARS)',
      'Bridal Hair Styling, Extensions & Floral Accents',
      'Dupatta Draping & Silhouette Pinning',
      'Maang Tikka & Full Jewelry Setting',
      '3D Silk Lashes & Eye Enhancements'
    ],
    recommended: true
  },
  {
    id: 'airbrush-royal',
    title: 'Royal Airbrush Bridal Experience',
    price: 18500,
    duration: 'Main Wedding Day',
    description: 'Waterproof, sweatproof 24-hour flawless airbrush finish for regal brides.',
    includes: [
      'Full Waterproof Airbrush Base',
      'Custom Bridal Updo with Volume Extensions',
      'Double Dupatta Draping & Royal Pinning',
      'Complete Jewelry & Accessories Setting',
      'Touch-up Kit & Dedicated Artist Support'
    ]
  }
];

export const REVIEWS = [
  {
    name: 'Gurpreet Singh',
    rating: 5,
    text: 'Abid is a true master! Got my dreadlocks maintained and styling done. By far the finest unisex salon in Sector 31 Chandigarh.',
    service: 'Dreadlocks & Hair Styling'
  },
  {
    name: 'Ananya Mahajan',
    rating: 5,
    text: 'Got my balayage highlights and keratin treatment done at Abid Hair Master. My hair feels incredibly soft and the color transition is gorgeous!',
    service: 'Balayage & Keratin'
  },
  {
    name: 'Rhea Chopra',
    rating: 5,
    text: 'Booked Abid Hair Master for my bridal makeover and hair extensions. Looked breathtaking on my wedding day! Their team is very warm and skilled.',
    service: 'Bridal Services & Extensions'
  },
  {
    name: 'Rohit Sharma',
    rating: 5,
    text: 'Took my son for a children’s cut and got myself box braids. Superb attention to detail, very hygienic, and great hospitality.',
    service: "Children's Cut & Box Braids"
  }
];
