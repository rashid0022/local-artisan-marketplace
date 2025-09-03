"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Send, Paperclip, MoreVertical, Phone, Video, Star } from "lucide-react"
import Link from "next/link"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(1)
  const [newMessage, setNewMessage] = useState("")

  const conversations = [
    {
      id: 1,
      artisan: {
        name: "Amina Hassan",
        craft: "Traditional Textiles",
        avatar: "/zanzibar-woman-artisan-weaving-colorful-textiles.jpg",
        online: true,
        verified: true,
      },
      lastMessage: "Thank you for your order! I'll start working on your custom kanga design right away.",
      timestamp: "2 min ago",
      unread: 2,
      orderNumber: "ZA-2024-001234",
    },
    {
      id: 2,
      artisan: {
        name: "Omar Khamis",
        craft: "Wood Carving",
        avatar: "/zanzibar-man-wood-carver-with-traditional-tools.jpg",
        online: false,
        verified: true,
      },
      lastMessage: "The dhow boat is almost finished. Would you like to see progress photos?",
      timestamp: "1 hour ago",
      unread: 0,
      orderNumber: "ZA-2024-001234",
    },
    {
      id: 3,
      artisan: {
        name: "Fatma Ali",
        craft: "Henna Art & Jewelry",
        avatar: "/zanzibar-woman-henna-artist-with-beautiful-jewelry.jpg",
        online: true,
        verified: true,
      },
      lastMessage: "I have some new jewelry pieces that might interest you!",
      timestamp: "3 hours ago",
      unread: 1,
      orderNumber: null,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "artisan",
      content:
        "Hello! Thank you for your interest in my traditional textiles. I'd be happy to create a custom kanga for you.",
      timestamp: "10:30 AM",
      type: "text",
    },
    {
      id: 2,
      sender: "customer",
      content:
        "Hi Amina! I love your work. I'm looking for a kanga with traditional Swahili sayings. Do you have any recommendations?",
      timestamp: "10:32 AM",
      type: "text",
    },
    {
      id: 3,
      sender: "artisan",
      content: "I have several beautiful sayings that would work perfectly. Let me show you some options.",
      timestamp: "10:35 AM",
      type: "text",
    },
    {
      id: 4,
      sender: "artisan",
      content: "/kanga-design-options.jpg",
      timestamp: "10:36 AM",
      type: "image",
    },
    {
      id: 5,
      sender: "customer",
      content: "These are beautiful! I especially love the second design. How long would it take to complete?",
      timestamp: "10:40 AM",
      type: "text",
    },
    {
      id: 6,
      sender: "artisan",
      content:
        "Thank you! That one is very special - it says 'Haba na haraka haina baraka' which means 'There is no blessing in haste.' It would take about 5-7 days to complete with the hand-weaving process.",
      timestamp: "10:42 AM",
      type: "text",
    },
    {
      id: 7,
      sender: "customer",
      content: "Perfect! I'd like to place an order for that design. What's the next step?",
      timestamp: "10:45 AM",
      type: "text",
    },
    {
      id: 8,
      sender: "artisan",
      content:
        "Wonderful! I'll create a custom listing for you. The price will be $65 including the custom design work. I'll send you the link shortly.",
      timestamp: "10:47 AM",
      type: "text",
    },
    {
      id: 9,
      sender: "artisan",
      content: "Thank you for your order! I'll start working on your custom kanga design right away.",
      timestamp: "Just now",
      type: "text",
    },
  ]

  const currentConversation = conversations.find((c) => c.id === selectedConversation)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage("")
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

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
            {/* Conversations List */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Messages
                    <Badge variant="secondary">{conversations.filter((c) => c.unread > 0).length}</Badge>
                  </CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="Search conversations..." className="pl-10" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[calc(100vh-350px)]">
                    <div className="space-y-1 p-4">
                      {conversations.map((conversation) => (
                        <div
                          key={conversation.id}
                          className={`p-3 rounded-lg cursor-pointer transition-colors ${
                            selectedConversation === conversation.id
                              ? "bg-primary/10 border border-primary/20"
                              : "hover:bg-muted/50"
                          }`}
                          onClick={() => setSelectedConversation(conversation.id)}
                        >
                          <div className="flex items-start gap-3">
                            <div className="relative">
                              <Avatar className="w-10 h-10">
                                <AvatarImage
                                  src={conversation.artisan.avatar || "/placeholder.svg"}
                                  alt={conversation.artisan.name}
                                />
                                <AvatarFallback>
                                  {conversation.artisan.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              {conversation.artisan.online && (
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1 mb-1">
                                <span className="font-medium text-sm truncate">{conversation.artisan.name}</span>
                                {conversation.artisan.verified && (
                                  <Star className="w-3 h-3 fill-primary text-primary flex-shrink-0" />
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mb-1">{conversation.artisan.craft}</p>
                              <p className="text-xs text-muted-foreground truncate">{conversation.lastMessage}</p>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                                {conversation.unread > 0 && (
                                  <Badge className="bg-primary text-primary-foreground text-xs px-2 py-0">
                                    {conversation.unread}
                                  </Badge>
                                )}
                              </div>
                              {conversation.orderNumber && (
                                <Badge variant="outline" className="text-xs mt-1">
                                  Order #{conversation.orderNumber.split("-").pop()}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-3">
              <Card className="h-full flex flex-col">
                {/* Chat Header */}
                {currentConversation && (
                  <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="w-10 h-10">
                            <AvatarImage
                              src={currentConversation.artisan.avatar || "/placeholder.svg"}
                              alt={currentConversation.artisan.name}
                            />
                            <AvatarFallback>
                              {currentConversation.artisan.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {currentConversation.artisan.online && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{currentConversation.artisan.name}</h3>
                            {currentConversation.artisan.verified && (
                              <Star className="w-4 h-4 fill-primary text-primary" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{currentConversation.artisan.craft}</p>
                          <p className="text-xs text-muted-foreground">
                            {currentConversation.artisan.online ? "Online now" : "Last seen 1 hour ago"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Video className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                )}

                {/* Messages */}
                <CardContent className="flex-1 p-0">
                  <ScrollArea className="h-[calc(100vh-400px)] p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === "customer" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg px-4 py-2 ${
                              message.sender === "customer"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-foreground"
                            }`}
                          >
                            {message.type === "text" ? (
                              <p className="text-sm">{message.content}</p>
                            ) : (
                              <div className="space-y-2">
                                <div className="w-48 h-32 bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                                  <span className="text-xs text-muted-foreground">Image: {message.content}</span>
                                </div>
                              </div>
                            )}
                            <p
                              className={`text-xs mt-1 ${
                                message.sender === "customer" ? "text-primary-foreground/70" : "text-muted-foreground"
                              }`}
                            >
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
