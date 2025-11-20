# Quang Dang Beauty Med Spa

A modern, professional beauty and medical spa website built with Nuxt 3, featuring a comprehensive suite of services, doctor profiles, promotions, and online booking capabilities.

## 🌟 About

Quang Dang Beauty Med Spa is a prestigious beauty and medical aesthetics center with a team of professional doctors and modern technology. This website showcases our services, team, promotions, and provides seamless online booking for customers.

## 🚀 Tech Stack

- **Framework**: [Nuxt.js 3](https://nuxt.com/) - The Intuitive Vue Framework
- **Frontend**: [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- **Package Manager**: [Bun](https://bun.sh/) - Fast all-in-one JavaScript runtime
- **Validation**: [Zod](https://zod.dev/) + [VeeValidate](https://vee-validate.logaretm.com/) - Schema validation
- **State Management**: [Pinia](https://pinia.vuejs.org/) - The Vue Store
- **SEO**: [@nuxtjs/seo](https://nuxtseo.com/) - SEO optimization
- **Icons**: [@nuxt/icon](https://nuxt.com/modules/icon) - Icon component
- **Images**: [@nuxt/image](https://image.nuxt.com/) - Optimized images
- **Content**: [@nuxt/content](https://content.nuxt.com/) - Content management
- **Utilities**: [@vueuse/nuxt](https://vueuse.org/) - Collection of Vue Composition Utilities

## 📁 Project Structure

```
beauty-med-spa/
├── assets/                 # Static assets (CSS, SCSS, images)
│   ├── css/               # Global CSS files
│   └── scss/              # SCSS variables and mixins
├── components/            # Vue components
│   ├── booking/          # Booking form components
│   ├── home/             # Homepage components
│   │   ├── HeroSection.vue
│   │   ├── ServiceGrid.vue
│   │   ├── DoctorTeam.vue
│   │   ├── TestimonialSlider.vue
│   │   ├── TechnologyShowcase.vue
│   │   ├── PromotionCards.vue
│   │   └── BookingCTA.vue
│   └── layout/           # Layout components
│       ├── AppHeader.vue
│       ├── AppFooter.vue
│       └── MobileMenu.vue
├── layouts/              # Nuxt layouts
│   ├── default.vue       # Default layout with header/footer
│   └── minimal.vue       # Minimal layout
├── pages/                # Application pages (auto-routing)
│   ├── index.vue         # Homepage
│   ├── dich-vu/          # Services pages
│   │   ├── index.vue     # Services listing
│   │   └── [slug].vue    # Service detail
│   ├── doi-ngu-bac-si/   # Doctor team pages
│   │   ├── index.vue     # Doctors listing
│   │   └── [slug].vue    # Doctor profile
│   ├── khuyen-mai/       # Promotions pages
│   │   ├── index.vue     # Promotions listing
│   │   └── [slug].vue    # Promotion detail
│   ├── cong-nghe/        # Technology showcase
│   │   └── index.vue
│   ├── lien-he/          # Contact pages
│   │   ├── index.vue     # Contact form
│   │   └── dat-lich-hen.vue  # Booking form
│   └── ve-chung-toi/     # About us
│       └── index.vue
├── public/               # Static files served as-is
│   ├── assets/          # Public assets
│   └── favicon.ico
├── server/               # Server-side code
│   └── api/             # API endpoints
│       ├── booking.post.ts   # Booking submission
│       └── contact.post.ts   # Contact form submission
├── types/                # TypeScript type definitions
│   └── index.ts         # Global types
├── .env.example          # Environment variables template
├── nuxt.config.ts        # Nuxt configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## ✨ Key Features

### 🏠 Homepage
- **Hero Section**: Eye-catching banner with call-to-action
- **Service Grid**: Featured services showcase
- **Doctor Team**: Meet our professional doctors
- **Testimonials**: Customer reviews and ratings
- **Technology Showcase**: Modern equipment and techniques
- **Promotions**: Current deals and offers
- **Booking CTA**: Quick access to appointment booking

### 💼 Services (Dịch Vụ)
- Comprehensive service listings
- Detailed service pages with benefits and pricing
- Service categories and filtering
- SEO-optimized service pages

### 👨‍⚕️ Doctor Team (Đội Ngũ Bác Sĩ)
- Professional doctor profiles
- Qualifications and experience
- Specialization areas
- Individual doctor pages

### 🎁 Promotions (Khuyến Mãi)
- Current promotional offers
- Discount details and terms
- Time-limited deals
- Service-specific promotions

### 🔬 Technology (Công Nghệ)
- Modern equipment showcase
- Technology benefits
- Certifications and standards

### 📞 Contact & Booking
- **Contact Form** (Liên Hệ): General inquiries
- **Booking Form** (Đặt Lịch Hẹn): Appointment scheduling
- Form validation with Zod
- Email notifications (planned)

### 📄 About Us (Về Chúng Tôi)
- Company information
- Mission and values
- Certifications and achievements

## 🛠️ Installation

### Prerequisites
- [Bun](https://bun.sh/) installed on your system
- Node.js 18+ (for compatibility)
- Git

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd beauty-med-spa
```

2. Install dependencies using Bun:
```bash
bun install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
# SMTP Configuration (for email notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@beautymedspa.vn

# Public Configuration
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_GA_ID=your-ga-id
```

## 🚀 Development

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

The development server includes:
- Hot Module Replacement (HMR)
- Auto-import components
- TypeScript support
- Tailwind CSS with JIT mode

## 🏗️ Build

Build the application for production:

```bash
bun run build
```

This will:
- Optimize and minify code
- Generate static assets
- Create production-ready bundles

## 👀 Preview

Locally preview the production build:

```bash
bun run preview
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run generate` | Generate static site |
| `bun run preview` | Preview production build |
| `bun run lint` | Lint code with ESLint |
| `bun run type-check` | Check TypeScript types |

## 🔌 API Endpoints

### POST `/api/booking`
Submit a booking request.

**Request Body:**
```typescript
{
  serviceId: string
  customerName: string
  phone: string        // 10 digits
  email: string
  preferredDate: string
  preferredTime: string
  message?: string
}
```

**Response:**
```typescript
{
  success: boolean
  bookingId?: string
  message: string
}
```

### POST `/api/contact`
Submit a contact form.

**Request Body:**
```typescript
{
  name: string
  phone: string        // 10 digits
  email: string
  subject: string
  message: string      // min 10 characters
}
```

**Response:**
```typescript
{
  success: boolean
  contactId?: string
  message: string
}
```

## 🎨 Styling

The project uses Tailwind CSS with custom SCSS variables for consistent theming:

- **Global Styles**: `assets/css/main.css`
- **SCSS Variables**: `assets/scss/_variables.scss`
- **Tailwind Config**: `tailwind.config.js`

## 🌐 SEO & Meta

- Configured with `@nuxtjs/seo` module
- Vietnamese language support (lang="vi")
- Meta tags and Open Graph setup
- Sitemap generation
- Route-level SEO customization

## 🔧 Configuration

### Nuxt Config Highlights
- **SSR**: Enabled for better SEO
- **Route Rules**: Prerendering and caching strategies
- **Image Optimization**: WebP/AVIF formats
- **Content Management**: Markdown support
- **CORS**: Enabled for API routes

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: xs, sm, md, lg, xl, xxl
- Responsive images with `@nuxt/image`
- Mobile menu component

## 🔐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server host | smtp.gmail.com |
| `SMTP_PORT` | SMTP server port | 587 |
| `SMTP_USER` | SMTP username | - |
| `SMTP_PASS` | SMTP password | - |
| `ADMIN_EMAIL` | Admin email for notifications | admin@beautymedspa.vn |
| `NUXT_PUBLIC_SITE_URL` | Public site URL | http://localhost:3000 |
| `NUXT_PUBLIC_GA_ID` | Google Analytics ID | - |

## 📦 Dependencies

### Production Dependencies
- `nuxt` (^4.2.1) - Core framework
- `vue` (^3.5.24) - JavaScript framework
- `vue-router` (^4.6.3) - Routing
- `@nuxtjs/seo` (^2.0.0) - SEO optimization
- `@nuxt/image` (^1.8.1) - Image optimization
- `@nuxt/content` (^2.13.4) - Content management
- `@vueuse/nuxt` (^11.3.0) - Composition utilities
- `@nuxt/icon` (^1.10.4) - Icon system
- `@pinia/nuxt` (^0.5.5) - State management
- `zod` (^3.24.1) - Schema validation
- `vee-validate` (^4.15.1) - Form validation
- `nodemailer` (^6.9.16) - Email sending

### Development Dependencies
- `@nuxtjs/tailwindcss` (^6.14.0) - Tailwind CSS integration
- `typescript` (^5.7.3) - TypeScript support
- `sass` (^1.94.2) - SCSS preprocessing

## 🚀 Deployment

The application can be deployed to various platforms:

- **Vercel**: Zero-config deployment
- **Netlify**: JAMstack hosting
- **Node.js Server**: Traditional hosting
- **Static Hosting**: With `nuxt generate`

For detailed deployment instructions, check the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## 📝 TypeScript

The project uses strict TypeScript configuration:
- Strict mode enabled
- Type checking available via `bun run type-check`
- Comprehensive type definitions in `types/index.ts`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 👥 Contact

**Quang Dang Beauty Med Spa**
- Website: https://beautymedspa.vn
- Email: admin@beautymedspa.vn

---

Built with ❤️ using Nuxt 3 and modern web technologies
