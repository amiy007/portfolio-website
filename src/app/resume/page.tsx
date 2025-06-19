"use client"

import Navigation from '@/components/navigation'
import { motion } from 'framer-motion'
import { 
  CalendarIcon, 
  MapPinIcon, 
  BuildingOfficeIcon,
  AcademicCapIcon,
  DocumentArrowDownIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const experience = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'Remote',
    period: 'Jan 2022 - Present',
    description: 'Leading development of enterprise-level web applications and mentoring junior developers.',
    achievements: [
      'Led a team of 5 developers in building a scalable e-commerce platform',
      'Improved application performance by 40% through optimization techniques',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored 3 junior developers and conducted code reviews'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL']
  },
  {
    title: 'Full Stack Developer',
    company: 'InnovateTech',
    location: 'Bangalore, India',
    period: 'Mar 2020 - Dec 2021',
    description: 'Built and maintained multiple client projects using modern web technologies.',
    achievements: [
      'Developed 10+ client projects with 100% client satisfaction',
      'Reduced bug reports by 50% through improved testing practices',
      'Implemented responsive design principles across all projects',
      'Collaborated with UX/UI designers to improve user experience'
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'Redux', 'Jest', 'Git']
  },
  {
    title: 'Frontend Developer',
    company: 'WebSolutions Inc',
    location: 'Mumbai, India',
    period: 'Jun 2018 - Feb 2020',
    description: 'Developed responsive user interfaces and improved user experience.',
    achievements: [
      'Built 15+ responsive websites and web applications',
      'Optimized website loading speed by 35%',
      'Implemented accessibility features for better user experience',
      'Worked closely with backend developers for API integration'
    ],
    technologies: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Sass', 'Webpack']
  }
]

const education = [
  {
    degree: 'Master of Business Administration (MBA)',
    institution: 'School of Management and Entrepreneurship, IIT Jodhpur',
    specialization: 'Fintech and Cybersecurity',
    period: 'Aug 2023 – Aug 2025',
    skills: [
      'Marketing', 'Blockchain for Business', 'Macroeconomics', 'Human Resources (HR)',
      'Managing Digital Enterprises', 'Operations Research', 'Organizational Behavior',
      'Cybersecurity', 'Equity Derivatives', 'Cyber Threats and Defense',
      'Management of Banks and Financial Institutions', 'Corporate Finance',
      'Entrepreneurship', 'Financial Accounting', 'Financial Reporting',
      'Cost Management', 'AI in Fintech'
    ]
  },
  {
    degree: 'Master of Public Administration (MPA)',
    institution: 'Indira Gandhi National Open University (IGNOU)',
    specialization: 'Public Administration',
    period: 'Jan 2023 – Dec 2024',
    skills: [
      'Public Policy', 'e-Governance', 'Public-Private Partnerships', 'HR',
      'Administrative Theory', 'Disaster Management',
      'Indian Democracy and Development', 'Strategic Planning'
    ],
    grade: 'First Division'
  },
  {
    degree: 'Post Graduate Diploma in Cyber Law and Cyber Forensics (PGD-CLCF)',
    institution: 'National Law School of India University',
    period: 'Jul 2022 – Jul 2023',
    courses: [
      'Intro to Law & Legal Systems', 'Cyber Technology', 'Cyber Wrongs & Laws',
      'IT Act 2000', 'Law of Cyber Crimes & Cyber Forensics',
      'Intermediary Rules', 'Contract Law', 'Legal Aspects of Cyberspace',
      'Intellectual Property Rights'
    ],
    skills: [
      'IT Act', 'Intermediary Regulation', 'Digital Forensics', 'Court Case Analysis', 'Digital Signatures'
    ],
    grade: 'A'
  },
  {
    degree: 'Bachelor of Technology (BTech)',
    institution: 'DIT University',
    specialization: 'Computer Engineering',
    period: '2016 – 2020',
    skills: [
      'Data Structures', 'Data Science', 'Machine Learning', 'Computer Networks',
      'Operating Systems', 'Computer Architecture'
    ],
    grade: '8.33 CGPA'
  },
  {
    degree: 'Intermediate (Science)',
    institution: 'Central Board of Secondary Education (CBSE)',
    period: '2014 – 2015',
    grade: '86.6%'
  }
]

const certifications = [
  {
    name: 'AWS Certified Developer Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-123456'
  },
  {
    name: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2022',
    credentialId: 'MDB-789012'
  },
  {
    name: 'React Developer Certification',
    issuer: 'Meta',
    date: '2021',
    credentialId: 'META-345678'
  }
]

const skills = {
  'Frontend Development': ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'],
  'Backend Development': ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'GraphQL'],
  'Database & Cloud': ['PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Redis'],
  'Tools & Others': ['Git', 'GitHub', 'Jest', 'Cypress', 'Webpack', 'Vite', 'Figma']
}

export default function Resume() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Resume
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                My professional journey and expertise
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
                Download PDF
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Professional Experience
              </h2>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                    
                    <div className="relative pl-16">
                      {/* Timeline dot */}
                      <div className="absolute left-4 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                      
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {job.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mt-1">
                              <div className="flex items-center">
                                <BuildingOfficeIcon className="w-4 h-4 mr-1" />
                                {job.company}
                              </div>
                              <div className="flex items-center">
                                <MapPinIcon className="w-4 h-4 mr-1" />
                                {job.location}
                              </div>
                              <div className="flex items-center">
                                <CalendarIcon className="w-4 h-4 mr-1" />
                                {job.period}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {job.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {job.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <StarIcon className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mt-1">
                          <div className="flex items-center">
                            <AcademicCapIcon className="w-4 h-4 mr-1" />
                            {edu.institution}
                          </div>
                          <div className="flex items-center">
                            <MapPinIcon className="w-4 h-4 mr-1" />
                            {edu.specialization}
                          </div>
                          <div className="flex items-center">
                            <CalendarIcon className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          Grade: {edu.grade}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Skills:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <motion.section
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Skills
              </h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Certifications */}
            <motion.section
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                      {cert.date} • {cert.credentialId}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </main>
  )
} 