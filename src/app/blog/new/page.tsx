'use client'
import Navigation from '@/components/navigation'
import { useState } from 'react'

export default function NewBlogPost() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    title: '',
    date: '',
    summary: '',
    content: ''
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    // In a real app, you'd POST to an API or save to a CMS here
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <section className="pt-20 pb-16 max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">New Blog Post</h1>
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-4 rounded text-center mb-6">
            Blog post submitted! (In a real app, this would be saved and appear in the blog list.)
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div>
              <label className="block mb-2 font-semibold">Title</label>
              <input name="title" value={form.title} onChange={handleChange} required className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Date</label>
              <input name="date" type="date" value={form.date} onChange={handleChange} required className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Summary</label>
              <input name="summary" value={form.summary} onChange={handleChange} required className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Content</label>
              <textarea name="content" value={form.content} onChange={handleChange} required rows={6} className="w-full p-2 border rounded" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Submit</button>
          </form>
        )}
      </section>
    </main>
  )
} 