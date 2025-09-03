"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Heart, MessageCircle, Share2, ShoppingBag, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"
import { MessageComposer } from "@/components/message-composer"

// This would typically come from a database or API
const artisan = {
  id: 1,
  name: "Amina Hassan",
  craft: "Traditional Textiles",
  location: "Stone Town",
  rating: 4.9,
  reviewCount: 127,
  image: "/zanzibar-woman-artisan-weaving-colorful-textiles.jpg",
  coverImage: "/zanzibar-textile-workshop-colorful-fabrics.jpg",
  story: "Third generation textile artist specializing in vibrant kanga designs",
  fullBio: `Amina Hassan comes from a long line of textile artists in Stone Town. Her grandmother taught her the traditional techniques of kanga weaving when she was just 12 years old. Today, she combines these time-honored methods with contemporary designs, creating pieces that honor Zanzibar's rich cultural heritage while appealing to modern tastes.

Her workshop, located in the heart of Stone Town, is a vibrant space filled with colorful threads and traditional looms. Amina is passionate about preserving the art of kanga making and regularly teaches workshops to both locals and visitors who want to learn this beautiful craft.

Each piece she creates tells a story, often incorporating traditional Swahili sayings and symbols that have been passed down through generations. Her work has been featured in several cultural exhibitions and she's proud to be keeping this important tradition alive.`,
  experience: "15+ years",
  verified: true,
  joinedDate: "March 2019",
  totalSales: 450,
  responseTime: "Within 2 hours",
  languages: ["English", "Kiswahili"],
  specialties: ["Kanga Textiles", "Traditional Weaving", "Custom Designs", "Cultural Workshops"],
}

const products = [
  {
    id: 1,
    name: "Traditional Kanga Set",
    price: 45,
    image: "/colorful-zanzibar-kanga-fabric.jpg",
    rating: 4.8,
    sales: 23,
  },
  {
    id: 2,
    name: "Custom Wedding Kanga",
    price: 85,
    image: "/wedding-kanga-fabric-gold-details.jpg",
    rating: 5.0,
    sales: 12,
  },
  {
    id: 3,
    name: "Baby Kanga Collection",
    price: 35,
    image: "/baby-kanga-soft-colors.jpg",
    rating: 4.9,
    sales: 18,
  },
  {
    id: 4,
    name: "Festival Celebration Kanga",
    price: 55,
    image: "/festival-kanga-bright-patterns.jpg",
    rating: 4.7,
    sales: 15,
  },
]

const reviews = [
  {
    id: 1,
    author: "Sarah Johnson",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Absolutely beautiful work! The kanga I ordered exceeded my expectations. Amina was so helpful in explaining the cultural significance of the patterns.",
    verified: true,
  },
  {
    id: 2,
    author: "Mohamed Ali",
    rating: 5,
    date: "1 month ago",
    comment:
      "Excellent craftsmanship and fast delivery. The colors are vibrant and the quality is outstanding. Highly recommend!",
    verified: true,
  },
  {
    id: 3,
    author: "Emma Thompson",
    rating: 4,
    date: "2 months ago",
    comment:
      "Beautiful textiles with authentic designs. Great communication throughout the process. Will definitely order again.",
    verified: true,
  },
]

export default function ArtisanProfilePage() {
  const [isMessageComposerOpen, setIsMessageComposerOpen] = useState(false)

  const handleSendMessage = (message: string) => {
    // Handle sending message to artisan
    console.log("Sending message:", message)
    // Redirect to messages page or show success
  }

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

      {/* Cover Image */}
      <div className="h-64 md:h-80 relative">
        <img
          src={artisan.coverImage || "/placeholder.svg"}
          alt={`${artisan.name}'s workshop`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Profile Header */}
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-shrink-0">
            <Avatar className="w-32 h-32 border-4 border-background">
              <AvatarImage src={artisan.image || "/placeholder.svg"} alt={artisan.name} />
              <AvatarFallback className="text-2xl">
                {artisan.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1 bg-card rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold text-foreground">{artisan.name}</h1>
                  {artisan.verified && (
                    <Badge className="bg-primary text-primary-foreground">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-xl text-primary font-medium mb-2">{artisan.craft}</p>
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{artisan.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{artisan.rating}</span>
                    <span>({artisan.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {artisan.joinedDate}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{artisan.story}</p>
              </div>

              <div className="flex flex-col gap-2 min-w-fit">
                <Button onClick={() => setIsMessageComposerOpen(true)} className="w-full md:w-auto">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Artisan
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{artisan.totalSales}</div>
              <div className="text-sm text-muted-foreground">Total Sales</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{products.length}</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{artisan.experience}</div>
              <div className="text-sm text-muted-foreground">Experience</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{artisan.responseTime}</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="workshops">Workshops</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base line-clamp-1">{product.name}</CardTitle>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">${product.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{product.sales} sold</span>
                      <Button size="sm">
                        <ShoppingBag className="w-3 h-3 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>About {artisan.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none">
                      {artisan.fullBio.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Specialties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {artisan.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {artisan.languages.map((language, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span>{language}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Customer Reviews</h3>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-bold">{artisan.rating}</span>
                  <span className="text-muted-foreground">({artisan.reviewCount} reviews)</span>
                </div>
              </div>

              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarFallback>
                            {review.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium">{review.author}</span>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Verified Purchase
                              </Badge>
                            )}
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="workshops" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Workshops</CardTitle>
                <CardDescription>Learn traditional textile techniques directly from {artisan.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Traditional Kanga Weaving Workshop</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Learn the ancient art of kanga weaving in this hands-on workshop. Perfect for beginners and those
                      interested in Zanzibar's textile traditions.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        <span>Duration: 3 hours</span> • <span>Max 8 participants</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">$45</span>
                        <Button size="sm">Book Now</Button>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Cultural Storytelling & Textile History</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Discover the stories behind traditional patterns and learn about the cultural significance of
                      Zanzibar textiles.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        <span>Duration: 2 hours</span> • <span>Max 12 participants</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">$25</span>
                        <Button size="sm">Book Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <MessageComposer
        artisan={artisan}
        isOpen={isMessageComposerOpen}
        onClose={() => setIsMessageComposerOpen(false)}
        onSend={handleSendMessage}
      />
    </div>
  )
}
