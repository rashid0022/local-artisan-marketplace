import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Package, MessageCircle, Download, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  const orderDetails = {
    orderNumber: "ZA-2024-001234",
    total: 225,
    estimatedDelivery: "3-5 business days",
    items: [
      {
        name: "Traditional Kanga Set",
        quantity: 2,
        artisan: "Amina Hassan",
        artisanId: 1,
      },
      {
        name: "Hand-Carved Dhow Boat",
        quantity: 1,
        artisan: "Omar Khamis",
        artisanId: 2,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
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
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>

          {/* Success Message */}
          <h2 className="text-3xl font-bold text-foreground mb-4">Order Confirmed!</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for supporting Zanzibar artisans. Your order has been successfully placed.
          </p>

          {/* Order Details Card */}
          <Card className="text-left mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Order #{orderDetails.orderNumber}</CardTitle>
                  <CardDescription>Estimated delivery: {orderDetails.estimatedDelivery}</CardDescription>
                </div>
                <Badge className="bg-primary text-primary-foreground">Confirmed</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {orderDetails.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        by{" "}
                        <Link href={`/artisans/${item.artisanId}`} className="text-primary hover:underline">
                          {item.artisan}
                        </Link>{" "}
                        • Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center pt-4 border-t font-semibold text-lg">
                <span>Total Paid</span>
                <span>${orderDetails.total}</span>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="text-center p-4">
              <Package className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Order Processing</h3>
              <p className="text-sm text-muted-foreground">Artisans are preparing your handmade items with care</p>
            </Card>
            <Card className="text-center p-4">
              <MessageCircle className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Stay Connected</h3>
              <p className="text-sm text-muted-foreground">You can message artisans directly about your order</p>
            </Card>
            <Card className="text-center p-4">
              <Download className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Order Updates</h3>
              <p className="text-sm text-muted-foreground">We'll send you email updates on your order status</p>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/orders">
                View Order Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/marketplace">Continue Shopping</Link>
            </Button>
          </div>

          {/* Support Message */}
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Our support team is here to help with any questions about your order or the artisans.
            </p>
            <Button variant="outline" size="sm">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
