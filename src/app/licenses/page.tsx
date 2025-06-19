'use client'
import Navigation from '@/components/navigation'
import { useState } from 'react'

const initialCerts = [
  {
    name: 'Java Profiling',
    issuer: 'LinkedIn',
    date: 'Jun 2025',
    skills: 'Java',
    url: '',
    media: ''
  },
  {
    name: 'Creating AI-Generated Videos with Sora',
    issuer: 'LinkedIn',
    date: 'May 2025',
    skills: 'Video Production, Generative AI Tools',
    url: '',
    media: ''
  },
  // ... (add all other certifications as in the previous list)
]

export default function LicensesPage() {
  const [certs, setCerts] = useState(initialCerts)

  function handleChange(idx: number, field: string, value: string) {
    setCerts(certs => certs.map((c, i) => i === idx ? { ...c, [field]: value } : c))
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <section className="pt-20 pb-16 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Licenses & Certifications</h1>
        <div className="space-y-8">
          {certs.map((cert, idx) => (
            <div key={cert.name + idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow card-hover">
              <h2 className="text-2xl font-semibold mb-2">{cert.name}</h2>
              <div className="text-gray-500 text-sm mb-2">{cert.issuer} &middot; {cert.date}</div>
              <div className="mb-2 text-gray-700 dark:text-gray-300">{cert.skills}</div>
              <div className="mb-2">
                <label className="block font-semibold mb-1">URL (optional):</label>
                <input type="url" value={cert.url} onChange={e => handleChange(idx, 'url', e.target.value)} className="w-full p-2 border rounded" placeholder="https://..." />
              </div>
              <div>
                <label className="block font-semibold mb-1">Media (optional):</label>
                <input type="file" onChange={e => handleChange(idx, 'media', e.target.value)} className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
} 