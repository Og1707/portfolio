/**
 * @param {{ number: string, title: string, description: string, isLast?: boolean }} props
 */
export default function ProcessStep({ number, title, description, isLast = false }) {
  return (
    <div className="relative h-full">
      <div className="card relative z-10 h-full overflow-hidden pl-10 lg:pl-6">
        <span className="absolute left-5 top-6 font-mono text-4xl font-bold text-blue-50 lg:static lg:mb-3 lg:block">
          {number}
        </span>
        <h3 className="font-bold text-primary text-lg mt-3 mb-3 lg:mt-0">{title}</h3>
        <p className="text-muted text-sm leading-relaxed">{description}</p>
      </div>

      {!isLast ? (
        <>
          <div className="absolute left-5 top-0 h-full w-px bg-border lg:hidden" aria-hidden="true" />
          <div className="hidden lg:block absolute top-8 left-full z-0 h-px w-full -translate-x-6 bg-border" aria-hidden="true" />
        </>
      ) : null}
    </div>
  )
}