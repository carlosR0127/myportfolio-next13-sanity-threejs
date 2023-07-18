import { DefaultProviders } from '@/redux/Provider'
import '../globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://david-js.com' || 'localhost:3000'),
  title: {
    default: "David | Portfolio",
    template: "%s | david-js.com",
  },
  description: "Portfolio and Blog of 'Adi' Muhammad Aziz Abdillah. An Indonesian coder thats understand design",
  openGraph: {
    title: 'david-js.com',
    description: "Portfolio and Blog of 'Adi' Muhammad Aziz Abdillah. An Indonesian coder thats understand design",
    url: 'david-js.com',
    siteName: 'david-js.com',
    images: [
      {
        url: '/preview-sm.jpg',
        width: 800,
        height: 600,
      },
      {
        url: '/preview.jpg',
        width: 1800,
        height: 1600,
        alt: 'preview',
      },
    ],
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <DefaultProviders>
          <Navbar/>
          {children}
        </DefaultProviders>
      </body>
    </html>
  )
}
