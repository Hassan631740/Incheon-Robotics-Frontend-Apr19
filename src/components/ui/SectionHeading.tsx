interface SectionHeadingProps {
  badge: string
  title: string
  subtitle: string
}

export default function SectionHeading({ badge, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="inline-flex items-center px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-widest mb-4">
        {badge}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-400 leading-relaxed">{subtitle}</p>
    </div>
  )
}
