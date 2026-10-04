// Business details shown across the site.
export const business = {
  name: 'Global Samaax Food Ventures',
  shortName: 'Samaax Foods',
  tagline: 'Natural foods & drinks, made for healthy living.',
  city: 'Lagos, Nigeria',
  email: 'samax4foods@gmail.com',
  phone: '+234 803 238 5949',
  whatsapp: '2348032385949', // digits only, for wa.me links
  facebook: 'https://www.facebook.com/SamaxFoods/',
}

export const phoneLink = `tel:+${business.whatsapp}`

const whatsappGreeting = "Hello Samaax Foods! I'd like to place an order."
export const whatsappLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(whatsappGreeting)}`

// Used only if the API is unreachable, so the page never renders empty.
// The source of truth lives in backend/app/data.py.
export const fallbackProducts = [
  {
    id: 1,
    name: 'Classic Tiger Nut Drink',
    description: 'Smooth, naturally sweet and creamy. Freshly pressed from premium tiger nuts.',
    size: '500ml',
    price: null,
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'Tiger Nut, Dates & Coconut',
    description: 'Our classic blend enriched with dates and coconut for extra richness, no refined sugar.',
    size: '500ml',
    price: null,
    tag: null,
  },
  {
    id: 3,
    name: 'Tiger Nut & Ginger',
    description: 'A warming kick of ginger in every sip. Great for digestion.',
    size: '500ml',
    price: null,
    tag: 'New',
  },
  {
    id: 4,
    name: 'Party & Event Packs',
    description: 'Bulk orders for weddings, birthdays, offices and events across Lagos.',
    size: 'Bulk',
    price: null,
    tag: null,
  },
]
