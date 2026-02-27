"use client"

import { useReveal } from "@/hooks/use-reveal"
import { forwardRef } from "react"

export const ServicesSection = forwardRef<HTMLDivElement, { scrollToSection?: () => void }>(
  ({ scrollToSection }, ref) => {
    const { ref: revealRef, isVisible } = useReveal(0.3)

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
      className="flex min-h-screen w-full items-center px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 sm:mb-12 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-3xl font-light tracking-tight text-foreground sm:mb-2 sm:text-5xl md:text-6xl lg:text-7xl">
            Servizi
          </h2>
          <p className="font-mono text-xs text-foreground/60 sm:text-sm md:text-base">/ Cosa possiamo fare per te</p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {[
            {
              title: "Siti Web",
              description: "Siti vetrina, landing page e portali aziendali moderni, veloci e ottimizzati per i motori di ricerca",
              direction: "top",
            },
            {
              title: "E-Commerce",
              description: "Negozi online completi con gestione prodotti, pagamenti sicuri e integrazioni logistiche",
              direction: "right",
            },
            {
              title: "Web App & Gestionali",
              description: "Applicazioni web su misura per automatizzare e digitalizzare i processi della tua azienda",
              direction: "left",
            },
            {
              title: "Soluzioni AI",
              description: "Intelligenza artificiale per ottimizzare i tuoi processi, analizzare dati e automatizzare attività complesse",
              direction: "bottom",
            },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
    )
  }
)

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
        <div className="h-px w-6 bg-foreground/30 transition-all duration-300 group-hover:w-10 group-hover:bg-foreground/50 sm:w-8 sm:group-hover:w-12" />
        <span className="font-mono text-[10px] text-foreground/60 sm:text-xs">0{index + 1}</span>
      </div>
      <h3 className="mb-1 font-sans text-xl font-light text-foreground sm:mb-2 sm:text-2xl md:text-3xl">{service.title}</h3>
      <p className="max-w-sm text-xs leading-relaxed text-foreground/80 sm:text-sm md:text-base">{service.description}</p>
    </div>
  )
}
