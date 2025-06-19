import Navigation from '@/components/navigation'
import Link from 'next/link'

export default function ITActCybercrimesBlog() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <section className="pt-20 pb-16 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Safeguarding Users in Cyberspace: The Information Technology Act, 2000</h1>
        <article className="prose dark:prose-invert">
          <p>
            The Information Technology Act, 2000 (“IT Act”) and rules made thereunder contain several provisions for safeguarding users in the cyberspace.
          </p>
          <p>
            The IT Act penalises various cybercrimes relating to computer resources, including dishonestly or fraudulently accessing a computer resource without the permission of its owner (commonly referred to as hacking, section 66), identity theft (section 66C), cheating by impersonation (section 66D), violation of bodily privacy (section 66E), transmitting of obscene material (section 67), and publishing or transmission of material containing sexually explicit act in electronic form (section 67A and 67B) and tampering with computer source documents (section 65), etc.
          </p>
          <p>
            Each such cybercrime is punishable with imprisonment for a period that may extend to either three years or five years, and as per section 77B of the IT Act such cybercrimes are cognizable offences.
          </p>
          <p>
            These cybercrimes are in addition to various cognizable offences punishable under the Indian Penal Code, 1860, such as the cognizable offence of stalking using electronic communication (section 354D).
          </p>
          <h2>Most Reported Cybercrimes</h2>
          <ul>
            <li>
              <strong>Cyber blackmailing or threatening</strong> <br />
              {`{sections 506, 503 and 384 of the Indian Penal Code, 1860 (IPC), read with the Information Technology Act, 2000 (IT Act)}`}
            </li>
            <li>
              <strong>Cyber pornography or hosting or publishing obscene sexual materials</strong> <br />
              {`{sections 67A or 67B (girl child) of the IT Act, read with other IPC or special and local laws (SLL)}`}
            </li>
            <li>
              <strong>Cyber stalking or cyber bullying of women</strong> <br />
              {`(section 354D of IPC), read with the IT Act`}
            </li>
            <li>
              <strong>Defamation or morphing</strong> <br />
              {`{section 469 of IPC, read with IPC and the Indecent Representation of Women (Prohibition) Act, 1986}`}
            </li>
            <li>
              <strong>Fake profile</strong> <br />
              {`(read with IPC/SLL)`}
            </li>
          </ul>
          <p>
            <strong>References:</strong><br />
            Institute of Public Policy, NLSIU<br />
            National Law University, Jodhpur
          </p>
        </article>
        <div className="mt-8">
          <Link href="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
        </div>
      </section>
    </main>
  )
} 