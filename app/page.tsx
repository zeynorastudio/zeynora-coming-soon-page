'use client'

import { useState } from 'react'
import EarlyAccessModal from '@/components/EarlyAccessModal'
import StickyBrandBar from '@/components/StickyBrandBar'

const HERO_DESKTOP = 'https://oanzsagekfpoenbkobgc.supabase.co/storage/v1/object/public/hero_images/desktop%20hero.png'
const HERO_MOBILE = 'https://oanzsagekfpoenbkobgc.supabase.co/storage/v1/object/public/hero_images/mobile%20hero%20(1).png'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <StickyBrandBar />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Background with vertical gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-vine-red via-vine-red-light to-vine-red" />
          
          {/* Grain texture - unified across entire hero section */}
          <div className="absolute inset-0 grain-texture" />
          
          {/* Vignette - Desktop only */}
          <div className="hidden md:block absolute inset-0" 
               style={{
                 background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.1) 100%)'
               }} />
          
          {/* Bronze radial glow behind text - Desktop only */}
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bronze rounded-full opacity-5 blur-3xl -translate-x-1/4" />

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-[45%_55%] w-full h-screen relative z-10 min-h-screen">
            {/* Left: Text Content (45%) */}
            <div className="flex flex-col justify-center px-12 lg:px-20 xl:px-32 space-y-6 relative z-10">
              <div className="space-y-5">
                <p className="text-xs lg:text-sm text-ivory/70 font-light tracking-[0.2em] uppercase">
                  A new fashion house is arriving
                </p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-light text-ivory leading-[1.1]">
                  Crafted slowly.<br />
                  Worn beautifully.
                </h1>
                <p className="text-base lg:text-lg text-ivory/75 font-light leading-relaxed max-w-lg">
                  Zeynora launches soon — a curated expression of modern Indian fashion.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="self-start px-8 py-4 border-2 border-gold text-gold rounded-lg hover:bg-gold hover:text-vine-red transition-all duration-300 font-medium text-lg"
              >
                Get Early Access
              </button>
            </div>

            {/* Right: Hero Image (55%) */}
            <div className="relative h-full film-grain">
              {/* Warm tint overlay */}
              <div className="absolute inset-0 bg-bronze/5 z-10 pointer-events-none" />
              
              {/* Soft shadow at left edge for depth */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-24 z-[15] pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgba(139, 74, 92, 0.15) 0%, rgba(139, 74, 92, 0.08) 30%, transparent 60%)',
                  filter: 'blur(8px)',
                }}
              />
              
              {/* Vine red color bleed overlay - left to right gradient */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1/2 z-20 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgba(139, 74, 92, 0.2) 0%, rgba(139, 74, 92, 0.12) 25%, rgba(139, 74, 92, 0.06) 40%, transparent 50%)',
                }}
              />
              
              <picture>
                <source media="(min-width: 768px)" srcSet={HERO_DESKTOP} />
                <img
                  src={HERO_DESKTOP}
                  alt="Zeynora Fashion"
                  className="w-full h-full object-cover object-right relative z-0"
                  style={{
                    filter: 'sepia(5%) saturate(110%)',
                  }}
                />
              </picture>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden w-full flex flex-col relative z-10 min-h-screen">
            {/* 1. Hero Image First */}
            <div className="w-full aspect-[4/5] relative film-grain overflow-hidden">
              {/* Warm tint overlay */}
              <div className="absolute inset-0 bg-bronze/5 z-10 pointer-events-none" />
              
              {/* Soft shadow at bottom edge for depth */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-16 z-[15] pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(139, 74, 92, 0.12) 0%, rgba(139, 74, 92, 0.06) 40%, transparent 70%)',
                  filter: 'blur(6px)',
                }}
              />
              
              <img
                src={HERO_MOBILE}
                alt="Zeynora Fashion"
                className="w-full h-full object-cover object-center relative z-0"
                style={{
                  filter: 'sepia(5%) saturate(110%)',
                }}
              />
            </div>

            {/* 2. Hero Text Below Image */}
            <div className="w-full px-6 sm:px-8 py-10 sm:py-12 bg-gradient-to-b from-vine-red via-vine-red-light to-vine-red relative">
              <div className="absolute inset-0 grain-texture" />
              <div className="max-w-lg mx-auto space-y-5 relative z-10">
                <p className="text-[10px] sm:text-xs text-ivory/70 font-light tracking-[0.15em] uppercase text-center sm:text-left">
                  A new fashion house is arriving
                </p>
                <h1 className="text-2xl sm:text-3xl font-heading font-light text-ivory leading-[1.15] text-center sm:text-left">
                  Crafted slowly.<br />
                  Worn beautifully.
                </h1>
                <p className="text-sm sm:text-base text-ivory/75 font-light leading-relaxed text-center sm:text-left">
                  Zeynora launches soon — a curated expression of modern Indian fashion.
                </p>
              </div>
            </div>

            {/* 3. CTA Button */}
            <div className="w-full px-6 sm:px-8 pb-12 bg-gradient-to-b from-vine-red-light to-vine-red relative">
              <div className="max-w-lg mx-auto relative z-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full px-8 py-4 border-2 border-gold text-gold rounded-lg hover:bg-gold hover:text-vine-red transition-all duration-300 font-medium text-base sm:text-lg"
                >
                  Get Early Access
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Statement */}
        <section className="py-32 md:py-40 px-8 md:px-12 lg:px-20 xl:px-32 bg-vine-red-light/20">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl text-ivory/85 font-light leading-relaxed text-center font-heading">
              Collections shaped by intention, not algorithms.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 md:py-10 px-8 md:px-12 lg:px-20 xl:px-32 bg-vine-red border-t border-ivory/10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-1.5">
              <h2 className="text-2xl font-heading font-semibold text-ivory">
                Zeynora
              </h2>
              <p className="text-sm text-ivory/70">
                Zeynora © {new Date().getFullYear()}
              </p>
              <p className="text-sm text-ivory/70 uppercase tracking-wide">
                Launching Soon
              </p>
              <p className="text-xs text-ivory/30 mt-2">
                Designed and developed by Foundryly
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/zeynorastudio?igsh=MWd3bzh1eWR2b2NpNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/60 hover:text-ivory/80 transition-opacity duration-300"
                aria-label="Visit Zeynora on Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </main>

      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

