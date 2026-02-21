'use client'

import { useState } from 'react'
import Link from 'next/link'
import StickyBrandBar from '@/components/StickyBrandBar'
import { FEATURED_PRODUCT } from '@/lib/product-data'

const IMAGES = [
  { key: 'main' as const, url: FEATURED_PRODUCT.images.main },
  { key: 'side' as const, url: FEATURED_PRODUCT.images.side },
  { key: 'back' as const, url: FEATURED_PRODUCT.images.back },
]

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <>
      <StickyBrandBar />
      <main className="min-h-screen pt-16 md:pt-20 bg-[#faf9f7] text-vine-red">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
          {/* Info alert - testing only */}
          <div
            role="status"
            className="mb-6 flex items-start gap-3 px-4 py-3 rounded-lg bg-sky-50 border border-sky-200/80 text-sky-800 font-body text-sm"
          >
            <svg className="w-5 h-5 shrink-0 text-sky-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p>
              This is for testing only. More products are yet to come.
            </p>
          </div>

          {/* Back to Shop - top left */}
          <div className="mb-6 md:mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-vine-red/80 hover:text-vine-red transition-colors font-body"
            >
              <span aria-hidden>←</span>
              Back to Shop
            </Link>
          </div>

          {/* Two-column layout: gallery left, details right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image gallery - first on mobile, left on desktop */}
            <div className="flex flex-col sm:flex-row gap-4 order-1">
              {/* Thumbnails - vertical on desktop, horizontal on mobile */}
              <div className="flex sm:flex-col gap-2 sm:w-20 shrink-0">
                {IMAGES.map((img, i) => (
                  <button
                    key={img.key}
                    type="button"
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-16 h-20 sm:w-full sm:aspect-square flex-shrink-0 rounded overflow-hidden border-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                      selectedImage === i
                        ? 'border-vine-red'
                        : 'border-transparent hover:border-vine-red/40'
                    }`}
                    aria-label={`View ${img.key} angle`}
                  >
                    <img
                      src={img.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              {/* Main image */}
              <div className="flex-1 min-h-[280px] sm:min-h-[320px] lg:min-h-[420px] relative rounded-lg overflow-hidden bg-white/50">
                <img
                  src={IMAGES[selectedImage].url}
                  alt={FEATURED_PRODUCT.name}
                  className="w-full h-full object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Product info - second on mobile, right on desktop */}
            <div className="order-2 space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-light text-vine-red leading-tight">
                {FEATURED_PRODUCT.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xl sm:text-2xl font-body font-medium text-vine-red">
                  {FEATURED_PRODUCT.currency}
                  {FEATURED_PRODUCT.price.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Product description */}
              <section className="pt-4 border-t border-vine-red/10">
                <h2 className="text-sm font-medium uppercase tracking-wider text-vine-red/70 mb-3">
                  Description
                </h2>
                <div className="text-vine-red/90 font-body text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {FEATURED_PRODUCT.description}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
