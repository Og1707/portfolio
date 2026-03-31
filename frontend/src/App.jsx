import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Automations from './sections/Automations'
import Stack from './sections/Stack'
import Process from './sections/Process'
import Contact from './sections/Contact'

function App() {
  useEffect(() => {
    // Actualiza el título según la sección visible (SEO básico)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute('data-section')
            if (section) {
              document.title = `${section} — Osman Pérez`
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('section[data-section]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Automations />
        <Stack />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
