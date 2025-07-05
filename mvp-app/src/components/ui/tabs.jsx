"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Tabs = ({ value, onValueChange, children, className, ...props }) => {
  return (
    <div className={cn("w-full", className)} {...props}>
      {React.Children.map(children, (child) => React.cloneElement(child, { value, onValueChange }))}
    </div>
  )
}

const TabsList = React.forwardRef(({ className, children, value, onValueChange, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500", className)}
    {...props}
  >
    {React.Children.map(children, (child) => React.cloneElement(child, { currentValue: value, onValueChange }))}
  </div>
))
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef(({ className, value, currentValue, onValueChange, children, ...props }, ref) => {
  const isActive = value === currentValue

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900",
        className,
      )}
      onClick={() => onValueChange?.(value)}
      {...props}
    >
      {children}
    </button>
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef(({ className, value, children, ...props }, ref) => {
  const parentValue = React.useContext(TabsContext) || props.currentValue

  if (value !== parentValue) return null

  return (
    <div
      ref={ref}
      className={cn(
        "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})
TabsContent.displayName = "TabsContent"

// Context for passing value down
const TabsContext = React.createContext()

// Enhanced Tabs component with context
const TabsWithContext = ({ value, onValueChange, children, className, ...props }) => {
  return (
    <TabsContext.Provider value={value}>
      <div className={cn("w-full", className)} {...props}>
        {React.Children.map(children, (child) => {
          if (child.type === TabsList) {
            return React.cloneElement(child, { value, onValueChange })
          }
          if (child.type === TabsContent) {
            return React.cloneElement(child, { currentValue: value })
          }
          return child
        })}
      </div>
    </TabsContext.Provider>
  )
}

export { TabsWithContext as Tabs, TabsList, TabsTrigger, TabsContent }
