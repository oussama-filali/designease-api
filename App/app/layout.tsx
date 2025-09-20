import type { Metadata } from 'next'

import '../globals.css'
import ClientOnly from '../components/ClientOnly';

export const metadata: Metadata = {
  title: 'DesignEase - UI Templates & Components',
  description: 'Generate beautiful UI templates and components with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientOnly>
          {children}
        </ClientOnly>
      </body>
    </html>
  )
}
