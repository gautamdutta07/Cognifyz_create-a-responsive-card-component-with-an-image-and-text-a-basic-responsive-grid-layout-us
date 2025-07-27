import { ResponsiveCard } from "@/components/ui/responsive-card"
import { ResponsiveGrid } from "@/components/ui/responsive-grid"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

// Import generated images
import card1Image from "@/assets/card-1.jpg"
import card2Image from "@/assets/card-2.jpg"
import card3Image from "@/assets/card-3.jpg"
import card4Image from "@/assets/card-4.jpg"

const Index = () => {
  const { toast } = useToast()

  const cardData = [
    {
      id: 1,
      image: card1Image,
      title: "Modern Web Development",
      description: "Explore the latest tools and frameworks for building responsive, accessible web applications with cutting-edge technologies.",
      buttonText: "Explore Tools"
    },
    {
      id: 2,
      image: card2Image,
      title: "Design Systems",
      description: "Learn how to create consistent, scalable design patterns that enhance user experience across all platforms.",
      buttonText: "View Designs"
    },
    {
      id: 3,
      image: card3Image,
      title: "Data Visualization",
      description: "Transform complex data into beautiful, interactive dashboards that tell compelling stories and drive decisions.",
      buttonText: "See Examples"
    },
    {
      id: 4,
      image: card4Image,
      title: "Creative Solutions",
      description: "Discover innovative approaches to common challenges in user interface design and development workflows.",
      buttonText: "Get Inspired"
    }
  ]

  const handleCardClick = (title: string) => {
    toast({
      title: "Card Clicked!",
      description: `You clicked on "${title}" card`,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Front-end{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Frameworks
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Responsive card components with images and text, built using modern front-end 
            frameworks. Implementing a basic responsive grid layout for optimal user experience.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="gradient" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Cards Grid Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Responsive Card Components
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Each card adapts beautifully to different screen sizes while maintaining 
              consistent spacing and visual hierarchy.
            </p>
          </div>

          <ResponsiveGrid 
            columns={{ default: 1, sm: 2, lg: 3, xl: 4 }}
            gap={6}
            className="mb-12"
          >
            {cardData.map((card) => (
              <ResponsiveCard
                key={card.id}
                variant="elevated"
                image={card.image}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                onButtonClick={() => handleCardClick(card.title)}
                className="h-full"
              />
            ))}
          </ResponsiveGrid>

          {/* Additional Grid Demonstration */}
          <div className="text-center">
            <h3 className="mb-6 text-2xl font-semibold text-foreground">
              Flexible Grid Layout
            </h3>
            <ResponsiveGrid
              columns={{ default: 1, md: 2, lg: 3 }}
              gap={4}
            >
              <div className="rounded-lg bg-primary/10 p-6 text-center">
                <h4 className="mb-2 font-semibold text-primary">Mobile First</h4>
                <p className="text-sm text-muted-foreground">
                  Single column on mobile devices
                </p>
              </div>
              <div className="rounded-lg bg-secondary/10 p-6 text-center">
                <h4 className="mb-2 font-semibold text-secondary">Tablet Ready</h4>
                <p className="text-sm text-muted-foreground">
                  Two columns on medium screens
                </p>
              </div>
              <div className="rounded-lg bg-accent/20 p-6 text-center">
                <h4 className="mb-2 font-semibold text-accent-foreground">Desktop Optimized</h4>
                <p className="text-sm text-muted-foreground">
                  Three columns on large screens
                </p>
              </div>
            </ResponsiveGrid>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Index