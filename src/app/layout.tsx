import './globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
const mont = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Douglas Yoshi',
  description: 'Welcome to my digital world where I share my knowledges helping people to built beautiful web applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

      </Head>
      <body className={`flex justify-center bg-gray-900 antialiased selection:bg-red-500/90 ${mont.className}`}>{children}</body>
    </html>
  )
}
