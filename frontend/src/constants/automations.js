import { Workflow, MessageSquare, Bell, BarChart3 } from 'lucide-react'

export const AUTOMATIONS = [
  {
    icon: MessageSquare,
    title: 'Bots de WhatsApp con IA',
    description: 'Responden preguntas, toman pedidos y generan reportes automáticamente.',
    steps: [
      'Tu cliente escribe "¿cuánto cuesta el plan premium?"',
      'El bot responde al instante con la información actualizada.',
    ],
  },
  {
    icon: Bell,
    title: 'Alertas y Notificaciones',
    description: 'Tu sistema te avisa cuando algo importante pasa, sin que tengas que revisar manualmente.',
    steps: [
      'Stock bajo',
      'WhatsApp automático al proveedor',
      'Notificación a gerencia',
    ],
  },
  {
    icon: Workflow,
    title: 'Flujos de Trabajo',
    description: 'Conecta tus herramientas: CRM, email, facturación e inventario, todo sincronizado.',
    steps: [
      'Nuevo cliente en web',
      'Se crea en CRM',
      'Email de bienvenida',
      'Tarea en Notion automáticamente',
    ],
  },
  {
    icon: BarChart3,
    title: 'Reportes Automáticos',
    description: 'Recibe el resumen de tu negocio cada mañana, sin abrir ninguna app.',
    steps: [
      'Cada lunes a las 8am',
      'Reporte de ventas de la semana',
      'Directo a WhatsApp',
    ],
  },
]