/**
 * @param {{ icon: React.ElementType, title: string, description: string, steps: string[] }} props
 */
export default function AutomationCard({ icon: Icon, title, description, steps }) {
  return (
    <article className="group rounded-2xl border border-gray-800 bg-black/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_0_1px_rgba(14,165,233,0.25),0_20px_45px_rgba(0,0,0,0.28)]">
      <header className="mb-4 flex items-center gap-3">
        <div className="rounded-lg bg-accent/10 p-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/15">
          <Icon size={20} className="text-accent transition-transform duration-300" />
        </div>
        <h3 className="font-bold text-white">{title}</h3>
      </header>

      <p className="mb-4 text-sm leading-relaxed text-gray-400">{description}</p>

      <div className="rounded-xl border-l-2 border-accent bg-gray-900/80 p-4">
        <div className="flex flex-wrap gap-2">
          {steps.map((step, index) => (
            <span
              key={`${title}-${index}`}
              className="inline-flex max-w-full items-center rounded-full border border-gray-700 bg-gray-950/80 px-3 py-1 text-xs font-mono leading-snug text-gray-200 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-gray-950"
            >
              {step}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}