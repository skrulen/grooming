import { Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import '@/components/Header'


const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
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