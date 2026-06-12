import { STEPS } from '../constants/process'
import ProcessStep from '../components/ProcessStep'

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

        <div className="relative pl-10 md:pl-12 lg:pl-0 lg:pr-6">
          <div className="absolute left-5 top-0 h-full w-px bg-border lg:hidden" aria-hidden="true" />

          <div className="grid items-stretch gap-6 lg:grid-cols-4 lg:pl-0">
            {STEPS.map((step, index) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === STEPS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
