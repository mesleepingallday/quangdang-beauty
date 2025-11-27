// Service Types
export interface Service {
  id: string
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  benefits: string[]
  duration: string
  price: {
    min: number
    max: number
    currency: string
  }
  images: string[]
  category: string
  featured: boolean
  seoTitle: string
  seoDescription: string
  keywords: string[]
}

// Doctor Types
export interface Doctor {
  id: string
  slug: string
  name: string
  title: string
  specialization: string
  experience: number
  qualifications: string[]
  bio: string
  image: string
  featured: boolean
  seoTitle: string
  seoDescription: string
}

// Promotion Types
export interface Promotion {
  id: string
  slug: string
  title: string
  description: string
  discount: number
  discountType: 'percentage' | 'fixed'
  validFrom: Date
  validTo: Date
  services: string[]
  image: string
  terms: string[]
  featured: boolean
}

// Technology Types
export interface Technology {
  id: string
  slug: string
  name: string
  description: string
  benefits: string[]
  applications: string[]
  image: string
  certifications: string[]
}

// Booking Types
export interface BookingRequest {
  customerName: string
  phone: string
  email: string
  serviceId: string
  preferredDate: Date
  preferredTime: string
  message?: string
}

export interface BookingResponse {
  success: boolean
  bookingId?: string
  message: string
}

// Blog/News Types
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedDate: Date
  category: string
  tags: string[]
  featuredImage: string
  seoTitle: string
  seoDescription: string
}

// Contact Form Types
export interface ContactRequest {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

// SEO Meta Types
export interface SEOMeta {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: string
  canonicalUrl?: string
}

// Navigation Types
export interface NavItem {
  label: string
  href: string
  icon?: string
  children?: NavItem[]
  featured?: boolean
  description?: string
}

// Testimonial Types
export interface Testimonial {
  id: string
  customerName: string
  rating: number
  comment: string
  service: string
  date: Date
  image?: string
  verified: boolean
}

// Gallery Types
export interface GalleryItem {
  id: string
  title: string
  beforeImage: string
  afterImage: string
  service: string
  description: string
  date: Date
}

// Business Info Types
export interface BusinessInfo {
  name: string
  address: string
  phone: string
  email: string
  openingHours: {
    dayOfWeek: string[]
    opens: string
    closes: string
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    zalo?: string
    youtube?: string
  }
  certifications: string[]
}