import React from 'react'

interface PolyProps {
  className?: string;
}

export const Poly: React.FC<PolyProps> = ({ className }) => {
  return (
    <svg
      className={`animate-spin-slow ${className}`}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="100,10 40,180 190,60 10,60 160,180"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}