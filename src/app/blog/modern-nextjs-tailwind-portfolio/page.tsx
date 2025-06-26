import Navigation from '@/components/navigation'
import Link from 'next/link'

export default function ModernPortfolioBlog() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <section className="pt-20 pb-16 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">How to Build a Modern Portfolio with Next.js & Tailwind</h1>
        <div className="text-gray-500 text-sm mb-6">2024-06-17</div>
        <article className="prose dark:prose-invert max-w-none">
          <p>
            Building a modern portfolio website is essential for developers and designers to showcase their work. In this guide, we&apos;ll walk through creating a beautiful, scalable portfolio using <b>Next.js</b> and <b>Tailwind CSS</b>.
          </p>
          <h2>Why Next.js & Tailwind?</h2>
          <ul>
            <li><b>Next.js</b> offers server-side rendering, static site generation, and great developer experience.</li>
            <li><b>Tailwind CSS</b> provides utility-first styling for rapid UI development and easy customization.</li>
          </ul>
          <h2>Step 1: Setup Your Project</h2>
          <ol>
            <li>Run <code>npx create-next-app@latest portfolio</code></li>
            <li>Install Tailwind CSS: <code>npm install -D tailwindcss postcss autoprefixer</code></li>
            <li>Initialize Tailwind: <code>npx tailwindcss init -p</code></li>
            <li>Configure <code>tailwind.config.js</code> and add Tailwind to your CSS.</li>
          </ol>
          <h2>Step 2: Build Your Layout</h2>
          <p>
            Create reusable components for navigation, hero section, projects, and contact. Use Tailwind classes for styling.
          </p>
          <h2>Step 3: Add Projects & Content</h2>
          <p>
            Structure your content using <code>src/app</code> routes. Add markdown or CMS integration for easy updates.
          </p>
          <h2>Step 4: Deploy</h2>
          <p>
            Deploy your site on <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a> for best performance and free SSL.
          </p>
          <h2>Tips</h2>
          <ul>
            <li>Use Tailwind plugins for typography and forms.</li>
            <li>Optimize images with <code>next/image</code>.</li>
            <li>Keep your design clean and focused on your work.</li>
          </ul>
        </article>
        <div className="mt-8">
          <Link href="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
        </div>
      </section>
    </main>
  )
} 