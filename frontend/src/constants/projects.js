// Proyectos de demostración — diseñados para mostrar el stack completo
// y resolver problemas reales de PYMEs latinoamericanas

export const PROJECTS = [
  {
    id: 1,
    title: "Sistema de Inventario Inteligente",
    description:
      "API REST para gestión de inventario con alertas automáticas por WhatsApp cuando el stock llega a nivel crítico. Integrado con n8n para notificaciones en tiempo real.",
    problem: "PYME con inventario en Excel, sin alertas ni trazabilidad",
    solution: "API + dashboard + notificaciones automáticas",
    tags: ["FastAPI", "PostgreSQL", "n8n", "WhatsApp API"],
    github: "https://github.com/Og1707/proyecto_bebidas",
    demo: null,
    featured: true,
    metrics: "Reduce pérdidas por desabastecimiento en un 80%",
  },
  {
    id: 2,
    title: "Plataforma infantil de actividades institucionales con IA",
    description:
      "plataforma web con inteligencia artificial para el aprendizaje de niños de primera infancia, siguiendo los Estándares Básicos de Competencias del Ministerio de Educación Nacional de Colombia y en apoyo a las prácticas del Programa de Licenciatura Infantil",
    problem: "Instituciones educativas que no tienen recursos para implementar la metodología de aprendizaje de los Estándares Básicos de Competencias",
    solution: "Web app + IA",
    tags: ["Django", "React", "n8n", "Email/WhatsApp"],
    github: "https://github.com/Og1707/edunu-ez/tree/main",
    demo: null,
    featured: true,
    metrics: "Reduce inasistencias en un 60%",
  },
]
