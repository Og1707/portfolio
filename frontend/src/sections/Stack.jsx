import { TECHNOLOGIES } from '../constants/technologies'
import TechCard from '../components/TechCard'

export default function Stack() {
  return (
    <section
      id="stack"
      data-section="Stack"
      className="section-padding bg-white"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-4">// tecnologías</p>
          <h2 className="text-4xl font-bold text-primary mb-4">Stack técnico</h2>
          <p className="text-muted max-w-xl mx-auto">
            Herramientas que uso en producción — no en tutoriales.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {TECHNOLOGIES.map((category) => (
            <div key={category.category} className="card h-full">
              <h3 className="mb-5 border-b border-border pb-3 font-bold text-primary">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <TechCard key={item.name} name={item.name} role={item.role} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
