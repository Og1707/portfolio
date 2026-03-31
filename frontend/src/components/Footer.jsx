import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-gray-400 py-10 px-6 md:px-12 lg:px-24">
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-mono text-accent font-semibold text-lg">
              osman<span className="text-white">.dev</span>
            </span>
            <p className="text-sm mt-1">Backend Developer & Automation Engineer</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Og1707"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/osman-p%C3%A9rez-690aa9271/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <p className="text-sm">
            © {year} Osman Pérez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
