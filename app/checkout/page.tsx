"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Smartphone, Banknote, Truck, Home, Lock } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [deliveryMethod, setDeliveryMethod] = useState("delivery")
  const [isProcessing, setIsProcessing] = useState(false)

  const cartItems = [
    {
      id: 1,
      name: "Traditional Kanga Set",
      price: 45,
      quantity: 2,
      artisan: "Amina Hassan",
    },
    {
      id: 2,
      name: "Hand-Carved Dhow Boat",
      price: 120,
      quantity: 1,
      artisan: "Omar Khamis",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = deliveryMethod === "delivery" ? 15 : 0
  const total = subtotal + shipping

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Redirect to success page
      window.location.href = "/checkout/success"
    }, 3000)
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
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Checkout</h2>
            <p className="text-muted-foreground">Complete your order to support Zanzibar artisans</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+255 xxx xxx xxx" required />
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Method */}
                <Card>
                  <CardHeader>
                    <CardTitle>Delivery Method</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="space-y-4">
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="delivery" id="delivery" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Truck className="w-5 h-5 text-primary" />
                            <Label htmlFor="delivery" className="font-medium">
                              Home Delivery
                            </Label>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Delivered by boda-boda or local delivery service
                          </p>
                          <p className="text-sm font-medium text-primary mt-1">$15 delivery fee</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Home className="w-5 h-5 text-primary" />
                            <Label htmlFor="pickup" className="font-medium">
                              Pickup from Artisan
                            </Label>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Collect directly from the artisan's workshop
                          </p>
                          <p className="text-sm font-medium text-primary mt-1">Free</p>
                        </div>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                {deliveryMethod === "delivery" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Shipping Address</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" placeholder="123 Main Street" required />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City/Area</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select area" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="stone-town">Stone Town</SelectItem>
                              <SelectItem value="paje">Paje</SelectItem>
                              <SelectItem value="nungwi">Nungwi</SelectItem>
                              <SelectItem value="jambiani">Jambiani</SelectItem>
                              <SelectItem value="kendwa">Kendwa</SelectItem>
                              <SelectItem value="matemwe">Matemwe</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postal">Postal Code</Label>
                          <Input id="postal" placeholder="Optional" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="instructions">Delivery Instructions (Optional)</Label>
                        <Input id="instructions" placeholder="e.g., Call when you arrive" />
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="card" className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4" />
                          Card
                        </TabsTrigger>
                        <TabsTrigger value="mobile" className="flex items-center gap-2">
                          <Smartphone className="w-4 h-4" />
                          Mobile Money
                        </TabsTrigger>
                        <TabsTrigger value="cash" className="flex items-center gap-2">
                          <Banknote className="w-4 h-4" />
                          Cash
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="card" className="space-y-4 mt-6">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input id="cardName" placeholder="John Doe" required />
                        </div>
                      </TabsContent>

                      <TabsContent value="mobile" className="space-y-4 mt-6">
                        <div className="space-y-2">
                          <Label htmlFor="mobileProvider">Mobile Money Provider</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select provider" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mpesa">M-Pesa</SelectItem>
                              <SelectItem value="tigo">Tigo Pesa</SelectItem>
                              <SelectItem value="airtel">Airtel Money</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mobileNumber">Mobile Number</Label>
                          <Input id="mobileNumber" placeholder="+255 xxx xxx xxx" required />
                        </div>
                        <div className="p-4 bg-muted rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            You will receive a payment prompt on your mobile device to complete the transaction.
                          </p>
                        </div>
                      </TabsContent>

                      <TabsContent value="cash" className="space-y-4 mt-6">
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-medium mb-2">Cash on Delivery</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            Pay with cash when your order is delivered. Please have the exact amount ready.
                          </p>
                          <p className="text-sm font-medium">Total to pay: ${total}</p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">by {item.artisan}</p>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <span className="font-medium">${item.price * item.quantity}</span>
                      </div>
                    ))}
                    <Separator />
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shipping}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                <Button type="submit" className="w-full" size="lg" disabled={isProcessing}>
                  {isProcessing ? "Processing Payment..." : `Complete Order - $${total}`}
                </Button>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Your payment information is secure and encrypted</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
