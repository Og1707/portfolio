import { STACK } from '../constants/stack'

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STACK.map((category) => (
            <div key={category.category} className="card">
              <h3 className="font-bold text-primary mb-5 pb-3 border-b border-border">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-primary font-medium">{item.name}</span>
                      <span className="text-muted font-mono">{item.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-700"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
