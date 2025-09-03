import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, MessageCircle, Star, Download, Eye } from "lucide-react"
import Link from "next/link"

export default function OrdersPage() {
  const orders = [
    {
      id: "ZA-2024-001234",
      date: "March 15, 2024",
      status: "processing",
      total: 225,
      items: [
        {
          name: "Traditional Kanga Set",
          quantity: 2,
          price: 45,
          artisan: "Amina Hassan",
          artisanId: 1,
          image: "/colorful-zanzibar-kanga-fabric.jpg",
        },
        {
          name: "Hand-Carved Dhow Boat",
          quantity: 1,
          price: 120,
          artisan: "Omar Khamis",
          artisanId: 2,
          image: "/zanzibar-wood-carving-dhow-boat.jpg",
        },
      ],
      estimatedDelivery: "March 20, 2024",
    },
    {
      id: "ZA-2024-001198",
      date: "March 8, 2024",
      status: "delivered",
      total: 85,
      items: [
        {
          name: "Silver Zanzibar Jewelry Set",
          quantity: 1,
          price: 85,
          artisan: "Fatma Ali",
          artisanId: 3,
          image: "/traditional-zanzibar-silver-jewelry.jpg",
        },
      ],
      deliveredDate: "March 12, 2024",
    },
    {
      id: "ZA-2024-001156",
      date: "February 28, 2024",
      status: "shipped",
      total: 95,
      items: [
        {
          name: "Cultural Painting - Stone Town",
          quantity: 1,
          price: 95,
          artisan: "Hassan Mwalimu",
          artisanId: 4,
          image: "/zanzibar-cultural-painting-art.jpg",
        },
      ],
      estimatedDelivery: "March 16, 2024",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "processing":
        return <Badge className="bg-yellow-500 text-white">Processing</Badge>
      case "shipped":
        return <Badge className="bg-blue-500 text-white">Shipped</Badge>
      case "delivered":
        return <Badge className="bg-green-500 text-white">Delivered</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
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

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">My Orders</h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="shipped">Shipped</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="space-y-6">
                {orders.map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                          <CardDescription>
                            Placed on {order.date} • {order.items.length} item
                            {order.items.length > 1 ? "s" : ""}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-3">
                          {getStatusBadge(order.status)}
                          <span className="font-semibold text-lg">${order.total}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Order Items */}
                        <div className="space-y-3">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex gap-4 p-3 border rounded-lg">
                              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium">{item.name}</h4>
                                <p className="text-sm text-muted-foreground">
                                  by{" "}
                                  <Link href={`/artisans/${item.artisanId}`} className="text-primary hover:underline">
                                    {item.artisan}
                                  </Link>
                                </p>
                                <div className="flex items-center gap-4 mt-1">
                                  <span className="text-sm">Qty: {item.quantity}</span>
                                  <span className="text-sm font-medium">${item.price * item.quantity}</span>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <Button size="sm" variant="outline">
                                  <MessageCircle className="w-3 h-3 mr-1" />
                                  Message
                                </Button>
                                {order.status === "delivered" && (
                                  <Button size="sm" variant="outline">
                                    <Star className="w-3 h-3 mr-1" />
                                    Review
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Order Status Info */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t">
                          <div className="text-sm text-muted-foreground">
                            {order.status === "delivered" ? (
                              <span>Delivered on {order.deliveredDate}</span>
                            ) : (
                              <span>Estimated delivery: {order.estimatedDelivery}</span>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-3 h-3 mr-1" />
                              View Details
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="w-3 h-3 mr-1" />
                              Invoice
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="processing" className="mt-6">
              <div className="space-y-6">
                {orders
                  .filter((order) => order.status === "processing")
                  .map((order) => (
                    <Card key={order.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <Package className="w-8 h-8 text-primary" />
                          <div className="flex-1">
                            <h3 className="font-semibold">Order #{order.id}</h3>
                            <p className="text-sm text-muted-foreground">
                              Your artisans are carefully crafting your items
                            </p>
                          </div>
                          <Badge className="bg-yellow-500 text-white">Processing</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="shipped" className="mt-6">
              <div className="space-y-6">
                {orders
                  .filter((order) => order.status === "shipped")
                  .map((order) => (
                    <Card key={order.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <Package className="w-8 h-8 text-blue-500" />
                          <div className="flex-1">
                            <h3 className="font-semibold">Order #{order.id}</h3>
                            <p className="text-sm text-muted-foreground">
                              On its way to you • Estimated delivery: {order.estimatedDelivery}
                            </p>
                          </div>
                          <Badge className="bg-blue-500 text-white">Shipped</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="delivered" className="mt-6">
              <div className="space-y-6">
                {orders
                  .filter((order) => order.status === "delivered")
                  .map((order) => (
                    <Card key={order.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <Package className="w-8 h-8 text-green-500" />
                          <div className="flex-1">
                            <h3 className="font-semibold">Order #{order.id}</h3>
                            <p className="text-sm text-muted-foreground">
                              Delivered on {order.deliveredDate} • How was your experience?
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Star className="w-3 h-3 mr-1" />
                              Review
                            </Button>
                            <Badge className="bg-green-500 text-white">Delivered</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
