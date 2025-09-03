import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Heart, Star, ShoppingBag, Grid3X3, List } from "lucide-react"
import Link from "next/link"

export default function MarketplacePage() {
  const products = [
    {
      id: 1,
      name: "Traditional Kanga Set",
      price: 45,
      originalPrice: 60,
      image: "/colorful-zanzibar-kanga-fabric.jpg",
      artisan: "Amina Hassan",
      artisanId: 1,
      rating: 4.8,
      reviewCount: 23,
      category: "Textiles",
      isOnSale: true,
      isFeatured: true,
    },
    {
      id: 2,
      name: "Hand-Carved Dhow Boat",
      price: 120,
      image: "/zanzibar-wood-carving-dhow-boat.jpg",
      artisan: "Omar Khamis",
      artisanId: 2,
      rating: 4.9,
      reviewCount: 18,
      category: "Wood Carving",
      isOnSale: false,
      isFeatured: true,
    },
    {
      id: 3,
      name: "Silver Zanzibar Jewelry Set",
      price: 85,
      image: "/traditional-zanzibar-silver-jewelry.jpg",
      artisan: "Fatma Ali",
      artisanId: 3,
      rating: 5.0,
      reviewCount: 32,
      category: "Jewelry",
      isOnSale: false,
      isFeatured: false,
    },
    {
      id: 4,
      name: "Cultural Painting - Stone Town",
      price: 95,
      image: "/zanzibar-cultural-painting-art.jpg",
      artisan: "Hassan Mwalimu",
      artisanId: 4,
      rating: 4.7,
      reviewCount: 15,
      category: "Painting",
      isOnSale: false,
      isFeatured: false,
    },
    {
      id: 5,
      name: "Handmade Ceramic Bowl Set",
      price: 35,
      originalPrice: 45,
      image: "/zanzibar-ceramic-bowls-traditional.jpg",
      artisan: "Mwajuma Said",
      artisanId: 5,
      rating: 4.6,
      reviewCount: 21,
      category: "Pottery",
      isOnSale: true,
      isFeatured: false,
    },
    {
      id: 6,
      name: "Traditional Door Knocker",
      price: 75,
      image: "/zanzibar-brass-door-knocker-traditional.jpg",
      artisan: "Ali Mfalme",
      artisanId: 6,
      rating: 4.9,
      reviewCount: 12,
      category: "Metalwork",
      isOnSale: false,
      isFeatured: false,
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
              <Link href="/marketplace" className="text-foreground font-medium">
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

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search Products</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="Search..." className="pl-10" />
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Categories</label>
                  <div className="space-y-2">
                    {["All", "Textiles", "Wood Carving", "Jewelry", "Painting", "Pottery", "Metalwork"].map(
                      (category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={category} />
                          <label htmlFor={category} className="text-sm">
                            {category}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Price Range</label>
                  <div className="px-2">
                    <Slider defaultValue={[0, 200]} max={200} step={5} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>$0</span>
                      <span>$200+</span>
                    </div>
                  </div>
                </div>

                {/* Artisan Location */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Location</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="stone-town">Stone Town</SelectItem>
                      <SelectItem value="paje">Paje</SelectItem>
                      <SelectItem value="nungwi">Nungwi</SelectItem>
                      <SelectItem value="jambiani">Jambiani</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Special Offers */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Special Offers</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="on-sale" />
                      <label htmlFor="on-sale" className="text-sm">
                        On Sale
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="featured" />
                      <label htmlFor="featured" className="text-sm">
                        Featured
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Marketplace</h2>
                <p className="text-muted-foreground">Discover authentic handmade products from Zanzibar artisans</p>
              </div>
              <div className="flex items-center gap-2">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex border rounded-lg">
                  <Button variant="ghost" size="sm" className="rounded-r-none">
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-l-none">
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {products.length} of {products.length} products
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-square relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-3 right-3 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                    {product.isOnSale && (
                      <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">Sale</Badge>
                    )}
                    {product.isFeatured && !product.isOnSale && (
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Featured</Badge>
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base line-clamp-2">{product.name}</CardTitle>
                    <CardDescription className="text-sm">
                      by{" "}
                      <Link
                        href={`/artisans/${product.artisanId}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {product.artisan}
                      </Link>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-primary">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <Button size="sm">
                        <ShoppingBag className="w-3 h-3 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
