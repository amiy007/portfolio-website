import Navigation from '@/components/navigation'
import Link from 'next/link'

const posts = [
  {
    title: 'Safeguarding Users in Cyberspace: The Information Technology Act, 2000',
    date: '2024-06-17',
    summary: 'Overview of the IT Act, 2000 and the most reported cybercrimes in India, including legal provisions and penalties.',
    slug: 'it-act-cybercrimes'
  },
  {
    title: 'How to Build a Modern Portfolio with Next.js & Tailwind',
    date: '2024-06-17',
    summary: 'A step-by-step guide to creating a scalable, beautiful portfolio using the latest web technologies.',
    slug: 'modern-nextjs-tailwind-portfolio'
  },
  {
    title: 'Top 10 Fintech Trends in 2024',
    date: '2024-05-10',
    summary: 'Explore the most important trends shaping the future of fintech, from AI to blockchain.',
    slug: 'fintech-trends-2024'
  },
  {
    title: 'Cybersecurity for Modern Businesses',
    date: '2024-04-22',
    summary: 'Best practices and tools to keep your business safe in the digital age.',
    slug: 'cybersecurity-modern-businesses'
  }
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <section className="pt-20 pb-16 max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Blog</h1>
          {/* <Link href="/blog/new" className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition">File a Blog</Link>  */}
        </div>
        <div className="space-y-8">
          {posts.map(post => (
            <div key={post.slug} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow card-hover">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <div className="text-gray-500 text-sm mb-2">{post.date}</div>
              <p className="mb-2 text-gray-700 dark:text-gray-300">{post.summary}</p>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">Read more</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
} 