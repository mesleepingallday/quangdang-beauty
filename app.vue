<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Main app entry point
console.log('App.vue script running')

// Diagnostic: Check if CSS is loaded
onMounted(() => {
  console.log('App component fully mounted')
  
  // Check if main.css is loaded
  const links = document.querySelectorAll('link[rel="stylesheet"]')
  console.log('CSS DIAGNOSTIC: Stylesheets found:', links.length)
  links.forEach((link: any) => {
    console.log('- Stylesheet:', link.href, 'Status:', link.sheet ? 'LOADED' : 'FAILED')
  })
  
  // Check computed styles
  const bodyStyles = window.getComputedStyle(document.body)
  console.log('Body font-family:', bodyStyles.fontFamily)
  console.log('Body background:', bodyStyles.backgroundColor)
})

// Error handling
const handleError = (err: any) => {
  console.error('Error in app.vue:', err)
}

// Log when component is created
console.log('NuxtLayout and NuxtPage should render')
</script>
