"use client"

import { Mail, MapPin } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent, forwardRef } from "react"
import { MagneticButton } from "@/components/magnetic-button"

export const ContactSection = forwardRef<HTMLDivElement>(function ContactSection(props, ref) {
  const { ref: revealRef, isVisible } = useReveal(0.3)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call later)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  // Combine both refs
  const setRefs = (element: HTMLDivElement | null) => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(element)
      } else {
        ref.current = element
      }
    }
    if (revealRef) {
      if (typeof revealRef === 'function') {
        revealRef(element)
      } else {
        revealRef.current = element
      }
    }
  }

  return (
    <section
      ref={setRefs}
      className="flex min-h-screen w-full flex-col px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-16 overflow-x-hidden"
    >
      <div className="mx-auto w-full max-w-7xl flex-1 flex flex-col justify-center py-4 sm:py-0">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-4 transition-all duration-700 sm:mb-6 md:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-1 font-sans text-3xl font-light leading-[1.05] tracking-tight text-foreground sm:mb-2 sm:text-4xl md:mb-3 md:text-6xl lg:text-7xl">
                Parliamo
                <br />
                del tuo progetto
              </h2>
              <p className="font-mono text-[10px] text-foreground/60 sm:text-xs md:text-base">/ Contattaci</p>
            </div>

            <div className="space-y-3 sm:space-y-4 md:space-y-8">
              <a
                href="mailto:info@halostudio.it"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-0.5 flex items-center gap-1.5 sm:mb-1 sm:gap-2">
                  <Mail className="h-2.5 w-2.5 text-foreground/60 sm:h-3 sm:w-3" />
                  <span className="font-mono text-[10px] text-foreground/60 sm:text-xs">Email</span>
                </div>
                <p className="text-sm text-foreground transition-colors group-hover:text-foreground/70 sm:text-base md:text-2xl">
                  info@halostudio.it
                </p>
              </a>

              
            </div>
          </div>

          {/* Right side - Minimal form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <label className="mb-0.5 block font-mono text-[10px] text-foreground/60 sm:mb-1 sm:text-xs md:mb-2">Nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1 text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none sm:py-1.5 md:py-2 md:text-base text-base"
                  placeholder="Il tuo nome"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <label className="mb-0.5 block font-mono text-[10px] text-foreground/60 sm:mb-1 sm:text-xs md:mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1 text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none sm:py-1.5 md:py-2 md:text-base text-base"
                  placeholder="la-tua@email.com"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <label className="mb-0.5 block font-mono text-[10px] text-foreground/60 sm:mb-1 sm:text-xs md:mb-2">Messaggio</label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full resize-none border-b border-foreground/30 bg-transparent py-1 text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none sm:py-1.5 md:py-2 md:text-base text-base"
                  placeholder="Raccontaci del tuo progetto..."
                />
              </div>

              <div
                className={`pt-1 transition-all duration-700 sm:pt-2 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className="w-full text-sm disabled:opacity-50 sm:text-base"
                  onClick={isSubmitting ? undefined : undefined}
                >
                  {isSubmitting ? "Invio in corso..." : "Invia Messaggio"}
                </MagneticButton>
                {submitSuccess && (
                  <p className="mt-2 text-center font-mono text-xs text-foreground/80 sm:mt-3 sm:text-sm">Messaggio inviato con successo!</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer with company info */}
      <div className="bg-black text-white border-t border-black pt-6 pb-4 sm:pt-8 sm:pb-6 md:pt-10 md:pb-8 mt-8 sm:mt-12 md:mt-16 -mx-4 sm:-mx-6 md:-mx-12 px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-2 gap-4 sm:gap-8">
          <div>
            <p className="mb-1 font-mono text-[10px] text-white/60 sm:text-xs">Partita IVA</p>
            <p className="text-xs text-white/90 sm:text-sm">03343790592</p>
          </div>
          <div className="text-right">
            <p className="mb-1 font-mono text-[10px] text-white/60 sm:text-xs">Ragione Sociale</p>
            <p className="text-xs text-white/90 sm:text-sm">HALO STUDIO</p>
          </div>
        </div>
      </div>
    </section>
  )
})
