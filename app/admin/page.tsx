import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Star,
  MessageSquare,
  Eye,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboardPage() {
  const stats = {
    totalArtisans: 156,
    activeArtisans: 142,
    totalOrders: 1247,
    monthlyRevenue: 45680,
    pendingVerifications: 8,
    activeDisputes: 3,
  }

  const recentOrders = [
    {
      id: "ZA-2024-001234",
      customer: "Sarah Johnson",
      artisan: "Amina Hassan",
      total: 225,
      status: "processing",
      date: "2024-03-15",
    },
    {
      id: "ZA-2024-001233",
      customer: "Mohamed Ali",
      artisan: "Omar Khamis",
      total: 120,
      status: "shipped",
      date: "2024-03-15",
    },
    {
      id: "ZA-2024-001232",
      customer: "Emma Thompson",
      artisan: "Fatma Ali",
      total: 85,
      status: "delivered",
      date: "2024-03-14",
    },
  ]

  const pendingArtisans = [
    {
      id: 7,
      name: "Khadija Mwalimu",
      craft: "Pottery & Ceramics",
      location: "Jambiani",
      appliedDate: "2024-03-10",
      avatar: "/zanzibar-woman-potter-with-clay-ceramics.jpg",
    },
    {
      id: 8,
      name: "Salim Rashid",
      craft: "Metalwork",
      location: "Stone Town",
      appliedDate: "2024-03-12",
      avatar: "/zanzibar-male-metalworker-with-traditional-tools.jpg",
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
                <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/admin" className="text-foreground font-medium">
                Dashboard
              </Link>
              <Link href="/admin/artisans" className="text-muted-foreground hover:text-foreground transition-colors">
                Artisans
              </Link>
              <Link href="/admin/orders" className="text-muted-foreground hover:text-foreground transition-colors">
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
          <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h2>
          <p className="text-muted-foreground">Monitor and manage the Zanzibar Artisan Platform</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Artisans</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalArtisans}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Orders</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalOrders}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+23%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.monthlyRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+18%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Artisans</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeArtisans}</div>
              <p className="text-xs text-muted-foreground">{stats.totalArtisans - stats.activeArtisans} inactive</p>
            </CardContent>
          </Card>
        </div>

        {/* Alert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <CardTitle className="text-lg">Pending Verifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-yellow-700 mb-2">{stats.pendingVerifications}</p>
              <p className="text-sm text-yellow-600 mb-4">Artisan applications awaiting review</p>
              <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                Review Applications
              </Button>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
            <CardHeader>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-red-600" />
                <CardTitle className="text-lg">Active Disputes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-red-700 mb-2">{stats.activeDisputes}</p>
              <p className="text-sm text-red-600 mb-4">Customer-artisan disputes requiring attention</p>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                Resolve Disputes
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders">Recent Orders</TabsTrigger>
            <TabsTrigger value="artisans">Pending Artisans</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest orders from the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div>
                          <h4 className="font-semibold">Order #{order.id.split("-").pop()}</h4>
                          <p className="text-sm text-muted-foreground">
                            {order.customer} → {order.artisan}
                          </p>
                          <p className="text-xs text-muted-foreground">{order.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold">${order.total}</p>
                          {getStatusBadge(order.status)}
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="artisans" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Artisan Applications</CardTitle>
                <CardDescription>Review and approve new artisan registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingArtisans.map((artisan) => (
                    <div key={artisan.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={artisan.avatar || "/placeholder.svg"} alt={artisan.name} />
                          <AvatarFallback>
                            {artisan.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{artisan.name}</h4>
                          <p className="text-sm text-muted-foreground">{artisan.craft}</p>
                          <p className="text-xs text-muted-foreground">
                            {artisan.location} • Applied {artisan.appliedDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Review
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Artisans</CardTitle>
                  <CardDescription>Based on sales and ratings this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Amina Hassan", craft: "Textiles", sales: 45, rating: 4.9 },
                      { name: "Omar Khamis", craft: "Wood Carving", sales: 32, rating: 4.8 },
                      { name: "Fatma Ali", craft: "Jewelry", sales: 28, rating: 5.0 },
                    ].map((artisan, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{artisan.name}</p>
                          <p className="text-sm text-muted-foreground">{artisan.craft}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{artisan.sales} sales</p>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{artisan.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Categories</CardTitle>
                  <CardDescription>Most ordered product categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { category: "Textiles", orders: 156, percentage: 35 },
                      { category: "Wood Carving", orders: 98, percentage: 22 },
                      { category: "Jewelry", orders: 87, percentage: 20 },
                      { category: "Paintings", orders: 65, percentage: 15 },
                      { category: "Pottery", orders: 34, percentage: 8 },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{item.category}</span>
                          <span className="text-sm text-muted-foreground">{item.orders} orders</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Settings</CardTitle>
                  <CardDescription>Configure platform-wide settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Commission Rate</p>
                      <p className="text-sm text-muted-foreground">Platform commission on sales</p>
                    </div>
                    <Badge variant="outline">5%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Auto-approve Artisans</p>
                      <p className="text-sm text-muted-foreground">Automatically approve verified artisans</p>
                    </div>
                    <Badge variant="outline">Disabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Minimum Order Value</p>
                      <p className="text-sm text-muted-foreground">Minimum order for free shipping</p>
                    </div>
                    <Badge variant="outline">$50</Badge>
                  </div>
                  <Button className="w-full">Update Settings</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                  <CardDescription>Current system health and status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Payment Gateway</p>
                      <p className="text-sm text-muted-foreground">Stripe & Mobile Money</p>
                    </div>
                    <Badge className="bg-green-500 text-white">Online</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Service</p>
                      <p className="text-sm text-muted-foreground">Notification delivery</p>
                    </div>
                    <Badge className="bg-green-500 text-white">Online</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">File Storage</p>
                      <p className="text-sm text-muted-foreground">Image and document storage</p>
                    </div>
                    <Badge className="bg-green-500 text-white">Online</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Database</p>
                      <p className="text-sm text-muted-foreground">Primary database connection</p>
                    </div>
                    <Badge className="bg-green-500 text-white">Online</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
