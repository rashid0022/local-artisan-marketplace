import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Star, Heart, MessageCircle, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ZA</span>
              </div>
              <h1 className="text-xl font-bold text-foreground">Zanzibar Artisans</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors">
                Marketplace
              </Link>
              <Link href="/artisans" className="text-muted-foreground hover:text-foreground transition-colors">
                Artisans
              </Link>
              <Link href="/workshops" className="text-muted-foreground hover:text-foreground transition-colors">
                Workshops
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm">Join as Artisan</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Discover Authentic Zanzibar Craftsmanship
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Connect with local artisans, explore handmade treasures, and support traditional crafts. From Stone Town to
            Paje, find unique pieces that tell a story.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for wood carvings, textiles, paintings..."
                className="pl-12 pr-4 py-6 text-lg rounded-xl border-2"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg">Search</Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Badge variant="secondary" className="px-4 py-2">
              Wood Carving
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Textiles
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Paintings
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Jewelry
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Furniture
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Artisans</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Amina Hassan",
                craft: "Traditional Textiles",
                location: "Stone Town",
                rating: 4.9,
                image: "/zanzibar-woman-artisan-weaving-colorful-textiles.jpg",
                story: "Third generation textile artist specializing in vibrant kanga designs",
              },
              {
                name: "Omar Khamis",
                craft: "Wood Carving",
                location: "Paje",
                rating: 4.8,
                image: "/zanzibar-man-wood-carver-with-traditional-tools.jpg",
                story: "Master craftsman creating intricate dhow boats and cultural sculptures",
              },
              {
                name: "Fatma Ali",
                craft: "Henna Art & Jewelry",
                location: "Nungwi",
                rating: 5.0,
                image: "/zanzibar-woman-henna-artist-with-beautiful-jewelry.jpg",
                story: "Contemporary artist blending traditional henna with modern jewelry design",
              },
            ].map((artisan, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src={artisan.image || "/placeholder.svg"}
                    alt={artisan.name}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{artisan.name}</CardTitle>
                      <CardDescription className="font-medium text-primary">{artisan.craft}</CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{artisan.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{artisan.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{artisan.story}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      View Shop
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Wood Carving", image: "/zanzibar-wood-carving-dhow-boat.jpg", count: "120+ items" },
              { name: "Textiles", image: "/colorful-zanzibar-kanga-fabric.jpg", count: "85+ items" },
              { name: "Paintings", image: "/zanzibar-cultural-painting-art.jpg", count: "65+ items" },
              { name: "Jewelry", image: "/traditional-zanzibar-silver-jewelry.jpg", count: "95+ items" },
            ].map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-square relative">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-lg">{category.name}</h4>
                    <p className="text-sm opacity-90">{category.count}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">ZA</span>
                </div>
                <span className="font-bold">Zanzibar Artisans</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Connecting authentic Zanzibar craftsmanship with the world.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Marketplace</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Browse Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Find Artisans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Workshops
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Support</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Languages</h5>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  English
                </Button>
                <Button variant="outline" size="sm">
                  Kiswahili
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Zanzibar Artisans. Preserving culture, creating opportunities.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
