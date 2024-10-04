import React from 'react'
import './globals.css'
import { config } from './config'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gradient-to-b from-secondary to-gray-900 text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}