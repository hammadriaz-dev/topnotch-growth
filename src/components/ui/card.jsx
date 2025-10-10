// src/components/ui/card.jsx

import React from 'react';

// Basic definition for Card component
export function Card({ children, className, ...props }) {
  return (
    <div 
      className={`rounded-lg border bg-white text-card-foreground shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Basic definition for CardContent component
export function CardContent({ className, ...props }) {
  return (
    <div 
      className={`p-6 pt-0 ${className}`}
      {...props}
    >
      {props.children}
    </div>
  );
}