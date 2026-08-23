'use client'

import { Calendar, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react'
import { useState } from 'react'

type EducationItem = {
  id: string
  title: string
  institution: string
  date: string
  description: string
  tags: string[]
}

const ITEMS: EducationItem[] = [
  {
    id: 'bit',
    title: 'Bachelor of Information Technology (BIT)',
    institution: 'Sri Lankan Institute of Information Technology',
    date: '2010 – 2013',
    description:
      'Completed a Bachelor of Information Technology focused on software development, programming fundamentals, databases, and building practical IT solutions for real-world business needs.',
    tags: ['Education', 'Degree'],
  },
  {
    id: 'php',
    title: 'Web Development using PHP/MySQL',
    institution: 'Sri Lanka Institute of Information Technology',
    date: '2016',
    description:
      'Hands-on certification covering server-side web development with PHP and MySQL, including dynamic pages, database integration, and practical application building.',
    tags: ['Certification', 'Web Development'],
  },
  {
    id: 'diploma',
    title: 'Diploma in Computer Studies',
    institution: 'Tertiary and Vocational Education Commission of Sri Lanka',
    date: '2004',
    description:
      'Foundational computer studies diploma covering core computing concepts, office applications, and the fundamentals that launched a career in UI and front-end development.',
    tags: ['Education', 'Diploma'],
  },
]

export default function EducationCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = ITEMS.length

  const goTo = (index: number) => {
    const next = ((index % total) + total) % total
    setActiveIndex(next)
  }

  const getOffset = (index: number) => {
    let offset = index - activeIndex
    if (offset > total / 2) offset -= total
    if (offset < -total / 2) offset += total
    return offset
  }

  return (
    <section className="relative overflow-hidden py-20 px-4" id="education">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-[#070b18] to-dark-900" />

      <div className="relative z-10 mx-auto max-w-6xl">

        <h2 className="mb-10 text-center text-4xl font-bold md:text-5xl">
          Education & <span className="text-gradient">Certifications</span>
        </h2>

        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-400">
              <GraduationCap className="h-4 w-4" />
              Education
            </div>
            <h3 className="text-xl font-bold">Education timeline</h3>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-500/30 bg-dark-800 text-blue-300 shadow-lg shadow-blue-500/10 transition-all hover:border-blue-400 hover:bg-blue-600/20"
              aria-label="Previous education card"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-500/30 bg-dark-800 text-blue-300 shadow-lg shadow-blue-500/10 transition-all hover:border-blue-400 hover:bg-blue-600/20"
              aria-label="Next education card"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative mx-auto h-[340px] max-w-4xl [perspective:1200px] sm:h-[320px]">
          {ITEMS.map((item, index) => {
            const offset = getOffset(index)
            const isActive = offset === 0
            const isVisible = Math.abs(offset) <= 1

            return (
              <article
                key={item.id}
                className="absolute left-1/2 top-0 w-[min(100%,480px)] -translate-x-1/2 rounded-2xl border p-6 transition-all duration-500 ease-out"
                style={{
                  opacity: isVisible ? (isActive ? 1 : 0.45) : 0,
                  zIndex: isActive ? 20 : 10 - Math.abs(offset),
                  transform: `
                    translateX(calc(-50% + ${offset * 70}%))
                    scale(${isActive ? 1 : 0.86})
                    rotateY(${offset * -12}deg)
                    translateZ(${isActive ? 0 : -60}px)
                  `,
                  filter: isActive ? 'none' : 'blur(1.5px)',
                  pointerEvents: isActive ? 'auto' : 'none',
                  background: isActive
                    ? 'linear-gradient(160deg, rgba(26,31,53,0.95), rgba(15,20,32,0.98))'
                    : 'rgba(15,20,32,0.85)',
                  borderColor: isActive ? 'rgba(59,130,246,0.35)' : 'rgba(55,65,81,0.5)',
                  boxShadow: isActive
                    ? '0 0 40px rgba(59,130,246,0.18), 0 20px 40px rgba(0,0,0,0.35)'
                    : 'none',
                }}
              >
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-600/20">
                    <GraduationCap className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-bold leading-snug md:text-xl">{item.title}</h4>
                    <p className="mt-1 text-sm text-blue-400">{item.institution}</p>
                  </div>
                </div>

                <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-blue-500/20 bg-blue-600/10 px-3 py-1.5 text-sm text-gray-300">
                  <Calendar className="h-3.5 w-3.5 text-blue-400" />
                  {item.date}
                </div>

                <p className="mb-6 text-sm leading-relaxed text-gray-400">{item.description}</p>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-blue-500/30 px-3 py-1 text-xs text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold text-gray-300">
                      {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                    {' – '}
                    {item.institution.split(' ').slice(0, 3).join(' ')}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {ITEMS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? 'w-7 bg-blue-500' : 'w-2.5 bg-dark-700 hover:bg-blue-500/40'
              }`}
              aria-label={`Go to ${item.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
