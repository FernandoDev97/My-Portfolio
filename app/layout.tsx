import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Aside } from './components/aside'
import { ContactForm } from './components/contact-form'
import { BackToTop } from './components/back-to-top'
import { Toaster } from './components/toaster'

export const metadata = {
  title: {
    default: 'Meu Portfólio',
    template: '%s | Meu Portfólio <Fs />'
  },
  icons: [
    {
      url: '/icon.svg'
    }
  ]
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body suppressHydrationWarning={true}>
        <Toaster/>
        <Aside />
        {children}
        <ContactForm />
        <BackToTop/>
      </body>
    </html>
  )
}
