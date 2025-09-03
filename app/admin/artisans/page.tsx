import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  CheckCircle,
  XCircle,
  Star,
  MapPin,
  Calendar,
  DollarSign,
  Package,
} from "lucide-react"
import Link from "next/link"

export default function AdminArtisansPage() {
  const artisans = [
    {
      id: 1,
      name: "Amina Hassan",
      craft: "Traditional Textiles",
      location: "Stone Town",
      joinDate: "March 2019",
      status: "active",
      verified: true,
      rating: 4.9,
      totalSales: 450,
      monthlyRevenue: 2340,
      products: 24,
      avatar: "/zanzibar-woman-artisan-weaving-colorful-textiles.jpg",
    },
    {
      id: 2,
      name: "Omar Khamis",
      craft: "Wood Carving",
      location: "Paje",
      joinDate: "January 2020",
      status: "active",
      verified: true,
      rating: 4.8,
      totalSales: 320,
      monthlyRevenue: 1890,
      products: 18,
      avatar: "/zanzibar-man-wood-carver-with-traditional-tools.jpg",
    },
    {
      id: 3,
      name: "Fatma Ali",
      craft: "Henna Art & Jewelry",
      location: "Nungwi",
      joinDate: "June 2021",
      status: "active",
      verified: true,
      rating: 5.0,
      totalSales: 280,
      monthlyRevenue: 1650,
      products: 32,
      avatar: "/zanzibar-woman-henna-artist-with-beautiful-jewelry.jpg",
    },
    {
      id: 4,
      name: "Hassan Mwalimu",
      craft: "Painting & Art",
      location: "Stone Town",
      joinDate: "September 2022",
      status: "inactive",
      verified: false,
      rating: 4.7,
      totalSales: 125,
      monthlyRevenue: 450,
      products: 15,
      avatar: "/zanzibar-male-painter-with-colorful-artwork.jpg",
    },
  ]

  const pendingApplications = [
    {
      id: 7,
      name: "Khadija Mwalimu",
      craft: "Pottery & Ceramics",
      location: "Jambiani",
      appliedDate: "March 10, 2024",
      experience: "8+ years",
      avatar: "/zanzibar-woman-potter-with-clay-ceramics.jpg",
    },
    {
      id: 8,
      name: "Salim Rashid",
      craft: "Metalwork",
      location: "Stone Town",
      appliedDate: "March 12, 2024",
      experience: "12+ years",
      avatar: "/zanzibar-male-metalworker-with-traditional-tools.jpg",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500 text-white">Active</Badge>
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>
      case "suspended":
        return <Badge className="bg-red-500 text-white">Suspended</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
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
              <Link href="/admin/artisans" className="text-foreground font-medium">
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
          <h2 className="text-3xl font-bold text-foreground mb-2">Artisan Management</h2>
          <p className="text-muted-foreground">Manage artisan profiles, applications, and verification status</p>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Active Artisans</TabsTrigger>
            <TabsTrigger value="pending">Pending Applications</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle>Active Artisans</CardTitle>
                    <CardDescription>Manage verified and active artisan accounts</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input placeholder="Search artisans..." className="pl-10 w-64" />
                    </div>
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                        <SelectItem value="suspended">Suspended</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {artisans.map((artisan) => (
                    <div key={artisan.id} className="border rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={artisan.avatar || "/placeholder.svg"} alt={artisan.name} />
                          <AvatarFallback>
                            {artisan.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-lg font-semibold">{artisan.name}</h3>
                                {artisan.verified && <CheckCircle className="w-4 h-4 text-primary" />}
                                {getStatusBadge(artisan.status)}
                              </div>
                              <p className="text-primary font-medium">{artisan.craft}</p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  <span>{artisan.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>Joined {artisan.joinDate}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                  <span>{artisan.rating}</span>
                                </div>
                              </div>
                            </div>
                            <Button variant="outline" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="text-center p-3 bg-muted rounded-lg">
                              <div className="flex items-center justify-center gap-1 mb-1">
                                <DollarSign className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm font-medium">Revenue</span>
                              </div>
                              <p className="text-lg font-bold">${artisan.monthlyRevenue}</p>
                              <p className="text-xs text-muted-foreground">This month</p>
                            </div>
                            <div className="text-center p-3 bg-muted rounded-lg">
                              <div className="flex items-center justify-center gap-1 mb-1">
                                <Package className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm font-medium">Products</span>
                              </div>
                              <p className="text-lg font-bold">{artisan.products}</p>
                              <p className="text-xs text-muted-foreground">Active listings</p>
                            </div>
                            <div className="text-center p-3 bg-muted rounded-lg">
                              <div className="flex items-center justify-center gap-1 mb-1">
                                <Star className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm font-medium">Sales</span>
                              </div>
                              <p className="text-lg font-bold">{artisan.totalSales}</p>
                              <p className="text-xs text-muted-foreground">Total orders</p>
                            </div>
                            <div className="text-center p-3 bg-muted rounded-lg">
                              <div className="flex items-center justify-center gap-1 mb-1">
                                <Star className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm font-medium">Rating</span>
                              </div>
                              <p className="text-lg font-bold">{artisan.rating}</p>
                              <p className="text-xs text-muted-foreground">Average rating</p>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-3 h-3 mr-1" />
                              View Profile
                            </Button>
                            <Button size="sm" variant="outline">
                              Edit Details
                            </Button>
                            {artisan.status === "active" ? (
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 hover:text-red-700 bg-transparent"
                              >
                                <XCircle className="w-3 h-3 mr-1" />
                                Suspend
                              </Button>
                            ) : (
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Activate
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pending" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Applications</CardTitle>
                <CardDescription>Review and approve new artisan registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {pendingApplications.map((application) => (
                    <div key={application.id} className="border rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={application.avatar || "/placeholder.svg"} alt={application.name} />
                          <AvatarFallback>
                            {application.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-lg font-semibold">{application.name}</h3>
                              <p className="text-primary font-medium">{application.craft}</p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  <span>{application.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>Applied {application.appliedDate}</span>
                                </div>
                                <span>Experience: {application.experience}</span>
                              </div>
                            </div>
                            <Badge variant="outline">Pending Review</Badge>
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-3 h-3 mr-1" />
                              Review Application
                            </Button>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 hover:text-red-700 bg-transparent"
                            >
                              <XCircle className="w-3 h-3 mr-1" />
                              Reject
                            </Button>
                          </div>
                        </div>
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
                  <CardTitle>Artisan Growth</CardTitle>
                  <CardDescription>New artisan registrations over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>This Month</span>
                      <span className="font-bold text-primary">+12 artisans</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Last Month</span>
                      <span className="font-bold">+8 artisans</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Growth Rate</span>
                      <span className="font-bold text-green-600">+50%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Craft Distribution</CardTitle>
                  <CardDescription>Artisans by craft category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { craft: "Textiles", count: 45, percentage: 30 },
                      { craft: "Wood Carving", count: 32, percentage: 21 },
                      { craft: "Jewelry", count: 28, percentage: 18 },
                      { craft: "Painting", count: 25, percentage: 16 },
                      { craft: "Pottery", count: 15, percentage: 10 },
                      { craft: "Metalwork", count: 8, percentage: 5 },
                    ].map((item, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{item.craft}</span>
                          <span>{item.count} artisans</span>
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
        </Tabs>
      </div>
    </div>
  )
}
