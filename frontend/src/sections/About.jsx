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
                Me especializo en <strong className="font-bold text-slate-900">traducir necesidades complejas de negocio en sistemas estables y automatizados</strong>. No soy solo un ejecutor de código; me involucro en entender la lógica interna de tu empresa para diseñar software que optimice tus costos desde el primer día.
              </p>
              <p>
                Trabajo de forma autónoma con PYMEs, startups y equipos de ingeniería que buscan <strong className="font-bold text-slate-900">velocidad de despliegue sin sacrificar la seguridad de sus datos</strong>. Mi objetivo es simple: que tu infraestructura tecnológica deje de ser un dolor de cabeza y se convierta en tu mayor ventaja competitiva.
              </p>
            </div>

            {/* Links sociales */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/Og1707"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted border border-border px-4 py-2 rounded-xl shadow-sm transition-all duration-300 hover:bg-slate-100 hover:border-slate-300 hover:text-primary"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/osman-p%C3%A9rez-690aa9271/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted border border-border px-4 py-2 rounded-xl shadow-sm transition-all duration-300 hover:bg-slate-100 hover:border-slate-300 hover:text-accent"
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
    "backend": "Python (FastAPI, Django) / NestJS",
    "automatizacion": "n8n",
    "frontend": "React.js / Next.js",
    "db": "PostgreSQL / MongoDB / Redis",
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
