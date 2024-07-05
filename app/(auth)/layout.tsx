import { Montserrat } from 'next/font/google'
import { MinimalHeader } from '@/components/MinimalHeader'
import '../globals.css'

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <MinimalHeader />
        {children}
      </body>
    </html>
  )
}
