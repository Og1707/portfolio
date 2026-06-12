/**
 * @param {{ name: string, role: string }} props
 */
export default function TechCard({ name, role }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-border bg-white px-4 py-3 transition-all duration-300 hover:border-blue-500/40 hover:shadow-sm">
      <div className="min-w-0">
        <p className="truncate font-medium text-primary transition-colors duration-300 group-hover:text-primary">
          {name}
        </p>
        <p className="mt-1 break-words text-sm text-muted transition-colors duration-300">
          {role}
        </p>
      </div>

      <div
        className="mt-0.5 h-3 w-3 shrink-0 rounded-full border border-emerald-200 bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"
        aria-hidden="true"
      />
    </div>
  )
}