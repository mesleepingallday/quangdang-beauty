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
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: 'Beauty Med Spa - Trung Tâm Thẩm Mỹ Uy Tín' },
        { property: 'og:description', content: 'Trung tâm thẩm mỹ uy tín với đội ngũ bác sĩ chuyên nghiệp, công nghệ hiện đại' },
        { property: 'og:image', content: 'https://beautymedspa.vn/logo.svg' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Beauty Med Spa' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Beauty Med Spa - Trung Tâm Thẩm Mỹ Uy Tín' },
        { name: 'twitter:description', content: 'Trung tâm thẩm mỹ uy tín với đội ngũ bác sĩ chuyên nghiệp, công nghệ hiện đại' },
        { name: 'twitter:image', content: 'https://beautymedspa.vn/logo.svg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Momo+Trust+Display:wght@400;600;700&family=Momo+Trust+Sans:wght@300;400;500;600;700&display=swap'
        }
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
