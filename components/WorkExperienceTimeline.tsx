'use client'

import { Briefcase, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

type Experience = {
  id: string
  role: string
  company: string
  shortDate: string
  fullDate: string
  current?: boolean
  description: string
  tech: string[]
}

const EXPERIENCES: Experience[] = [
  {
    id: 'apig',
    role: 'Senior Front-End Developer',
    company: 'APIG Pvt Ltd',
    shortDate: '2025 May',
    fullDate: 'May 2025 – Present',
    current: true,
    description:
      'Develop and maintain responsive web applications using Next.js, Shadcn UI, TypeScript, and Tailwind CSS. Contribute to Apigenie (WMS, carriers, eCommerce) and Wildwood inventory management, with a focus on performance and codebase optimization.',
    tech: ['Next.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS', 'React'],
  },
  {
    id: 'talph',
    role: 'Senior Front-End Developer',
    company: 'Talphsolutions Pvt Ltd',
    shortDate: '2024 Jul',
    fullDate: 'Jul 2024 – May 2025',
    description:
      'Built responsive web apps with Next.js, Material-UI, and Tailwind CSS. Worked on Medispec (UK hospital appointment system) and enhanced CityHire (Umbraco + JavaScript) UI/UX in an Agile squad with global stakeholders.',
    tech: ['Next.js', 'Material UI', 'Tailwind CSS', 'Umbraco', 'JavaScript'],
  },
  {
    id: 'codehouse',
    role: 'Senior Front-End Developer',
    company: 'Codehouse Pvt Ltd',
    shortDate: '2024 Jan',
    fullDate: 'Jan 2024 – Jul 2024',
    description:
      'Created and optimized Sitecore CMS components for performance and reusability. Delivered an urgent launch on a tight timeline and improved scripts and CSS for better runtime performance.',
    tech: ['Sitecore', 'React', 'JavaScript', 'SCSS', 'CMS'],
  },
  {
    id: 'sana',
    role: 'Associated Tech Lead',
    company: 'Sana Commerce Pvt Ltd',
    shortDate: '2018 Nov',
    fullDate: 'Nov 2018 – Nov 2023',
    description:
      'Led a team of 3 front-end developers and drove a 40% increase in project customizations. Managed B2B/B2C e-commerce customizations across USA, Europe, and Australia, and helped secure two major customers.',
    tech: ['E-commerce', 'JavaScript', 'HTML5', 'CSS3', 'Team Lead'],
  },
  {
    id: 'easybooking',
    role: 'Senior Front-End Developer',
    company: 'EasyBooking Pvt Ltd',
    shortDate: '2015 Nov',
    fullDate: 'Nov 2015 – Nov 2018',
    description:
      'Led web and mobile application development, delivering innovative digital products and solutions that helped businesses navigate complex markets.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Mobile Web', 'UI'],
  },
  {
    id: '3prg',
    role: 'Front-End Developer',
    company: '3PRG Pvt Ltd',
    shortDate: '2014 Nov',
    fullDate: 'Nov 2014 – Nov 2015',
    description:
      'Oversaw development and delivery of effective user interfaces for client websites, presenting complex information in a clear and compelling way.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'UI Design'],
  },
  {
    id: 'victory',
    role: 'UI Engineer',
    company: 'Victory Information (Pvt) Ltd',
    shortDate: '2013 Mar',
    fullDate: 'Mar 2013 – Oct 2014',
    description:
      'Contributed as a UI Engineer at a leading Sri Lankan software company, collaborating with developers, designers, QA engineers, and marketers.',
    tech: ['UI Engineering', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'ranomark',
    role: 'Training UI Engineer / UI Engineer',
    company: 'Ranomark International (Pvt) Ltd',
    shortDate: '2011 Aug',
    fullDate: 'Aug 2011 – Mar 2013',
    description:
      'Progressed from trainee UI Designer to UI Engineer at a Total IT solutions company, supporting businesses of all sizes with successful web solutions.',
    tech: ['UI Design', 'HTML', 'CSS', 'Web Solutions'],
  },
]

export default function WorkExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = EXPERIENCES[activeIndex]
  const total = EXPERIENCES.length

  const goTo = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(total - 1, index)))
  }

  return (
    <section className="relative overflow-hidden py-20 px-4" id="experience">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/40 to-dark-900" />

      <div className="relative z-10 mx-auto max-w-6xl">
 
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="mb-4 overflow-x-auto pb-4">
          <div className="relative mx-auto min-w-[720px] px-4 pt-2 md:min-w-0">
            <div className="absolute left-8 right-8 top-[22px] h-px bg-dark-700 md:left-12 md:right-12" />
            <div className="relative flex justify-between gap-2">
              {EXPERIENCES.map((item, index) => {
                const isActive = index === activeIndex
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(index)}
                    className="group flex w-full max-w-[110px] flex-col items-center text-center"
                    aria-label={`${item.company} – ${item.shortDate}`}
                  >
                    <span
                      className={`relative z-10 mb-3 flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
                        isActive
                          ? 'border-blue-400 bg-blue-600 text-white shadow-lg shadow-blue-500/40'
                          : 'border-dark-700 bg-dark-800 text-gray-400 group-hover:border-blue-500/50 group-hover:text-blue-300'
                      }`}
                    >
                      {isActive ? <Briefcase className="h-4 w-4" /> : <span className="text-sm font-semibold">{index + 1}</span>}
                    </span>
                    <span className={`text-xs font-medium ${isActive ? 'text-blue-400' : 'text-gray-500'}`}>
                      {item.shortDate}
                    </span>
                    <span className={`mt-1 line-clamp-2 text-[11px] leading-tight ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.company}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <p className="mb-8 text-center text-sm text-gray-500">
          Click any step above to navigate through roles.
        </p>

        <div className="card-glass relative overflow-hidden rounded-2xl border-blue-500/20 p-6 shadow-[0_-1px_20px_rgba(59,130,246,0.15)] md:p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-600/20">
                <Briefcase className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold md:text-2xl">{active.role}</h3>
                  {active.current && (
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                      • CURRENT
                    </span>
                  )}
                </div>
                <p className="text-blue-400">{active.company}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 md:pt-1">
              <Calendar className="h-4 w-4 text-blue-400" />
              {active.fullDate}
            </div>
          </div>

          <p className="mb-6 max-w-4xl leading-relaxed text-gray-400">{active.description}</p>

          <div className="mb-8 flex flex-wrap gap-2">
            {active.tech.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-blue-600/30 bg-blue-600/15 px-3 py-1 text-xs text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-dark-700 pt-5">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-300">
                {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              {' – '}
              {active.company}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-dark-700 text-gray-300 transition-all hover:border-blue-500 hover:bg-blue-500/10 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous role"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex === total - 1}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-dark-700 text-gray-300 transition-all hover:border-blue-500 hover:bg-blue-500/10 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next role"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
