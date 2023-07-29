import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from "../redux/Providers"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car Rental Application',
  description: 'Buy all new and used cars at your convenience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
      <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}
