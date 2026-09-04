import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['500','600','700'] })
const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['400','500','600','700'] })

export const metadata: Metadata = { title: 'Almeida & Torres | Advocacia estratégica', description: 'Advocacia estratégica para decisões que importam.' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className="bg-[#f6f5f2]"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>
}
