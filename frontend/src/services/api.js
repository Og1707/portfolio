// Centraliza todas las llamadas al backend
// Si cambia la URL base, solo se cambia aquí

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1'

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Error desconocido' }))
    throw new Error(error.detail || `HTTP ${response.status}`)
  }
  return response.json()
}

export const api = {
  // Verificar que el backend esté corriendo
  health: async () => {
    const response = await fetch(`${API_BASE_URL}/health`)
    return handleResponse(response)
  },

  // Enviar formulario de contacto
  sendContact: async (formData) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    return handleResponse(response)
  },
}
