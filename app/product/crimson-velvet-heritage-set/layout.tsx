import type { Metadata } from 'next'
import { FEATURED_PRODUCT } from '@/lib/product-data'

export const metadata: Metadata = {
  title: `${FEATURED_PRODUCT.name} — Zeynora`,
  description: FEATURED_PRODUCT.description.slice(0, 160) + '…',
  openGraph: {
    title: `${FEATURED_PRODUCT.name} — Zeynora`,
    images: [FEATURED_PRODUCT.images.main],
  },
}

export default function ProductLayout({
  children,
}: { children: React.ReactNode }) {
  return children
}
