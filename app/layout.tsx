import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import styles from './layout.module.css'
import '@/components/Header'


const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Груминг',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}