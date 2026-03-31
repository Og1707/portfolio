const STEPS = [
  {
    number: '01',
    title: 'Conversación inicial',
    description:
      'Hablamos 30 minutos para entender tu negocio, el problema que quieres resolver y qué resultado esperas. Sin tecnicismos.',
  },
  {
    number: '02',
    title: 'Propuesta clara',
    description:
      'Te envío una propuesta con alcance, tiempo estimado y precio fijo. Sin sorpresas al final. Si no te convence, no hay compromiso.',
  },
  {
    number: '03',
    title: 'Desarrollo iterativo',
    description:
      'Trabajo en sprints cortos. Cada semana ves avance real. Puedes dar feedback y ajustar el rumbo en cualquier momento.',
  },
  {
    number: '04',
    title: 'Entrega y soporte',
    description:
      'Te entrego el sistema funcionando con documentación clara. Incluyo soporte post-lanzamiento para asegurarme que todo marche bien.',
  },
]

export default function Process() {
  return (
    <section
      id="proceso"
      data-section="Proceso"
      className="section-padding"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-4">// proceso</p>
          <h2 className="text-4xl font-bold text-primary mb-4">Cómo trabajo contigo</h2>
          <p className="text-muted max-w-xl mx-auto">
            Proceso simple, comunicación constante, resultados predecibles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Línea conectora */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border z-0 -translate-x-6" />
              )}

              <div className="card relative z-10">
                <span className="font-mono text-4xl font-bold text-blue-50">{step.number}</span>
                <h3 className="font-bold text-primary text-lg mt-3 mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
