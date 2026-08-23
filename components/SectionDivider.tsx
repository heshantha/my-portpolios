export default function SectionDivider() {
  return (
    <div className="relative mx-auto max-w-6xl px-4" aria-hidden="true">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
    </div>
  )
}
