'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface EarlyAccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!isOpen) {
      setStep(1)
      setEmail('')
      setWhatsapp('')
      setIsSuccess(false)
      setError('')
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      setStep(2)
      setError('')
    } else {
      setError('Please enter a valid email address')
    }
  }

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    setWhatsapp(value)
    setError('')
  }

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!whatsapp || whatsapp.length < 10) {
      setError('Please enter a valid WhatsApp number')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      const { error: insertError } = await supabase
        .from('prelaunch_leads')
        .insert({
          email,
          whatsapp,
          source: 'coming_soon',
        })

      if (insertError) {
        throw insertError
      }

      setIsSuccess(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error('Submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setStep(1)
    setEmail('')
    setWhatsapp('')
    setIsSuccess(false)
    setError('')
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md mx-4 bg-vine-red-light rounded-lg shadow-2xl p-8 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-ivory/70 hover:text-ivory transition-colors text-2xl leading-none"
          aria-label="Close modal"
        >
          ×
        </button>

        {isSuccess ? (
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-2xl font-heading font-semibold text-ivory">
              You&apos;re on the list.
            </h2>
            <p className="text-ivory/90 text-lg">
              We&apos;ll notify you when Zeynora goes live.
            </p>
            <p className="text-ivory/70 text-sm">
              No spam. Only launch updates.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-3xl font-heading font-semibold text-ivory mb-2">
                Get Early Access
              </h2>
              <div className="flex gap-2 mt-4">
                <div
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    step >= 1 ? 'bg-gold' : 'bg-ivory/20'
                  }`}
                />
                <div
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    step >= 2 ? 'bg-gold' : 'bg-ivory/20'
                  }`}
                />
              </div>
            </div>

            {step === 1 ? (
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-ivory/90 mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError('')
                    }}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-ivory/10 border border-ivory/20 rounded-lg text-ivory placeholder-ivory/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    autoFocus
                  />
                </div>
                {error && <p className="text-red-300 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="w-full py-3 border-2 border-gold text-gold rounded-lg hover:bg-gold hover:text-vine-red transition-colors font-medium"
                >
                  Continue
                </button>
              </form>
            ) : (
              <form onSubmit={handleFinalSubmit} className="space-y-6">
                <div>
                  <label htmlFor="whatsapp" className="block text-ivory/90 mb-2 text-sm">
                    WhatsApp Number
                  </label>
                  <input
                    id="whatsapp"
                    type="tel"
                    value={whatsapp}
                    onChange={handleWhatsAppChange}
                    placeholder="10 digit number"
                    required
                    minLength={10}
                    maxLength={15}
                    className="w-full px-4 py-3 bg-ivory/10 border border-ivory/20 rounded-lg text-ivory placeholder-ivory/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    autoFocus
                  />
                </div>
                {error && <p className="text-red-300 text-sm">{error}</p>}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 border border-ivory/30 text-ivory rounded-lg hover:bg-ivory/10 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 border-2 border-gold text-gold rounded-lg hover:bg-gold hover:text-vine-red transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Notify Me at Launch'}
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  )
}

