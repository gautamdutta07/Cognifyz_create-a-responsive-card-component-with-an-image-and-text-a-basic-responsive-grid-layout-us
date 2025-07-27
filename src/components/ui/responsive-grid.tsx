import * as React from "react"
import { cn } from "@/lib/utils"

export interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: number
}

const ResponsiveGrid = React.forwardRef<HTMLDivElement, ResponsiveGridProps>(
  ({ className, columns = { default: 1, sm: 2, lg: 3, xl: 4 }, gap = 6, children, ...props }, ref) => {
    const gridClasses = cn(
      "grid w-full",
      `gap-${gap}`,
      columns.default && `grid-cols-${columns.default}`,
      columns.sm && `sm:grid-cols-${columns.sm}`,
      columns.md && `md:grid-cols-${columns.md}`,
      columns.lg && `lg:grid-cols-${columns.lg}`,
      columns.xl && `xl:grid-cols-${columns.xl}`,
      className
    )

    return (
      <div
        ref={ref}
        className={gridClasses}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ResponsiveGrid.displayName = "ResponsiveGrid"

export { ResponsiveGrid }