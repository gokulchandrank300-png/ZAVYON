/**
 * ZAVYON Central Product Catalogue
 * 
 * Provides curated product records across four core categories:
 * - Home Decor
 * - Fashion Accessories
 * - Garments
 * - Others
 * 
 * Each record contains authentic specifications, real pricing in INR,
 * high-resolution photography paths, and realistic options.
 */

export interface ProductVariant {
  name: string;
  options: string[];
  required?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'home-decor' | 'fashion-accessories' | 'garments' | 'others';
  categoryTitle: string;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  specifications: Record<string, string>;
  variants?: ProductVariant[];
  availability: 'In Stock' | 'Limited Edition' | 'Studio Edition';
  featured: boolean;
  tags: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'zav-hd-01',
    slug: 'vesper-fluted-ceramic-vase',
    name: 'Vesper Fluted Ceramic Vessel',
    category: 'home-decor',
    categoryTitle: 'Home Decor',
    price: 4800,
    originalPrice: 5500,
    shortDescription: 'Hand-thrown stoneware vessel featuring tactile horizontal fluting and a matte bone-white chalk finish.',
    fullDescription: 'The Vesper Vessel is an exercise in sculptural restraint. Hand-thrown on the wheel using dense grogged stoneware, each piece is individually scored with delicate horizontal fluting before receiving an unglazed matte chalk slip. Water-tight interior with raw tactile exterior, designed to stand alone as an architectural centerpiece or hold dry botanical stems.',
    images: [
      '/src/assets/images/prod_vesper_vase_1793235484738.jpg',
      '/src/assets/images/cat_home_decor_1793235463113.jpg'
    ],
    specifications: {
      'Material': 'High-fire grogged stoneware with matte chalk slip',
      'Dimensions': 'Height 24 cm · Diameter 16 cm · Rim 7 cm',
      'Weight': '1.85 kg',
      'Finish': 'Unglazed matte exterior, glazed watertight interior',
      'Care': 'Rinse by hand with mild natural soap; dry with soft cloth'
    },
    variants: [
      {
        name: 'Tone',
        options: ['Chalk White', 'Raw Sandstone']
      }
    ],
    availability: 'In Stock',
    featured: true,
    tags: ['Ceramics', 'Sculptural', 'Tabletop']
  },
  {
    id: 'zav-hd-02',
    slug: 'solstice-hand-hammered-brass-bowl',
    name: 'Solstice Hammered Brass Centerpiece',
    category: 'home-decor',
    categoryTitle: 'Home Decor',
    price: 7200,
    shortDescription: 'Solid cast brass shallow centerpiece bowl with an organic wavy rim and dark antique hand-burnished patina.',
    fullDescription: 'Crafted from heavy gauge solid brass, the Solstice centerpiece is hand-hammered by master metalsmiths to impart subtle concentric dimples that catch natural light with warm radiance. The rim retains an organic, deliberately uneven contour inspired by tidal shorelines. Protected with a subtle micro-crystalline wax coat to preserve the depth of its antique oxidation.',
    images: [
      '/src/assets/images/prod_brass_bowl_1793235484838.jpg',
      '/src/assets/images/hero_flagship_living_1793235462690.jpg'
    ],
    specifications: {
      'Material': '100% Solid Brass with organic antique patina',
      'Dimensions': 'Diameter 34 cm · Depth 7.5 cm',
      'Weight': '2.40 kg',
      'Finish': 'Hand-hammered surface, protective botanical wax seal',
      'Care': 'Wipe with dry microfiber cloth. Avoid acidic liquids.'
    },
    availability: 'Limited Edition',
    featured: true,
    tags: ['Metalwork', 'Centerpiece', 'Antique Brass']
  },
  {
    id: 'zav-fa-01',
    slug: 'archival-vegetable-tanned-wallet',
    name: 'Archival Vegetable-Tanned Bifold',
    category: 'fashion-accessories',
    categoryTitle: 'Fashion Accessories',
    price: 3400,
    originalPrice: 3900,
    shortDescription: 'Saddle-stitched full-grain bridle leather wallet with burnished beeswax edges and six card slots.',
    fullDescription: 'Engineered for decades of daily companionship. Cut by hand from 1.6mm Tuscan vegetable-tanned bridle leather, each piece is saddle-stitched by hand using waxed Irish linen thread. Features six precision card slots, two hidden receipt compartments, and a full-length note pocket. The leather develops a rich, lustrous patina unique to its owner over years of carry.',
    images: [
      '/src/assets/images/prod_leather_wallet_1793235485400.jpg',
      '/src/assets/images/cat_fashion_acc_1793235463210.jpg'
    ],
    specifications: {
      'Material': 'Full-grain vegetable-tanned cowhide (Tuscan origin)',
      'Dimensions': 'Closed: 11.2 cm × 9.4 cm · Open: 22.4 cm × 9.4 cm',
      'Stitching': 'Hand saddle-stitch with 0.55mm waxed linen thread',
      'Capacity': '6 card pockets, 2 hidden receipt slots, 1 cash sleeve',
      'Care': 'Condition sparingly once annually with natural leather balm.'
    },
    variants: [
      {
        name: 'Leather Tone',
        options: ['Onyx Black', 'Natural Saddle Tan']
      }
    ],
    availability: 'In Stock',
    featured: true,
    tags: ['Leather', 'Everyday Carry', 'Handmade']
  },
  {
    id: 'zav-fa-02',
    slug: 'monolith-sculpted-silver-signet-ring',
    name: 'Monolith Sculpted Sterling Signet',
    category: 'fashion-accessories',
    categoryTitle: 'Fashion Accessories',
    price: 5600,
    shortDescription: 'Heavy solid 925 sterling silver signet ring with hand-carved geological ridges and brushed oval face.',
    fullDescription: 'Cast through the lost-wax method from an original carved wax model, the Monolith Signet captures the undulating striations of weathered coastal rock. Cast in solid 925 sterling silver with a substantial weighty feel, it features an unengraved brushed oval crown and organic organic flanks that sit comfortably between fingers.',
    images: [
      '/src/assets/images/prod_silver_ring_1793235486642.jpg',
      '/src/assets/images/cat_fashion_acc_1793235463210.jpg'
    ],
    specifications: {
      'Material': 'Solid 925 Sterling Silver (Hallmarked)',
      'Crown Dimensions': '16 mm × 14 mm flat oval',
      'Weight': '14.2 g (approximate for size 9)',
      'Finish': 'Satin brushed face with oxidized recessed crevices',
      'Packaging': 'Presented in a rigid linen gift case with polishing cloth'
    },
    variants: [
      {
        name: 'Ring Size (US)',
        options: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
        required: true
      }
    ],
    availability: 'Studio Edition',
    featured: false,
    tags: ['Silver', 'Jewellery', 'Architectural']
  },
  {
    id: 'zav-gm-01',
    slug: 'atelier-raw-linen-overshirt',
    name: 'Atelier Raw Ecru Linen Overshirt',
    category: 'garments',
    categoryTitle: 'Garments',
    price: 6900,
    originalPrice: 7800,
    shortDescription: 'Relaxed unstructured overshirt cut from 280 GSM washed Normandy linen with genuine buffalo horn buttons.',
    fullDescription: 'The Atelier Overshirt balances workwear utility with refined tailoring. Cut in a generous, boxy drape from heavy 280 GSM pure flax linen grown in Normandy and soft-washed for immediate suppleness. Features twin reinforced patch pockets, a clean Cuban-style camp collar, and genuine matte dark horn buttons. Designed to be worn as an outer layer in temperate seasons or close to the skin in summer.',
    images: [
      '/src/assets/images/prod_linen_shirt_1793235487114.jpg',
      '/src/assets/images/cat_garments_1793235464700.jpg'
    ],
    specifications: {
      'Composition': '100% Normandy Flax Linen (280 GSM)',
      'Buttons': 'Genuine carved matte water buffalo horn',
      'Fit': 'Relaxed unstructured silhouette with drop shoulder',
      'Origin': 'Woven and tailored in artisanal batches',
      'Care': 'Gentle machine wash cold inside out or dry clean. Hang dry.'
    },
    variants: [
      {
        name: 'Size',
        options: ['Small (38)', 'Medium (40)', 'Large (42)', 'X-Large (44)'],
        required: true
      },
      {
        name: 'Shade',
        options: ['Raw Ecru', 'Washed Olive']
      }
    ],
    availability: 'In Stock',
    featured: true,
    tags: ['Linen', 'Tailoring', 'Workwear']
  },
  {
    id: 'zav-gm-02',
    slug: 'pleated-charcoal-virgin-wool-trousers',
    name: 'Pleated Charcoal Virgin Wool Trousers',
    category: 'garments',
    categoryTitle: 'Garments',
    price: 8400,
    shortDescription: 'Single-pleated wide-leg trousers tailored from 100% Australian virgin wool flannel with side adjusters.',
    fullDescription: 'Tailored for graceful movement and effortless drape. Cut with a high-rise waist, single reverse front pleats, and a gently tapered wide silhouette. Constructed without belt loops for a pristine waistband, featuring adjustable side-tabs with polished brass slide buckles. Interior half-lined in smooth cupro for breathable frictionless comfort.',
    images: [
      '/src/assets/images/prod_wool_trousers_1793235506398.jpg',
      '/src/assets/images/cat_garments_1793235464700.jpg'
    ],
    specifications: {
      'Shell': '100% Australian Virgin Wool Flannel (310 GSM)',
      'Lining': '100% Breathable Cupro (Knee-length)',
      'Waistband': 'Extended tab closure with interior horn button & side adjusters',
      'Hem': 'Unfinished 36-inch inseam ready for bespoke tailoring',
      'Care': 'Specialist dry clean only.'
    },
    variants: [
      {
        name: 'Waist Size',
        options: ['30 inch', '32 inch', '34 inch', '36 inch'],
        required: true
      }
    ],
    availability: 'Limited Edition',
    featured: false,
    tags: ['Wool', 'Tailored', 'Trousers']
  },
  {
    id: 'zav-ot-01',
    slug: 'sanctuary-cast-bronze-incense-censer',
    name: 'Sanctuary Cast Bronze Incense Censer',
    category: 'others',
    categoryTitle: 'Others',
    price: 4200,
    shortDescription: 'Heavy tripartite bronze incense burner with hand-pierced geometric lid and dark verdigris patina.',
    fullDescription: 'A contemplative ritual object designed to transform ambient fragrance into visual poetry. Sand-cast in solid bronze with a substantial tripod base, the Sanctuary Censer holds stick, cone, or raw resin incense with equal ease. The vented dome lid is hand-pierced with sacred geometric apertures that disperse fragrant smoke in delicate ascending spirals. Retains natural casting textures and dark oxidation.',
    images: [
      '/src/assets/images/prod_bronze_censer_1793235487351.jpg',
      '/src/assets/images/cat_others_1793235465648.jpg'
    ],
    specifications: {
      'Material': 'Solid Sand-Cast Bronze with natural dark verdigris',
      'Dimensions': 'Height 11 cm · Diameter 12.5 cm',
      'Weight': '1.35 kg',
      'Compatibility': 'Stick incense, charcoal cones, and aromatic resins',
      'Care': 'Empty ash when cool. Clean interior with damp cloth.'
    },
    availability: 'In Stock',
    featured: true,
    tags: ['Bronze', 'Aromatics', 'Ritual Object']
  },
  {
    id: 'zav-ot-02',
    slug: 'deckle-edge-leatherbound-archive-journal',
    name: 'Deckle-Edge Leatherbound Archive Journal',
    category: 'others',
    categoryTitle: 'Others',
    price: 2900,
    shortDescription: 'Hand-bound espresso calfskin journal filled with 200 pages of 180 GSM handmade deckle-edge cotton rag paper.',
    fullDescription: 'Created for keepers of thoughts, architectural sketches, and personal musings. Bound by hand in supple vegetable-tanned espresso calfskin using traditional long-stitch spine binding that allows the book to lay completely flat at 180 degrees. Filled with 200 pages of tree-free, archival cotton rag paper with natural feathered deckle edges. Fountain pen and watercolor friendly with zero bleed-through.',
    images: [
      '/src/assets/images/prod_deckle_journal_1793235506539.jpg',
      '/src/assets/images/cat_others_1793235465648.jpg'
    ],
    specifications: {
      'Cover': 'Full-grain espresso oiled calfskin with wrap strap & brass stud',
      'Paper': '180 GSM 100% recycled cotton rag paper (acid-free)',
      'Page Count': '200 deckle-edge unlined pages (100 leaves)',
      'Dimensions': 'A5 format: 21.5 cm × 15.5 cm × 3.2 cm',
      'Binding': 'Exposed spine kettle-stitch with waxed linen thread'
    },
    variants: [
      {
        name: 'Cover Leather',
        options: ['Espresso Brown', 'Weathered Charcoal']
      }
    ],
    availability: 'In Stock',
    featured: false,
    tags: ['Stationery', 'Leather', 'Deckle Edge']
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getRelatedProducts(currentSlug: string, limit: number = 3): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return PRODUCTS.slice(0, limit);
  
  // Prefer same category, then others
  const sameCategory = PRODUCTS.filter((p) => p.slug !== currentSlug && p.category === current.category);
  const others = PRODUCTS.filter((p) => p.slug !== currentSlug && p.category !== current.category);
  
  return [...sameCategory, ...others].slice(0, limit);
}
