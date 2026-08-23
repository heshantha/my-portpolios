import type { Metadata } from 'next'
import Chatbot from '@/components/Chatbot'
import './globals.css'

export const metadata: Metadata = {
  title: 'Heshantha Lakshitha Abeykoon - Senior Front end Developer',
  description: 'Portfolio of Heshantha Lakshitha Abeykoon - Senior Front end Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
