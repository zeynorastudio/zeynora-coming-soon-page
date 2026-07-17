'use client'

import { useEffect, useState } from 'react'

/** Launch instant: 18 July 2026, 2:00 PM Asia/Kolkata (IST, UTC+05:30) */
export const LAUNCH_AT_MS = Date.parse('2026-07-18T14:00:00+05:30')

export type TimeRemaining = {
  days: number
  hours: number
  minutes: number
  seconds: number
  isLive: boolean
}

function getTimeRemaining(nowMs: number): TimeRemaining {
  const diff = Math.max(0, LAUNCH_AT_MS - nowMs)

  if (diff === 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true }
  }

  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds, isLive: false }
}

function pad(value: number): string {
  return String(value).padStart(2, '0')
}

type UnitProps = {
  value: number
  label: string
}

function CountdownUnit({ value, label }: UnitProps) {
  return (
    <div
      className="flex flex-col items-center justify-center border border-gold/40 bg-black px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5"
      aria-label={`${value} ${label}`}
    >
      <span className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tabular-nums tracking-tight text-white leading-none">
        {pad(value)}
      </span>
      <span className="mt-3 sm:mt-4 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold/90 font-body">
        {label}
      </span>
    </div>
  )
}

export default function Countdown() {
  const [remaining, setRemaining] = useState<TimeRemaining | null>(null)

  useEffect(() => {
    const tick = () => {
      setRemaining(getTimeRemaining(Date.now()))
    }

    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  // Avoid hydration mismatch: render stable placeholder until mounted
  if (!remaining) {
    return (
      <div
        className="w-full max-w-3xl mx-auto"
        aria-live="polite"
        aria-atomic="true"
        aria-busy="true"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center border border-gold/40 bg-black px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10"
              aria-hidden="true"
            >
              <span className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tabular-nums tracking-tight text-white/40 leading-none">
                --
              </span>
              <span className="mt-3 sm:mt-4 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold/50 font-body">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (remaining.isLive) {
    return (
      <div
        className="w-full max-w-3xl mx-auto text-center animate-luxury-fade"
        role="status"
        aria-live="polite"
      >
        <p className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-gold uppercase">
          We&apos;re Live
        </p>
      </div>
    )
  }

  return (
    <div
      className="w-full max-w-3xl mx-auto"
      role="timer"
      aria-live="polite"
      aria-atomic="true"
      aria-label={`Launching in ${remaining.days} days, ${remaining.hours} hours, ${remaining.minutes} minutes, and ${remaining.seconds} seconds`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        <CountdownUnit value={remaining.days} label="Days" />
        <CountdownUnit value={remaining.hours} label="Hours" />
        <CountdownUnit value={remaining.minutes} label="Minutes" />
        <CountdownUnit value={remaining.seconds} label="Seconds" />
      </div>
    </div>
  )
}
