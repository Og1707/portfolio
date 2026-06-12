import { SERVICES } from '../constants/services'
import ServiceCard from '../components/ServiceCard'

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

        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contacto" className="btn-primary text-base py-4 px-10">
            Discutir mi proyecto
          </a>
        </div>
      </div>
    </section>
  )
}
