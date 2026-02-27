"use client"

import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { ServicesSection } from "@/components/sections/services-section"
import { ContactSection } from "@/components/sections/contact-section"
import { MagneticButton } from "@/components/magnetic-button"
import { useRef, useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(true)
  const shaderContainerRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = ["Home", "Servizi", "Contatti"]

  return (
    <main className="relative w-full overflow-x-hidden overflow-y-auto bg-background">
      <CustomCursor />
      <GrainOverlay />

      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{
          contain: "strict",
          background: "#ffffff",
        }}
      >
        <div className="absolute inset-0 bg-white/0" />
      </div>

      <nav
        className={`sticky top-0 z-50 flex items-center justify-between border-b border-foreground/10 px-4 py-4 backdrop-blur-md transition-opacity duration-700 sm:px-6 sm:py-5 md:px-12 md:py-6 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          className="flex items-center gap-2 md:transition-transform md:hover:scale-105"
        >
          <img 
            src="/logo-bianco.webp" 
            alt="Halo Studio Logo" 
            className="h-8 w-8 transition-all duration-300 md:hover:scale-110 sm:h-10 sm:w-10"
          />
          <span className="font-sans text-base font-semibold tracking-tight text-foreground sm:text-xl">Halo Studio</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item === "Servizi") scrollToSection(servicesRef)
                if (item === "Contatti") scrollToSection(contactRef)
              }}
              className="group relative font-sans text-sm font-medium transition-colors text-foreground/80 hover:text-foreground"
            >
              {item}
              <span
                className="absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 w-0 group-hover:w-full"
              />
            </button>
          ))}
        </div>

        <MagneticButton 
          variant="secondary" 
          size="sm" 
          onClick={() => scrollToSection(contactRef)}
          className="px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Contattaci
        </MagneticButton>
      </nav>

      <div className={`relative z-10 flex flex-col transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {/* Hero Section */}
        <section className="flex min-h-screen flex-col justify-end px-4 pb-20 pt-20 sm:px-6 sm:pb-16 md:px-12 md:pb-24">
          <div className="max-w-5xl">
            <div className="mb-3 inline-block animate-in fade-in slide-in-from-bottom-4 rounded-full border border-foreground/20 bg-foreground/15 px-3 py-1 backdrop-blur-md duration-700 sm:mb-4 sm:px-4 sm:py-1.5">
              <p className="font-mono text-[10px] text-foreground/90 sm:text-xs">Web Agency Creativa</p>
            </div>
            <h1 className="mb-4 animate-in fade-in slide-in-from-bottom-8 font-sans text-[2.5rem] font-light leading-[0.95] tracking-tight text-foreground duration-1000 sm:mb-6 sm:text-5xl md:text-7xl lg:text-8xl">
              <span className="text-balance">
                Trasformiamo idee in
                <br />
                esperienze digitali
              </span>
            </h1>
            <p className="mb-6 max-w-xl animate-in fade-in slide-in-from-bottom-4 text-base leading-relaxed text-foreground/90 duration-1000 delay-200 sm:mb-8 sm:text-lg md:text-xl">
              <span className="text-pretty">
                Sviluppiamo siti web, e-commerce, web app, gestionali e applicazioni mobile su misura per far crescere il tuo business.
              </span>
            </p>
            <div className="flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-3 duration-1000 delay-300 sm:flex-row sm:items-center sm:gap-4">
              <MagneticButton
                size="lg"
                variant="primary"
                onClick={() => scrollToSection(contactRef)}
                className="w-full text-sm sm:w-auto sm:text-base"
              >
                Richiedi Preventivo
              </MagneticButton>
              <MagneticButton 
                size="lg" 
                variant="secondary" 
                onClick={() => scrollToSection(servicesRef)}
                className="w-full text-sm sm:w-auto sm:text-base"
              >
                I Nostri Servizi
              </MagneticButton>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <p className="font-mono text-[10px] text-foreground/80 sm:text-xs">Scorri per esplorare</p>
              <div className="flex h-5 w-10 items-center justify-center rounded-full border border-foreground/20 bg-foreground/15 backdrop-blur-md sm:h-6 sm:w-12">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-foreground/80 sm:h-2 sm:w-2" />
              </div>
            </div>
          </div>
        </section>

        <ServicesSection ref={servicesRef} scrollToSection={() => scrollToSection(contactRef)} />
        <ContactSection ref={contactRef} />
      </div>

      <style jsx global>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  )
}
