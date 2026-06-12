import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      data-section="Inicio"
      className="min-h-screen flex items-center section-padding pt-24"
    >
      <div className="container-max w-full">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-accent text-sm font-medium px-4 py-2 rounded-full mb-8">
            <Zap size={14} />
            <span>Disponible para proyectos freelance</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6">
            Automatizo tu{' '}
            <span className="text-gradient">negocio</span>{' '}
            con software a la medida
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted leading-relaxed mb-10 max-w-2xl">
            Desarrollo APIs, sistemas y flujos de automatización con{' '}
            <span className="font-mono text-accent">n8n</span> e IA para que tu equipo
            deje de hacer tareas repetitivas y se enfoque en lo que realmente importa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="btn-primary flex items-center justify-center gap-2 text-base py-4 px-8"
            >
              Cuéntame tu proyecto
              <ArrowRight size={18} />
            </a>
            <a
              href="#proyectos"
              className="btn-secondary flex items-center justify-center gap-2 text-base py-4 px-8"
            >
              Ver proyectos
            </a>
          </div>

          {/* Social proof rápida */}
          <div className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-border">
            <div>
              <div className="text-2xl font-bold text-primary">Arquitectura de APIs</div>
              <div className="text-sm text-muted">Diseño robusto y seguro</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div>
              <div className="text-2xl font-bold text-primary">Automatización / IA</div>
              <div className="text-sm text-muted">Flujos autónomos e integraciones</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div>
              <div className="text-2xl font-bold text-primary">Ecosistema Integrado</div>
              <div className="text-sm text-muted">Conexión de sistemas y CRM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
