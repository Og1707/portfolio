import { AUTOMATIONS } from '../constants/automations'
import AutomationCard from '../components/AutomationCard'

export default function Automations() {
  return (
    <section
      id="automatizaciones"
      data-section="Automatizaciones"
      className="section-padding bg-primary text-white"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-4">// automatizaciones</p>
          <h2 className="text-4xl font-bold mb-4">
            Mientras tú duermes,{' '}
            <span className="text-gradient">tu negocio trabaja</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Con n8n conecto tus herramientas y creo flujos inteligentes que eliminan
            el trabajo manual de tu equipo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {AUTOMATIONS.map((item) => (
            <AutomationCard key={item.title} {...item} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="bg-accent text-white px-10 py-4 rounded-lg font-medium hover:bg-accent-hover transition-colors inline-block"
          >
            Automatiza tu negocio
          </a>
        </div>
      </div>
    </section>
  )
}
