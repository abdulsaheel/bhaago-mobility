import type React from "react"
import "@/styles/globals.css"
import { GeistSans } from "geist/font/sans"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Georama:wght@400;500;600;700&family=AR+One+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}

