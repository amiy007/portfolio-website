"use client"

import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <HeroSection />
      </main>
  )
}
