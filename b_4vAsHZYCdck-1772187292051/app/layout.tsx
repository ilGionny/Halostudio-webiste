import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Halo Studio | Web Agency Creativa | Siti Web, E-commerce, Web App",
  description: "Web agency creativa specializzata in sviluppo siti web, e-commerce, web app, gestionali e applicazioni mobile su misura per far crescere il tuo business.",
  keywords: "web agency, sviluppo siti web, e-commerce, web app, applicazioni mobile, gestionali, design web, agenzia creativa",
  authors: [{ name: "Halo Studio" }],
  creator: "Halo Studio",
  openGraph: {
    type: "website",
    url: "https://halostudio.it",
    title: "Halo Studio | Web Agency Creativa",
    description: "Trasformiamo idee in esperienze digitali. Sviluppiamo siti web, e-commerce, web app, gestionali e applicazioni mobile su misura.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Halo Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halo Studio | Web Agency Creativa",
    description: "Trasformiamo idee in esperienze digitali",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/logo-bianco.webp",
    apple: "/logo-bianco.webp",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
