// src/components/ui/input.jsx
import * as React from "react"

// Defines a basic, reusable Input component using Tailwind classes.
// Using React.forwardRef allows the component to receive a ref, which is standard 
// practice for input fields, especially when integrating with form libraries.
export const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`
        flex h-10 w-full rounded-md border border-input bg-background 
        px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent 
        file:text-sm file:font-medium placeholder:text-muted-foreground 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
        focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
        ${className}
      `}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = "Input"
