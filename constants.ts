import { Sweet } from './types';

// WhatsApp Phone Number (International format without +)
export const WHATSAPP_NUMBER = "919876543210"; 

// THE SWEET CATALOG
// Edit this list to update products, prices, and images.
export const SWEET_CATALOG: Sweet[] = [
  {
    id: 1,
    name: 'Gulab Jamun',
    price: 600,
    unit: 'kg',
    image: 'https://picsum.photos/seed/gulab/400/400',
    description: 'Soft, spongy milk-solid balls soaked in rose-scented sugar syrup.',
    tag: 'Bestseller'
  },
  {
    id: 2,
    name: 'Kaju Katli',
    price: 950,
    unit: 'kg',
    image: 'https://picsum.photos/seed/kaju/400/400',
    description: 'Diamond-shaped cashew fudge, topped with edible silver leaf.',
    tag: 'Premium'
  },
  {
    id: 3,
    name: 'Motichoor Ladoo',
    price: 450,
    unit: 'kg',
    image: 'https://picsum.photos/seed/ladoo/400/400',
    description: 'Melt-in-the-mouth ladoos made from tiny chickpea flour pearls.',
  },
  {
    id: 4,
    name: 'Rasgulla',
    price: 550,
    unit: 'kg',
    image: 'https://picsum.photos/seed/rasgulla/400/400',
    description: 'Spongy cottage cheese dumplings cooked in light sugar syrup.',
  },
  {
    id: 5,
    name: 'Mysore Pak',
    price: 700,
    unit: 'kg',
    image: 'https://picsum.photos/seed/mysore/400/400',
    description: 'A rich sweet dish prepared in ghee, from Southern India.',
    tag: 'Traditional'
  },
  {
    id: 6,
    name: 'Jalebi',
    price: 400,
    unit: 'kg',
    image: 'https://picsum.photos/seed/jalebi/400/400',
    description: 'Crispy, orange coils of deep-fried batter soaked in syrup.',
  },
  {
    id: 7,
    name: 'Soan Papdi',
    price: 350,
    unit: 'kg',
    image: 'https://picsum.photos/seed/soan/400/400',
    description: 'Cube-shaped crispy and flaky sweet made with gram flour.',
  },
  {
    id: 8,
    name: 'Peda',
    price: 500,
    unit: 'kg',
    image: 'https://picsum.photos/seed/peda/400/400',
    description: 'Semi-soft sweet made from khoa, sugar and traditional flavorings.',
  }
];
