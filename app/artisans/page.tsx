import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Star, Heart, MessageCircle, ShoppingBag, Filter } from "lucide-react"
import Link from "next/link"

export default function ArtisansPage() {
  const artisans = [
    {
      id: 1,
      name: "Amina Hassan",
      craft: "Traditional Textiles",
      location: "Stone Town",
      rating: 4.9,
      reviewCount: 127,
      image: "/zanzibar-woman-artisan-weaving-colorful-textiles.jpg",
      story: "Third generation textile artist specializing in vibrant kanga designs",
      experience: "15+ years",
      verified: true,
      products: 24,
    },
    {
      id: 2,
      name: "Omar Khamis",
      craft: "Wood Carving",
      location: "Paje",
      rating: 4.8,
      reviewCount: 89,
      image: "/zanzibar-man-wood-carver-with-traditional-tools.jpg",
      story: "Master craftsman creating intricate dhow boats and cultural sculptures",
      experience: "20+ years",
      verified: true,
      products: 18,
    },
    {
      id: 3,
      name: "Fatma Ali",
      craft: "Henna Art & Jewelry",
      location: "Nungwi",
      rating: 5.0,
      reviewCount: 156,
      image: "/zanzibar-woman-henna-artist-with-beautiful-jewelry.jpg",
      story: "Contemporary artist blending traditional henna with modern jewelry design",
      experience: "8+ years",
      verified: true,
      products: 32,
    },
    {
      id: 4,
      name: "Hassan Mwalimu",
      craft: "Painting & Art",
      location: "Stone Town",
      rating: 4.7,
      reviewCount: 73,
      image: "/zanzibar-male-painter-with-colorful-artwork.jpg",
      story: "Contemporary painter capturing Zanzibar's vibrant culture and history",
      experience: "12+ years",
      verified: false,
      products: 15,
    },
    {
      id: 5,
      name: "Mwajuma Said",
      craft: "Pottery & Ceramics",
      location: "Jambiani",
      rating: 4.6,
      reviewCount: 45,
      image: "/zanzibar-woman-potter-with-clay-ceramics.jpg",
      story: "Traditional potter creating functional and decorative ceramics",
      experience: "10+ years",
      verified: true,
      products: 21,
    },
    {
      id: 6,
      name: "Ali Mfalme",
      craft: "Metalwork",
      location: "Stone Town",
      rating: 4.9,
      reviewCount: 92,
      image: "/zanzibar-male-metalworker-with-traditional-tools.jpg",
      story: "Skilled metalworker specializing in traditional Swahili door designs",
      experience: "18+ years",
      verified: true,
      products: 12,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">ZA</span>
                </div>
                <h1 className="text-xl font-bold text-foreground">Zanzibar Artisans</h1>
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors">
                Marketplace
              </Link>
              <Link href="/artisans" className="text-foreground font-medium">
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
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Meet Our Talented Artisans</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Discover the skilled craftspeople behind Zanzibar's authentic handmade treasures. Each artisan brings
              generations of tradition and personal creativity to their work.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input placeholder="Search artisans by name or craft..." className="pl-12" />
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Craft Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Crafts</SelectItem>
                    <SelectItem value="textiles">Textiles</SelectItem>
                    <SelectItem value="wood-carving">Wood Carving</SelectItem>
                    <SelectItem value="jewelry">Jewelry</SelectItem>
                    <SelectItem value="painting">Painting</SelectItem>
                    <SelectItem value="pottery">Pottery</SelectItem>
                    <SelectItem value="metalwork">Metalwork</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="stone-town">Stone Town</SelectItem>
                    <SelectItem value="paje">Paje</SelectItem>
                    <SelectItem value="nungwi">Nungwi</SelectItem>
                    <SelectItem value="jambiani">Jambiani</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artisans.map((artisan) => (
              <Card key={artisan.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                  {artisan.verified && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Verified</Badge>
                  )}
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
                      <span className="text-xs text-muted-foreground">({artisan.reviewCount})</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{artisan.location}</span>
                    <span className="text-sm">• {artisan.experience}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{artisan.story}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{artisan.products} products</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={`/artisans/${artisan.id}`}>
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        View Profile
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Artisans
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
