import { PROJECTS } from '../constants/projects'
import ProjectCard from '../components/ProjectCard'

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
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
