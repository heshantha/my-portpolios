'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type Skill = {
  name: string
  icon: string
  color: string
  iconSrc?: string
}

const SKILLS: Skill[] = [
  { name: 'React', icon: 'react', color: '#61DAFB' },
  { name: 'Next.js', icon: 'nextdotjs', color: '#FFFFFF' },
  { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
  { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
  { name: 'Vue.js', icon: 'vuedotjs', color: '#4FC08D' },
  { name: 'Angular', icon: 'angular', color: '#DD0031' },
  { name: 'HTML5', icon: 'html5', color: '#E34F26' },
  { name: 'CSS3', icon: 'css', color: '#1572B6' },
  { name: 'Tailwind', icon: 'tailwindcss', color: '#06B6D4' },
  { name: 'Sass', icon: 'sass', color: '#CC6699' },
  { name: 'Redux', icon: 'redux', color: '#764ABC' },
  { name: 'Node.js', icon: 'nodedotjs', color: '#339933' },
  { name: 'Express', icon: 'express', color: '#FFFFFF' },
  { name: 'MongoDB', icon: 'mongodb', color: '#47A248' },
  { name: 'MySQL', icon: 'mysql', color: '#4479A1' },
  { name: 'GraphQL', icon: 'graphql', color: '#E10098' },
  { name: 'Firebase', icon: 'firebase', color: '#FFCA28' },
  {
    name: 'AWS',
    icon: 'amazonaws',
    color: '#FF9900',
    // Simple Icons no longer hosts AWS due to trademark; use Devicon instead
    iconSrc:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  { name: 'Git', icon: 'git', color: '#F05032' },
  { name: 'Figma', icon: 'figma', color: '#F24E1E' },
  { name: 'Material UI', icon: 'mui', color: '#007FFF' },
  { name: 'Bootstrap', icon: 'bootstrap', color: '#7952B3' },
  { name: 'WordPress', icon: 'wordpress', color: '#21759B' },
  { name: 'Sitecore', icon: 'sitecore', color: '#EB1F1F' },
]

function fibonacciSphere(count: number, radius: number) {
  const points: { x: number; y: number; z: number }[] = []
  const golden = Math.PI * (3 - Math.sqrt(5))

  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / Math.max(count - 1, 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = golden * i
    points.push({
      x: Math.cos(theta) * r * radius,
      y: y * radius,
      z: Math.sin(theta) * r * radius,
    })
  }

  return points
}

function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: `${Math.random() * 4}s`,
        opacity: Math.random() * 0.6 + 0.2,
      })),
    []
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-blue-300 animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.delay,
            boxShadow: '0 0 6px rgba(96, 165, 250, 0.8)',
          }}
        />
      ))}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute left-[40%] top-[35%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
    </div>
  )
}

export default function SkillsGalaxy() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rotation = useRef({ x: -12, y: 18 })
  const velocity = useRef({ x: 0, y: 0.18 })
  const dragging = useRef(false)
  const last = useRef({ x: 0, y: 0 })
  const frame = useRef<number>()
  const [hoverName, setHoverName] = useState<string | null>(null)

  const positions = useMemo(() => fibonacciSphere(SKILLS.length, 180), [])

  const applyTransform = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    el.style.transform = `rotateX(${rotation.current.x}deg) rotateY(${rotation.current.y}deg)`
  }, [])

  useEffect(() => {
    const tick = () => {
      if (!dragging.current) {
        rotation.current.y += velocity.current.y
        rotation.current.x += velocity.current.x
        velocity.current.y *= 0.995
        velocity.current.x *= 0.92

        if (Math.abs(velocity.current.y) < 0.08) {
          velocity.current.y = 0.08
        }
      }

      applyTransform()
      frame.current = requestAnimationFrame(tick)
    }

    frame.current = requestAnimationFrame(tick)
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [applyTransform])

  const onPointerDown = (event: React.PointerEvent) => {
    dragging.current = true
    last.current = { x: event.clientX, y: event.clientY }
    velocity.current = { x: 0, y: 0 }
    ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: React.PointerEvent) => {
    if (!dragging.current) return
    const dx = event.clientX - last.current.x
    const dy = event.clientY - last.current.y
    last.current = { x: event.clientX, y: event.clientY }
    rotation.current.y += dx * 0.35
    rotation.current.x -= dy * 0.35
    rotation.current.x = Math.max(-60, Math.min(60, rotation.current.x))
    velocity.current = { x: -dy * 0.02, y: dx * 0.02 }
    applyTransform()
  }

  const onPointerUp = () => {
    dragging.current = false
  }

  return (
    <section className="relative overflow-hidden py-20 px-4" id="skills">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-[#070b18] to-dark-900" />
      <Stars />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-400">
          Drag to spin the galaxy and explore the technologies I use every day.
        </p>

        <div
          className="relative mx-auto h-[420px] w-full max-w-[640px] cursor-grab touch-none select-none active:cursor-grabbing sm:h-[520px]"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div className="absolute inset-0 flex items-center justify-center [perspective:1000px]">
            <div
              ref={containerRef}
              className="relative h-0 w-0 [transform-style:preserve-3d]"
            >
              {SKILLS.map((skill, index) => {
                const point = positions[index]
                return (
                  <div
                    key={skill.name}
                    className="absolute left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 [transform-style:preserve-3d]"
                    style={{
                      transform: `translate3d(${point.x}px, ${point.y}px, ${point.z}px)`,
                    }}
                    onMouseEnter={() => setHoverName(skill.name)}
                    onMouseLeave={() => setHoverName(null)}
                  >
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-dark-800/90 backdrop-blur-md transition-transform duration-200 sm:h-16 sm:w-16"
                      style={{
                        boxShadow: `0 0 18px ${skill.color}55, inset 0 0 12px ${skill.color}22`,
                        transform: hoverName === skill.name ? 'scale(1.15)' : 'scale(1)',
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={
                          skill.iconSrc ??
                          `https://cdn.simpleicons.org/${skill.icon}/${skill.color.replace('#', '')}`
                        }
                        alt={skill.name}
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                        draggable={false}
                      />
                    </div>
                    <span
                      className="whitespace-nowrap rounded-full bg-dark-900/80 px-2 py-0.5 text-[10px] text-gray-300 opacity-0 transition-opacity sm:text-xs"
                      style={{
                        opacity: hoverName === skill.name ? 1 : 0.75,
                        textShadow: `0 0 8px ${skill.color}`,
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <p className="mt-2 text-center text-sm text-gray-500">
          {hoverName ? hoverName : 'Drag to spin the galaxy'}
        </p>
      </div>
    </section>
  )
}
