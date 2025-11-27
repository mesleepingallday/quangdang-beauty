import { test, expect } from '@playwright/test'

test.describe('Navigation Menu Screenshots', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage
    await page.goto('http://localhost:3000')
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle')
  })

  test('Desktop Navigation - Default State', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    
    // Take screenshot of header
    await page.locator('header').screenshot({ 
      path: 'tests/screenshots/nav-desktop-default.png' 
    })
  })

  test('Desktop Navigation - Services Dropdown', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    
    // Hover over Services to open dropdown
    await page.locator('text=Dịch Vụ').first().hover()
    await page.waitForTimeout(500) // Wait for dropdown animation
    
    // Take screenshot
    await page.screenshot({ 
      path: 'tests/screenshots/nav-desktop-services-dropdown.png',
      fullPage: false 
    })
  })

  test('Desktop Navigation - News Dropdown', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    
    // Hover over Tin Tức to open dropdown
    await page.locator('text=Tin Tức').first().hover()
    await page.waitForTimeout(500)
    
    await page.screenshot({ 
      path: 'tests/screenshots/nav-desktop-news-dropdown.png',
      fullPage: false 
    })
  })

  test('Desktop Navigation - About Dropdown', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    
    // Hover over Về Chúng Tôi
    await page.locator('text=Về Chúng Tôi').first().hover()
    await page.waitForTimeout(500)
    
    await page.screenshot({ 
      path: 'tests/screenshots/nav-desktop-about-dropdown.png',
      fullPage: false 
    })
  })

  test('Desktop Navigation - Contact Dropdown', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    
    // Hover over Liên Hệ
    await page.locator('text=Liên Hệ').first().hover()
    await page.waitForTimeout(500)
    
    await page.screenshot({ 
      path: 'tests/screenshots/nav-desktop-contact-dropdown.png',
      fullPage: false 
    })
  })

  test('Mobile Navigation - Menu Closed', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    
    await page.locator('header').screenshot({ 
      path: 'tests/screenshots/nav-mobile-closed.png' 
    })
  })

  test('Mobile Navigation - Menu Open', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Click hamburger menu
    await page.locator('button[aria-label="Toggle menu"]').click()
    await page.waitForTimeout(500)
    
    await page.screenshot({ 
      path: 'tests/screenshots/nav-mobile-open.png',
      fullPage: true 
    })
  })

  test('Mobile Navigation - Services Accordion Expanded', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Open mobile menu
    await page.locator('button[aria-label="Toggle menu"]').click()
    await page.waitForTimeout(300)
    
    // Click on Services to expand accordion
    await page.locator('text=Dịch Vụ').click()
    await page.waitForTimeout(300)
    
    await page.screenshot({ 
      path: 'tests/screenshots/nav-mobile-services-expanded.png',
      fullPage: true 
    })
  })

  test('Tablet Navigation', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    
    await page.locator('header').screenshot({ 
      path: 'tests/screenshots/nav-tablet.png' 
    })
  })
})