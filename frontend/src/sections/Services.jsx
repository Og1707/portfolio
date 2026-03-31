import { Code, Zap, Bot, RefreshCw, CheckCircle } from 'lucide-react'
import { SERVICES } from '../constants/services'

const ICON_MAP = { Code, Zap, Bot, RefreshCw }

export default function Services() {
  return (
    <section
      id="servicios"
      data-section="Servicios"
      className="section-padding"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-4">// servicios</p>
          <h2 className="text-4xl font-bold text-primary mb-4">
            ¿Qué puedo hacer por tu negocio?
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            No vendo tecnología. Resuelvo problemas. Cada servicio está pensado
            para generar un retorno real en tu operación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon]
            return (
              <div key={service.id} className="card group hover:border-accent transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon size={22} className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">{service.title}</h3>
                    <span className="text-accent font-mono text-sm">{service.price}</span>
                  </div>
                </div>

                <p className="text-muted mb-5 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted">
                      <CheckCircle size={14} className="text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a href="#contacto" className="btn-primary text-base py-4 px-10">
            Solicitar cotización gratuita
          </a>
        </div>
      </div>
    </section>
  )
}
