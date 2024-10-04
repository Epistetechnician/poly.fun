import React from 'react'
import { Poly, Hero, FeatureShowcase } from './components'
import { config } from './config'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="py-6 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Polyframe</h1>
        <nav>
          <button className="mr-4 text-white">Features</button>
          <button className="mr-4 text-white">Docs</button>
          <button className="bg-primary text-white px-4 py-2 rounded">Get Started</button>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center space-y-16 px-4 py-16">
        <Hero 
          title={config.title}
          description={config.description}
          className="text-center"
        />

        <Poly className="w-64 h-64 text-accent animate-float" />

        <FeatureShowcase />

        <section className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Polyframe?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Powerful and Flexible</h3>
              <p>Build complex applications with ease using our intuitive API and extensive component library.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Performance Optimized</h3>
              <p>Enjoy blazing-fast load times and smooth interactions, thanks to our optimized rendering engine.</p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold animate-pulse">
            Try Polyframe Now
          </button>
        </section>
      </main>

      <footer className="py-8 px-8 bg-gray-900">
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2023 Polyframe. All rights reserved.</p>
          <div>
            <button className="text-sm mr-4">Privacy Policy</button>
            <button className="text-sm">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  )
}