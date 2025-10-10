// src/components/ui/button.jsx
import React from 'react';

export function Button({ children, onClick, className, ...props }) {
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
// Note: If other files are importing 'Button' as a named export, 
// the export MUST match how it's imported in About.jsx and Services.jsx.
// Based on your import, the `export function Button` style is often used.