import { useState } from 'react'
import { api } from '../services/api'

export const useContactForm = () => {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const submitContact = async (formData) => {
    setStatus('loading')
    setErrorMessage('')

    try {
      await api.sendContact(formData)
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message || 'Error al enviar el mensaje. Intenta de nuevo.')
    }
  }

  const resetForm = () => {
    setStatus('idle')
    setErrorMessage('')
  }

  return {
    status,
    errorMessage,
    submitContact,
    resetForm,
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
  }
}
