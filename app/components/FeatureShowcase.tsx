import React from 'react'
import { useTypingEffect } from '../hooks'

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  { title: 'Responsive', description: 'Looks great on any device', icon: '📱' },
  { title: 'Interactive', description: 'Engaging user experiences', icon: '🖱️' },
  { title: 'Modern', description: 'Built with the latest technologies', icon: '🚀' },
]

export const FeatureShowcase: React.FC = () => {
  const displayedText = useTypingEffect('Discover Our Features', 100)

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">{displayedText}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <span className="mr-2">{feature.icon}</span>
              {feature.title}
            </h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}