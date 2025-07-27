import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"

const cardVariants = cva(
  "group relative overflow-hidden rounded-xl bg-card text-card-foreground transition-all duration-300 hover:shadow-xl",
  {
    variants: {
      variant: {
        default: "border border-border shadow-md hover:border-primary/20",
        elevated: "shadow-lg hover:shadow-2xl border-0",
        gradient: "bg-gradient-to-br from-card via-card to-primary/5 border border-primary/10",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ResponsiveCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  image?: string
  title: string
  description: string
  buttonText?: string
  onButtonClick?: () => void
}

const ResponsiveCard = React.forwardRef<HTMLDivElement, ResponsiveCardProps>(
  ({ 
    className, 
    variant, 
    size, 
    image, 
    title, 
    description, 
    buttonText = "Learn More",
    onButtonClick,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, size, className }))}
        {...props}
      >
        {image && (
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        )}
        
        <div className="space-y-3">
          <h3 className="text-xl font-semibold leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
          
          <div className="pt-2">
            <Button 
              variant="gradient" 
              size="sm"
              onClick={onButtonClick}
              className="w-full sm:w-auto"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    )
  }
)
ResponsiveCard.displayName = "ResponsiveCard"

export { ResponsiveCard, cardVariants }