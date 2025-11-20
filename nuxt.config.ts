// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  
  app: {
    head: {
      htmlAttrs: { lang: 'vi' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Beauty Med Spa - Trung Tâm Thẩm Mỹ Uy Tín',
      meta: [
        { name: 'description', content: 'Trung tâm thẩm mỹ uy tín với đội ngũ bác sĩ chuyên nghiệp, công nghệ hiện đại' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@pinia/nuxt',
  ],
  
  css: ['~/assets/css/main.css'],
  
  site: {
    url: 'https://beautymedspa.vn',
    name: 'Beauty Med Spa',
    description: 'Trung tâm thẩm mỹ uy tín với đội ngũ bác sĩ chuyên nghiệp, công nghệ hiện đại',
    defaultLocale: 'vi',
  },
  
  ogImage: {
    enabled: false
  },
  
  image: {
    quality: 80,
    formats: ['webp', 'avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    }
  },
  
  content: {
    markdown: {
      anchorLinks: false
    },
    highlight: {
      theme: 'github-light'
    }
  },
  
  
  vite: {
    server: {
      hmr: {
        port: 24679 // Change from default 24678 to avoid conflict
      }
    }
  },
  
  nitro: {
    compressPublicAssets: false,
    minify: false,
    experimental: {
      tasks: false
    }
  },
  
  routeRules: {
    '/': { prerender: true },
    '/dich-vu/**': { swr: 3600 },
    '/tin-tuc/**': { swr: 3600 },
    '/api/**': { cors: true }
  },
  
  runtimeConfig: {
    // Private keys (only available server-side)
    smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
    smtpPort: parseInt(process.env.SMTP_PORT || '587'),
    smtpUser: process.env.SMTP_USER || '',
    smtpPass: process.env.SMTP_PASS || '',
    adminEmail: process.env.ADMIN_EMAIL || 'admin@beautymedspa.vn',
    
    // Public keys (exposed to client-side)
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      gaId: process.env.NUXT_PUBLIC_GA_ID || '',
    }
  },
  
  typescript: {
    strict: true,
    typeCheck: false
  }
})
