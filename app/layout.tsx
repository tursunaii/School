import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Tursunai Education - Образовательная платформа',
  description: 'Современная образовательная платформа для школ Кыргызстана. Онлайн и офлайн обучение в одном месте.',
  keywords: 'образование, Кыргызстан, школа, онлайн обучение, платформа',
  authors: [{ name: 'Tursunai Education Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
