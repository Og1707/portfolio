/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} number
 * @property {string} title
 * @property {string} description
 * @property {string} problem
 * @property {string} impact
 * @property {string[]} tags
 * @property {string | null} codeUrl
 * @property {string | null} demoUrl
 * @property {boolean} featured
 */

/** @type {Project[]} */
export const PROJECTS = [
  {
    id: "01",
    number: "01",
    title: "Sistema de Inventario Inteligente",
    description:
      "API REST para gestión de inventario con alertas automáticas por WhatsApp cuando el stock llega a nivel crítico. Integrado con n8n para notificaciones en tiempo real.",
    problem: "PYME con inventario en Excel, sin alertas ni trazabilidad",
    impact: "Reduce pérdidas por desabastecimiento en un 80%",
    tags: ["FastAPI", "PostgreSQL", "n8n", "WhatsApp API"],
    codeUrl: "https://github.com/Og1707/proyecto_bebidas",
    demoUrl: null,
    featured: true,
  },
  {
    id: "02",
    number: "02",
    title: "Plataforma infantil de actividades institucionales con IA",
    description:
      "Plataforma web con inteligencia artificial para el aprendizaje de niños de primera infancia, siguiendo los Estándares Básicos de Competencias del Ministerio de Educación Nacional de Colombia y en apoyo a las prácticas del Programa de Licenciatura Infantil.",
    problem:
      "Instituciones educativas que no tienen recursos para implementar la metodología de aprendizaje de los Estándares Básicos de Competencias",
    impact: "Reduce inasistencias en un 60%",
    tags: ["Django", "React", "n8n", "Email/WhatsApp"],
    codeUrl: "https://github.com/Og1707/edunu-ez/tree/main",
    demoUrl: null,
    featured: true,
  },
  {
    id: "03",
    number: "03",
    title: "Colaborador: AudiGov",
    description:
      "MVP de Transparencia Gubernamental para la gestión, auditoría y publicación inmutable de contratos de licitaciones utilizando una arquitectura Serverless + Frontend Puro.",
    problem:
      "Falta de transparencia, inmutabilidad y trazabilidad confiable en la gestión de contratos de licitaciones públicas, sumado a la complejidad de mantener infraestructura de servidores tradicional.",
    impact:
      "Eliminación total de servidores backend dedicados, logs de auditoría 100% inmutables mediante SHA-256 y navegación fluida tipo SPA con cero dependencias de frameworks.",
    tags: ["JavaScript Vanilla", "Supabase", "PostgreSQL", "Web Crypto API", "CSS Modular"],
    codeUrl: "https://github.com/ingalexanderg0-pixel/AudiGov",
    demoUrl: null,
    featured: false,
  },
  {
    id: "04",
    number: "04",
    title: "Colaborador: Detección de Anomalías en Tráfico de Red",
    description:
      "Sistema de detección de anomalías en tráfico de red de alta velocidad implementado en PyTorch. Combina Modelos de Espacio de Estados Selectivos (SSM), análisis en el dominio de la frecuencia (FFT) y filtros de Kalman para optimizar la precisión temporal.",
    problem:
      "Los métodos de ciberseguridad tradicionales fallan al detectar amenazas modernas (como ataques zero-day y exfiltración sutil) en redes de alta velocidad.",
    impact:
      "Reduce el ruido estadístico de las predicciones y equilibra el desbalance de clases del dataset UNSW-NB15.",
    tags: ["Python", "PyTorch", "Google Colab", "Pandas", "NumPy", "Scikit-learn", "imbalanced-learn"],
    codeUrl:
      "https://github.com/IngLuisVG/Detecci-n-de-anomal-as-en-tr-fico-de-red-mediante-modelos-de-espacio-de-estados-y-an-lisis-espectral",
    demoUrl: null,
    featured: false,
  },
]
