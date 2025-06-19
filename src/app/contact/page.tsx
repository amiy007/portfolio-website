import Navigation from '@/components/navigation'

export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <section className="pt-20 pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
          <form className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input type="email" className="w-full p-2 border rounded" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea className="w-full p-2 border rounded" rows={5} placeholder="Your message..." />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Send Message</button>
          </form>
          <div className="mt-10 text-center space-y-2">
            <div>Email: <a href="mailto:uk08109@gmail.com.com" className="text-blue-600">amit@example.com</a></div>
            <div>LinkedIn: <a href="https://www.linkedin.com/in/amit-yadav-a70675133/" className="text-blue-600">linkedin.com/in/amit-yadav-a70675133</a></div>
            <div>GitHub: <a href="https://github.com/amiy007" className="text-blue-600">github.com/amitkumar21</a></div>
            <div>Twitter: <a href="https://twitter.com/amitkumar21" className="text-blue-600">@amitkumar21</a></div>
          </div>
        </div>
      </section>
    </main>
  )
} 