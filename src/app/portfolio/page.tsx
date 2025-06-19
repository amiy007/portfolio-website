import Navigation from '@/components/navigation'

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <section className="pt-20 pb-16 max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Portfolio projects will be added soon. Stay tuned!
        </p>
      </section>
    </main>
  )
} 