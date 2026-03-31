import { Github, Linkedin } from 'lucide-react'

export default function About() {
  return (
    <section
      id="sobre-mi"
      data-section="Sobre mí"
      className="section-padding bg-white"
    >
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>
            <p className="text-accent font-mono text-sm mb-4">// sobre mí</p>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Hola, soy Osman Pérez
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Soy desarrollador backend especializado en <strong className="text-primary">Python</strong> y
                automatización de procesos con <strong className="text-primary">n8n</strong>. Me apasiona
                construir software que resuelva problemas reales de negocio.
              </p>
              <p>
                Trabajo con PYMEs y emprendedores que quieren digitalizar sus operaciones
                sin necesitar un equipo técnico interno. Mi enfoque es simple:
                <em className="text-primary"> entender primero tu negocio, luego construir la solución.</em>
              </p>
              <p>
                Especializado en conectar sistemas, automatizar flujos de trabajo y construir
                bots con inteligencia artificial que trabajan 24/7 por tu empresa.
              </p>
            </div>

            {/* Links sociales */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/Og1707"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors border border-border px-4 py-2 rounded-lg hover:border-primary"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/osman-p%C3%A9rez-690aa9271/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors border border-border px-4 py-2 rounded-lg hover:border-accent"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Card visual */}
          <div className="card bg-primary text-white">
            <p className="font-mono text-accent text-sm mb-6">// mi_perfil.py</p>
            <pre className="text-sm leading-relaxed font-mono text-gray-300 whitespace-pre-wrap">
{`perfil = {
  "nombre": "Osman Pérez",
  "rol": "Backend Developer",
  "especialidad": [
    "APIs REST",
    "Automatización n8n",
    "Bots con IA",
    "Software a la medida"
  ],
  "stack": {
    "backend": "Python / FastAPI",
    "automatizacion": "n8n",
    "frontend": "React.js",
    "db": "PostgreSQL"
  },
  "disponible": True
}`}
            </pre>
          </div>

        </div>
      </div>
    </section>
  )
}
