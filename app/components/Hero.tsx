import React from 'react'
import { useTypingEffect } from '../hooks'

interface HeroProps {
  title: string;
  description: string;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ title, description, className }) => {
  const typedTitle = useTypingEffect(title, 100)

  return (
    <div className={`space-y-6 ${className}`}>
      <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
        {typedTitle}
      </h1>
      <p className="text-xl max-w-2xl mx-auto">{description}</p>
      <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold mt-8">
        Get Started
      </button>
    </div>
  )
}