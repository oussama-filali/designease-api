import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: "--font-sans", })

export const metadata: Metadata = {
  title: 'DesignEase',
  description: 'Premium UI Templates Platform',
}

import { AuthProvider } from '@/components/auth-provider';
import { NavHeader } from '@/components/nav-header'; // We will create this

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}>
          <AuthProvider>
             <NavHeader />
             <main>{children}</main>
          </AuthProvider>
      </body>
    </html>
  )
}
