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
  {
    id: 3,
    title: "Colaborador: AudiGov",
    description:
      "MVP de Transparencia Gubernamental para la gestión, auditoría y publicación inmutable de contratos de licitaciones utilizando una arquitectura Serverless + Frontend Puro.",
    problem: "Falta de transparencia, inmutabilidad y trazabilidad confiable en la gestión de contratos de licitaciones públicas, sumado a la complejidad de mantener infraestructura de servidores tradicional.",
    solution: "Aplicación web ligera (Vanilla JS) integrada directamente con un BaaS (Supabase) para almacenamiento seguro, control de roles (RLS) y auditoría inmutable mediante hashes SHA-256 locales.",
    tags: ["JavaScript Vanilla", "Supabase", "PostgreSQL", "Web Crypto API", "CSS Modular"],
    github: "https://github.com/ingalexanderg0-pixel/AudiGov",
    demo: null,
    featured: false,
    metrics: "Eliminación total de servidores backend dedicados, logs de auditoría 100% inmutables mediante SHA-256 y navegación fluida tipo SPA con cero dependencias de frameworks.",
  },
  {
    id: 4,
    title: "Colaborador: Detección de Anomalías en Tráfico de Red",
    description:
      "Este repositorio contiene la implementación en PyTorch de un sistema avanzado para la detección de anomalías en tráfico de red. El modelo combina Modelos de Espacio de Estados Selectivos (Selective SSM), Bloques Espectrales (FFT) y un Filtro de Kalman para el suavizado de predicciones temporales.",
    problem: "propone una solución a la insuficiencia de los métodos tradicionales de ciberseguridad frente a amenazas modernas en redes de alta velocidad —como ataques zero-day y exfiltraciones de baja intensidad— mediante el diseño matemático de una arquitectura avanzada que integra un modelo de espacio de estados selectivo (dominio temporal), un extractor de características espectrales (dominio de la frecuencia) y un filtro de Kalman para el suavizado estadístico de las predicciones, operando eficazmente sobre el conjunto de datos de tráfico UNSW-NB15.",
    solution: "Python + PyTorch + Imbalanced-Learn + Scikit-Learn + Filtro de Kalman",
    tags: ["Python", "PyTorch", "Google Colab", "Pandas", "NumPy", "Scikit-learn","imbalanced-learn"],
    github: "https://github.com/IngLuisVG/Detecci-n-de-anomal-as-en-tr-fico-de-red-mediante-modelos-de-espacio-de-estados-y-an-lisis-espectral",
    demo: null,
    featured: false,
    metrics: "Reduce el ruido estadístico de las predicciones y equilibra el desbalance de clases del dataset UNSW-NB15",
  }
]
