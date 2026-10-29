/**
 * Central site and business configuration for ZAVYON.
 * 
 * IMPORTANT PRIVACY DIRECTIVE (Rule 06):
 * The WhatsApp phone number configured here must NEVER be printed or rendered as visible text 
 * anywhere on the website (no header, footer, contact page, or tooltips). 
 * Only clickable affordances such as "Order via WhatsApp" or "Enquire about this piece" are shown.
 */

export interface CategoryMeta {
  id: 'home-decor' | 'fashion-accessories' | 'garments' | 'others';
  number: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  curationNote: string;
}

export const SITE_CONFIG = {
  brandName: 'ZAVYON',
  tagline: 'The Art of Discovery',
  welcomeKicker: 'WELCOME TO ZAVYON',
  welcomeHeadline: 'Find Your Kind of Extraordinary.',
  welcomeSubcopy: 'Four distinct worlds. One considered collection.',
  curatedFooterLine: 'CURATED TO BE DISCOVERED',
  
  // Configured WhatsApp destination phone number (international format without '+' or spaces)
  // Edit this single value to redirect all customer orders and enquiries.
  whatsappNumber: '919876543210',
  
  // Configured Instagram URL (can be updated to verified brand handle)
  instagramUrl: 'https://instagram.com/zavyon.official',
  
  // Curated category definitions
  categories: [
    {
      id: 'home-decor',
      number: '01',
      name: 'Home Decor',
      subtitle: 'Objects and details for considered living.',
      description: 'Sculptural ceramics, hand-cast bronze vessels, and tactile limestone accents designed to bring stillness and architectural presence to living spaces.',
      image: '/src/assets/images/cat_home_decor_1793235463113.jpg',
      curationNote: 'Architectural forms & raw tactile materials'
    },
    {
      id: 'fashion-accessories',
      number: '02',
      name: 'Fashion Accessories',
      subtitle: 'Small details. A signature of your own.',
      description: 'Handcrafted vegetable-tanned leather goods, sculpted sterling signets, and timeless brass accoutrements crafted for individual expression.',
      image: '/src/assets/images/cat_fashion_acc_1793235463210.jpg',
      curationNote: 'Heirloom metalwork & hand-burnished leather'
    },
    {
      id: 'garments',
      number: '03',
      name: 'Garments',
      subtitle: 'Personal style, thoughtfully discovered.',
      description: 'Unstructured tailoring, natural raw ecru linen workwear, and fine virgin wool trousers created with quiet confidence and uncompromised drape.',
      image: '/src/assets/images/cat_garments_1793235464700.jpg',
      curationNote: 'Organic weaves & understated silhouettes'
    },
    {
      id: 'others',
      number: '04',
      name: 'Others',
      subtitle: 'Unexpected finds worth discovering.',
      description: 'Artisanal incense vessels, hand-bound cotton-rag journals, and curious lifestyle objects sourced for those who cherish the tactile.',
      image: '/src/assets/images/cat_others_1793235465648.jpg',
      curationNote: 'Rare studio editions & thoughtful artifacts'
    }
  ] as CategoryMeta[]
};

/**
 * Generates the user-initiated WhatsApp link for product enquiry / order.
 * Strictly complies with the requested message template:
 * 
 * Hello ZAVYON, I would like to enquire about this product.
 * 
 * Product: [Actual product name]
 * Category: [Actual category]
 * Price: ₹[Actual price]
 * Quantity: [Selected quantity]
 * Selected options: [Selected size or colour, if applicable]
 * Product link: [Actual canonical product URL]
 * 
 * Please confirm availability, delivery charges, and payment details.
 * 
 * Thank you.
 */
export function buildWhatsAppProductUrl(params: {
  productName: string;
  categoryTitle: string;
  price: number;
  quantity: number;
  optionsText?: string;
  canonicalUrl?: string;
}): string {
  const { productName, categoryTitle, price, quantity, optionsText, canonicalUrl } = params;
  
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://zavyon.com');
  const formattedPrice = price.toLocaleString('en-IN');
  
  const lines = [
    'Hello ZAVYON, I would like to enquire about this product.',
    '',
    `Product: ${productName}`,
    `Category: ${categoryTitle}`,
    `Price: ₹${formattedPrice}`,
    `Quantity: ${quantity}`,
  ];
  
  if (optionsText && optionsText.trim().length > 0) {
    lines.push(`Selected options: ${optionsText.trim()}`);
  }
  
  lines.push(`Product link: ${currentUrl}`);
  lines.push('');
  lines.push('Please confirm availability, delivery charges, and payment details.');
  lines.push('');
  lines.push('Thank you.');
  
  const message = lines.join('\n');
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * General customer enquiry link for contact and footer
 */
export function buildWhatsAppGeneralEnquiryUrl(context: string = 'general'): string {
  const message = `Hello ZAVYON, I would like to enquire about your curated collections (${context}).\n\nPlease let me know how to proceed.\n\nThank you.`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
