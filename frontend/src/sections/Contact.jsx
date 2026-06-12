import { useForm } from 'react-hook-form'
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { useContactForm } from '../hooks/useContactForm'

const SERVICES_OPTIONS = [
  { value: 'software-medida', label: 'Software a la Medida' },
  { value: 'automatizacion-procesos', label: 'Automatización de Procesos' },
  { value: 'integracion-ia', label: 'Integración de Inteligencia Artificial' },
  { value: 'soporte-infraestructura', label: 'Soporte e Infraestructura' },
]

const BUDGET_OPTIONS = [
  { value: 'menos-1000', label: 'Menos de $1,000 USD' },
  { value: '1000-3000', label: '$1,000 - $3,000 USD' },
  { value: 'mas-3000', label: 'Más de $3,000 USD' },
]

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { status, errorMessage, submitContact, resetForm, isLoading, isSuccess, isError } = useContactForm()

  const onSubmit = async (data) => {
    await submitContact(data)
    if (isSuccess) reset()
  }

  if (isSuccess) {
    return (
      <section id="contacto" data-section="Contacto" className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-md mx-auto text-center">
            <div className="p-4 bg-green-50 rounded-full w-fit mx-auto mb-6">
              <CheckCircle size={40} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">¡Mensaje recibido!</h3>
            <p className="text-muted mb-6">
              Te responderé en menos de 24 horas. Si tienes urgencia, escríbeme directamente por WhatsApp.
            </p>
            <button onClick={resetForm} className="btn-secondary">
              Enviar otro mensaje
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="contacto"
      data-section="Contacto"
      className="section-padding bg-white"
    >
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Copy izquierdo */}
          <div>
            <p className="text-accent font-mono text-sm mb-4">// contacto</p>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Cuéntame sobre<br />tu proyecto
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Completa el formulario y te respondo con una propuesta clara en menos de 24 horas.
              Sin compromiso, sin tecnicismos.
            </p>

            <div className="space-y-4 text-sm text-muted">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Contacto directo en menos de 24 horas hábiles</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Análisis inicial de viabilidad técnica incluido</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Propuestas transparentes alineadas a tus objetivos</span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit(onSubmit)} className="card space-y-5">

            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Nombre completo *
              </label>
              <input
                type="text"
                placeholder="Juan García"
                className={`w-full border rounded-lg px-4 py-3 text-sm outline-none transition-colors
                  focus:border-accent ${errors.name ? 'border-red-400' : 'border-border'}`}
                {...register('name', { required: 'El nombre es obligatorio' })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Email *
              </label>
              <input
                type="email"
                placeholder="juan@empresa.com"
                className={`w-full border rounded-lg px-4 py-3 text-sm outline-none transition-colors
                  focus:border-accent ${errors.email ? 'border-red-400' : 'border-border'}`}
                {...register('email', {
                  required: 'El email es obligatorio',
                  pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' }
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                WhatsApp <span className="text-muted font-normal">(opcional)</span>
              </label>
              <input
                type="tel"
                placeholder="+57 300 000 0000"
                className="w-full border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                {...register('whatsapp')}
              />
            </div>

            {/* Servicio */}
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                ¿Qué necesitas? *
              </label>
              <select
                className={`w-full border rounded-lg px-4 py-3 text-sm outline-none transition-colors
                  focus:border-accent ${errors.service ? 'border-red-400' : 'border-border'}`}
                {...register('service', { required: 'Selecciona un servicio' })}
              >
                <option value="">Selecciona una opción...</option>
                {SERVICES_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
              )}
            </div>

            {/* Presupuesto */}
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Presupuesto aproximado
              </label>
              <select
                className="w-full border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                {...register('budget')}
              >
                <option value="">Selecciona un rango...</option>
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Cuéntame más *
              </label>
              <textarea
                rows={4}
                placeholder="Describe brevemente tu proyecto o el problema que quieres resolver..."
                className={`w-full border rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none
                  focus:border-accent ${errors.message ? 'border-red-400' : 'border-border'}`}
                {...register('message', { required: 'El mensaje es obligatorio', minLength: { value: 10, message: 'Mínimo 10 caracteres' } })}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Error global */}
            {isError && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-100 rounded-lg p-3 text-sm">
                <AlertCircle size={16} />
                {errorMessage}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center gap-2 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader size={18} className="animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar mensaje
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}
