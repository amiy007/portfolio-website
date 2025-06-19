"use client"

import Navigation from '@/components/navigation'
import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  UserGroupIcon, 
  RocketLaunchIcon,
  AcademicCapIcon,
  HeartIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const skills = [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Spring Boot', level: 85, category: 'Backend' },
  { name: 'TypeScript', level: 88, category: 'Language' },
  { name: 'Next.js', level: 92, category: 'Framework' },
  { name: 'Python', level: 80, category: 'Language' },
  { name: 'AWS', level: 75, category: 'Cloud' },
  { name: 'Docker', level: 82, category: 'DevOps' },
  { name: 'PostgreSQL', level: 78, category: 'Database' },
]

const values = [
  {
    icon: CodeBracketIcon,
    title: 'Clean Code',
    description: 'Writing maintainable, readable, and efficient code that others can easily understand and build upon.'
  },
  {
    icon: UserGroupIcon,
    title: 'Team Collaboration',
    description: 'Fostering a collaborative environment where knowledge sharing and mutual support drive success.'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Innovation',
    description: 'Constantly exploring new technologies and approaches to solve complex problems creatively.'
  },
  {
    icon: HeartIcon,
    title: 'User-Centric',
    description: 'Always putting the end-user first, ensuring every feature adds real value to their experience.'
  }
]

const examsCracked = [
  'GATE-2024 (CS)',
  'GATE-2024 (DA)',
  'JEE-mains 2016',
  'KVS PGT - CS',
  'UPP SI-2021 & UPP confidential SI (Group B)',
  'SEBI grade A (coding round)',
  'IBPS SO IT officer'
]

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate about technology, innovation, and creating solutions that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Background Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I started my journey in software development with a curiosity about how things work on the web. 
                  What began as simple HTML pages has evolved into a passion for building complex, scalable applications.
                </p>
                <p>
                  Over the years, I&apos;ve had the privilege of working with amazing teams and technologies, 
                  from startups to enterprise solutions. Each project has taught me something new and 
                  reinforced my belief in the power of technology to solve real-world problems.
                </p>
                <p>
                  Today, I focus on full-stack development with a particular interest in React, Spring Boot, 
                  and cloud technologies. I believe in writing clean, maintainable code and creating 
                  user experiences that people love to use.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <AcademicCapIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Computer Science Degree
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <GlobeAltIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Based in India, working globally
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CodeBracketIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    5+ years of experience
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive set of technical skills developed through years of hands-on experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              My Values
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide my work and collaboration approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Government Exams Cracked</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            {examsCracked.map((exam, idx) => (
              <li key={idx}>{exam}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
} 