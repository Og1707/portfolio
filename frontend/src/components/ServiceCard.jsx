import { Code, Zap, Bot, RefreshCw, CheckCircle } from 'lucide-react'

const ICON_MAP = { Code, Zap, Bot, RefreshCw }

/**
 * @param {{ icon: string, title: string, description: string, deliverables: string[] }} props
 */
export default function ServiceCard({ icon, title, description, deliverables }) {
  const Icon = ICON_MAP[icon]

  return (
    <article className="card group h-full flex flex-col transition-all duration-300 hover:border-slate-300 hover:shadow-sm">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
          <Icon size={22} className="text-accent group-hover:text-white transition-all duration-300" />
        </div>
        <div>
          <h3 className="font-bold text-primary text-lg">{title}</h3>
          <p className="text-muted text-sm leading-relaxed mt-1">{description}</p>
        </div>
      </div>

      <ul className="mt-1 space-y-2">
        {deliverables.map((item, index) => (
          <li key={`${title}-${index}`} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
            <CheckCircle size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}