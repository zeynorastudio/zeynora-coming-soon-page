'use client'

import { useState } from 'react'
import EarlyAccessModal from '@/components/EarlyAccessModal'
import Countdown from '@/components/Countdown'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <main className="min-h-screen bg-black text-white flex flex-col">
        {/* Luxury launch hero — sole content */}
        <section
          className="relative flex-1 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-20 sm:py-24 md:py-28"
          aria-labelledby="brand-heading"
        >
          {/* Soft warm atmosphere — not a flashy gradient wash */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 40%, #D4AF37 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center animate-luxury-fade">
            <h1
              id="brand-heading"
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.18em] text-white uppercase"
            >
              Zeynora
            </h1>

            <p className="mt-5 sm:mt-6 font-heading text-sm sm:text-base md:text-lg font-light tracking-[0.12em] text-white/70">
              Luxury Pakistani &amp; Indian Fashion
            </p>

            <p className="mt-14 sm:mt-16 md:mt-20 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold">
              Launching In
            </p>

            <div className="mt-6 sm:mt-8 w-full">
              <Countdown />
            </div>

            <p className="mt-12 sm:mt-14 md:mt-16 max-w-md text-sm sm:text-base font-light leading-relaxed text-white/60">
              Be among the first to experience the launch.
            </p>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="mt-8 sm:mt-10 px-10 sm:px-12 py-3.5 sm:py-4 border border-gold text-gold text-sm sm:text-base tracking-[0.2em] uppercase font-body transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-gold hover:text-black hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Notify Me
            </button>
          </div>
        </section>

        {/* Minimal footer */}
        <footer className="relative z-10 py-8 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs tracking-[0.15em] text-white/40 uppercase">
              Zeynora © {new Date().getFullYear()}
            </p>
            <a
              href="https://www.instagram.com/zeynorastudio?igsh=MWd3bzh1eWR2b2NpNg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-gold transition-colors duration-500"
              aria-label="Visit Zeynora on Instagram"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </footer>
      </main>

      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
