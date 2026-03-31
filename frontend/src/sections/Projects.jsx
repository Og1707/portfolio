import { Github, ExternalLink, TrendingUp } from 'lucide-react'
import { PROJECTS } from '../constants/projects'

export default function Projects() {
  return (
    <section
      id="proyectos"
      data-section="Proyectos"
      className="section-padding bg-white"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-4">// proyectos</p>
          <h2 className="text-4xl font-bold text-primary mb-4">
            Proyectos de demostración
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Cada proyecto resuelve un problema real de negocio. Construidos con el mismo
            stack y estándares que usaría en tu proyecto.
          </p>
        </div>

        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="card grid md:grid-cols-5 gap-6 items-start hover:border-accent transition-colors"
            >
              {/* Número */}
              <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-4">
                <span className="text-6xl font-bold text-blue-50 font-mono">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Contenido */}
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-muted mb-4 leading-relaxed">{project.description}</p>

                <div className="flex items-center gap-2 mb-4 text-sm">
                  <span className="text-muted font-medium">Problema:</span>
                  <span className="text-primary">{project.problem}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Métricas y Links */}
              <div className="md:col-span-1 space-y-4">
                <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-green-700 text-xs font-medium mb-1">
                    <TrendingUp size={12} />
                    Impacto
                  </div>
                  <p className="text-green-800 text-sm font-medium">{project.metrics}</p>
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-muted hover:text-primary border border-border px-3 py-2 rounded-lg transition-colors flex-1 justify-center"
                  >
                    <Github size={14} />
                    Código
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-accent hover:text-accent-hover border border-accent px-3 py-2 rounded-lg transition-colors flex-1 justify-center"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
