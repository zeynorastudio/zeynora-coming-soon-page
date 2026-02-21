export const FEATURED_PRODUCT = {
  slug: 'crimson-velvet-heritage-set',
  name: 'Crimson Velvet Heritage Set',
  price: 2650,
  currency: '₹',
  inStock: true,
  images: {
    main: 'https://ubwutlzwywrpncnewsyy.supabase.co/storage/v1/object/public/products/products/ZYN-0010/main.png',
    side: 'https://ubwutlzwywrpncnewsyy.supabase.co/storage/v1/object/public/products/products/ZYN-0010/gallery/ZYN-0010-1765098341615-0.png',
    back: 'https://ubwutlzwywrpncnewsyy.supabase.co/storage/v1/object/public/products/products/ZYN-0010/gallery/ZYN-0010-1765098293471-0.png',
  },
  description: `The Crimson Velvet Heritage Set reimagines classic Indian silhouettes with a modern sensibility. Crafted in rich velvet with delicate gold embroidery along the cuffs and borders, this kurta and dupatta set is designed for both occasion wear and everyday elegance.

Each piece is made with intention—thoughtful cuts, premium fabric, and finishes that stand the test of time. The set pairs a long, relaxed kurta with a coordinating dupatta, so you can style it your way.`,
} as const

export type FeaturedProduct = typeof FEATURED_PRODUCT
