import { Workflow, MessageSquare, Bell, BarChart3 } from 'lucide-react'

const AUTOMATIONS = [
  {
    icon: MessageSquare,
    title: 'Bots de WhatsApp con IA',
    description: 'Responden preguntas, toman pedidos y generan reportes automáticamente.',
    example: 'Tu cliente escribe "¿cuánto cuesta el plan premium?" → el bot responde al instante con la info actualizada.',
  },
  {
    icon: Bell,
    title: 'Alertas y Notificaciones',
    description: 'Tu sistema te avisa cuando algo importante pasa — sin que tengas que revisar manualmente.',
    example: 'Stock bajo → WhatsApp automático al proveedor + notificación a gerencia.',
  },
  {
    icon: Workflow,
    title: 'Flujos de Trabajo',
    description: 'Conecta tus herramientas: CRM, email, facturación, inventario — todo sincronizado.',
    example: 'Nuevo cliente en web → se crea en CRM + email de bienvenida + tarea en Notion automáticamente.',
  },
  {
    icon: BarChart3,
    title: 'Reportes Automáticos',
    description: 'Recibe el resumen de tu negocio cada mañana, sin abrir ninguna app.',
    example: 'Cada lunes a las 8am → reporte de ventas de la semana directo a WhatsApp.',
  },
]

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

        <div className="grid md:grid-cols-2 gap-6">
          {AUTOMATIONS.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="border border-gray-800 rounded-xl p-6 hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{item.description}</p>
                <div className="bg-gray-900 rounded-lg p-4 border-l-2 border-accent">
                  <p className="text-gray-300 text-xs font-mono leading-relaxed">
                    💡 {item.example}
                  </p>
                </div>
              </div>
            )
          })}
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
