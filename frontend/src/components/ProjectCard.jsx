import { ExternalLink, Github, TrendingUp } from 'lucide-react'

/**
 * @typedef {Object} ProjectCardProps
 * @property {string} number
 * @property {string} title
 * @property {string} description
 * @property {string} problem
 * @property {string} impact
 * @property {string[]} tags
 * @property {string | null} codeUrl
 * @property {string | null} demoUrl
 */

/**
 * @param {ProjectCardProps} props
 */
export default function ProjectCard({
  number,
  title,
  description,
  problem,
  impact,
  tags,
  codeUrl,
  demoUrl,
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-lg">
      <div className="grid gap-6 p-6 lg:grid-cols-[4.5rem_minmax(0,1fr)_18rem] lg:items-start">
        <header className="flex items-start justify-between gap-4 lg:flex-col">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-950 text-lg font-semibold tracking-[0.2em] text-white shadow-sm">
            {number}
          </span>
        </header>

        <div className="min-w-0 space-y-4">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-primary md:text-2xl">{title}</h3>
            <p className="max-w-3xl break-words leading-relaxed text-muted">{description}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
            <span className="inline-flex w-fit items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900">
              Problema
            </span>
            <p className="min-w-0 break-words text-sm leading-relaxed text-primary">{problem}</p>
          </div>

          <div className="flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-3 py-1 text-xs font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-4 lg:h-full lg:justify-between">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-800">
              <TrendingUp size={14} />
              Impacto
            </div>
            <p className="break-words text-sm font-medium leading-relaxed">{impact}</p>
          </div>

          <footer className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 text-center"
              >
                <ExternalLink size={16} />
                Ver Demo En Vivo
              </a>
            ) : null}

            {codeUrl ? (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-center"
              >
                <Github size={16} />
                Revisar Código
              </a>
            ) : null}
          </footer>
        </div>
      </div>
    </article>
  )
}