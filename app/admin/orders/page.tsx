import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Eye, Download, Truck, CheckCircle, Clock, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function AdminOrdersPage() {
  const orders = [
    {
      id: "ZA-2024-001234",
      customer: "Sarah Johnson",
      artisan: "Amina Hassan",
      items: [
        { name: "Traditional Kanga Set", quantity: 2, price: 45 },
        { name: "Custom Wedding Kanga", quantity: 1, price: 85 },
      ],
      total: 175,
      status: "processing",
      paymentStatus: "paid",
      date: "2024-03-15",
      estimatedDelivery: "2024-03-20",
    },
    {
      id: "ZA-2024-001233",
      customer: "Mohamed Ali",
      artisan: "Omar Khamis",
      items: [{ name: "Hand-Carved Dhow Boat", quantity: 1, price: 120 }],
      total: 120,
      status: "shipped",
      paymentStatus: "paid",
      date: "2024-03-14",
      estimatedDelivery: "2024-03-18",
    },
    {
      id: "ZA-2024-001232",
      customer: "Emma Thompson",
      artisan: "Fatma Ali",
      items: [{ name: "Silver Zanzibar Jewelry Set", quantity: 1, price: 85 }],
      total: 85,
      status: "delivered",
      paymentStatus: "paid",
      date: "2024-03-12",
      deliveredDate: "2024-03-16",
    },
    {
      id: "ZA-2024-001231",
      customer: "John Smith",
      artisan: "Hassan Mwalimu",
      items: [{ name: "Cultural Painting - Stone Town", quantity: 1, price: 95 }],
      total: 95,
      status: "cancelled",
      paymentStatus: "refunded",
      date: "2024-03-10",
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
      case "cancelled":
        return <Badge className="bg-red-500 text-white">Cancelled</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPaymentBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-500 text-white">Paid</Badge>
      case "pending":
        return <Badge className="bg-yellow-500 text-white">Pending</Badge>
      case "refunded":
        return <Badge className="bg-gray-500 text-white">Refunded</Badge>
      case "failed":
        return <Badge className="bg-red-500 text-white">Failed</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const orderStats = {
    total: orders.length,
    processing: orders.filter((o) => o.status === "processing").length,
    shipped: orders.filter((o) => o.status === "shipped").length,
    delivered: orders.filter((o) => o.status === "delivered").length,
    cancelled: orders.filter((o) => o.status === "cancelled").length,
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/admin" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">ZA</span>
                </div>
                <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </Link>
              <Link href="/admin/artisans" className="text-muted-foreground hover:text-foreground transition-colors">
                Artisans
              </Link>
              <Link href="/admin/orders" className="text-foreground font-medium">
                Orders
              </Link>
              <Link href="/admin/reports" className="text-muted-foreground hover:text-foreground transition-colors">
                Reports
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                Admin User
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Order Management</h2>
          <p className="text-muted-foreground">Monitor and manage all platform orders</p>
        </div>

        {/* Order Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{orderStats.total}</div>
              <div className="text-sm text-muted-foreground">Total Orders</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{orderStats.processing}</div>
              <div className="text-sm text-muted-foreground">Processing</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{orderStats.shipped}</div>
              <div className="text-sm text-muted-foreground">Shipped</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{orderStats.delivered}</div>
              <div className="text-sm text-muted-foreground">Delivered</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{orderStats.cancelled}</div>
              <div className="text-sm text-muted-foreground">Cancelled</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
            <TabsTrigger value="issues">Issues</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle>All Orders</CardTitle>
                    <CardDescription>Complete order history and management</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input placeholder="Search orders..." className="pl-10 w-64" />
                    </div>
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="shipped">Shipped</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Filter className="w-4 h-4" />
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold">Order #{order.id.split("-").pop()}</h3>
                            {getStatusBadge(order.status)}
                            {getPaymentBadge(order.paymentStatus)}
                          </div>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>
                              <strong>Customer:</strong> {order.customer}
                            </p>
                            <p>
                              <strong>Artisan:</strong> {order.artisan}
                            </p>
                            <p>
                              <strong>Order Date:</strong> {order.date}
                            </p>
                            {order.estimatedDelivery && (
                              <p>
                                <strong>Est. Delivery:</strong> {order.estimatedDelivery}
                              </p>
                            )}
                            {order.deliveredDate && (
                              <p>
                                <strong>Delivered:</strong> {order.deliveredDate}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">${order.total}</p>
                          <div className="flex gap-2 mt-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-3 h-3 mr-1" />
                              View
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="w-3 h-3 mr-1" />
                              Invoice
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <h4 className="font-medium mb-2">Order Items:</h4>
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>
                                {item.name} × {item.quantity}
                              </span>
                              <span>${item.price * item.quantity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="processing" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Processing Orders</CardTitle>
                <CardDescription>Orders currently being prepared by artisans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders
                    .filter((order) => order.status === "processing")
                    .map((order) => (
                      <div key={order.id} className="flex items-center gap-4 p-4 border rounded-lg">
                        <Clock className="w-8 h-8 text-yellow-500" />
                        <div className="flex-1">
                          <h3 className="font-semibold">Order #{order.id.split("-").pop()}</h3>
                          <p className="text-sm text-muted-foreground">
                            {order.customer} • {order.artisan} • ${order.total}
                          </p>
                          <p className="text-xs text-muted-foreground">Est. completion: {order.estimatedDelivery}</p>
                        </div>
                        <Button size="sm">Contact Artisan</Button>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipped" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipped Orders</CardTitle>
                <CardDescription>Orders currently in transit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders
                    .filter((order) => order.status === "shipped")
                    .map((order) => (
                      <div key={order.id} className="flex items-center gap-4 p-4 border rounded-lg">
                        <Truck className="w-8 h-8 text-blue-500" />
                        <div className="flex-1">
                          <h3 className="font-semibold">Order #{order.id.split("-").pop()}</h3>
                          <p className="text-sm text-muted-foreground">
                            {order.customer} • {order.artisan} • ${order.total}
                          </p>
                          <p className="text-xs text-muted-foreground">Est. delivery: {order.estimatedDelivery}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Track Package
                        </Button>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="delivered" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Delivered Orders</CardTitle>
                <CardDescription>Successfully completed orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders
                    .filter((order) => order.status === "delivered")
                    .map((order) => (
                      <div key={order.id} className="flex items-center gap-4 p-4 border rounded-lg">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                        <div className="flex-1">
                          <h3 className="font-semibold">Order #{order.id.split("-").pop()}</h3>
                          <p className="text-sm text-muted-foreground">
                            {order.customer} • {order.artisan} • ${order.total}
                          </p>
                          <p className="text-xs text-muted-foreground">Delivered: {order.deliveredDate}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          View Feedback
                        </Button>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="issues" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Orders with Issues</CardTitle>
                <CardDescription>Cancelled orders and disputes requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders
                    .filter((order) => order.status === "cancelled")
                    .map((order) => (
                      <div key={order.id} className="flex items-center gap-4 p-4 border rounded-lg">
                        <AlertTriangle className="w-8 h-8 text-red-500" />
                        <div className="flex-1">
                          <h3 className="font-semibold">Order #{order.id.split("-").pop()}</h3>
                          <p className="text-sm text-muted-foreground">
                            {order.customer} • {order.artisan} • ${order.total}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Cancelled on {order.date} • Payment {order.paymentStatus}
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          Review Case
                        </Button>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
