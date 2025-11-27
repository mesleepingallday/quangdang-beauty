# Animated Stats Section - Technical Specification

## Overview
Create an engaging stats section for the Beauty Med Spa homepage that animates numbers from 0 to their target values when the user scrolls to the section.

## Requirements

### Functional Requirements
1. Display 4 key statistics in a responsive grid layout
2. Animate numbers from 0 to target value when section enters viewport
3. Support different number formats (integers, percentages, decimals)
4. Trigger animation only once per page visit
5. Smooth, natural-looking animation with easing

### Statistics to Display
| Stat | Value | Label | Type |
|------|-------|-------|------|
| Customers | 5000+ | Khách Hàng | Integer with suffix |
| Satisfaction | 98% | Hài Lòng | Percentage |
| Experience | 15+ | Năm Kinh Nghiệm | Integer with suffix |
| Rating | 4.9/5 | Đánh Giá | Decimal with suffix |

### Design Requirements
- **Layout**: 2-column grid on mobile, 4-column on desktop (lg breakpoint)
- **Colors**: Primary blue (#0066cc) for numbers, gray-600 for labels
- **Typography**: 
  - Numbers: text-4xl, font-bold
  - Labels: text-gray-600, regular weight
- **Spacing**: 
  - Section padding: py-16
  - Gap between stats: gap-6
  - Vertical spacing: mb-2 between number and label
- **Background**: Light gray (bg-gray-50) to distinguish from white sections

## Technical Architecture

### Component Structure
```
components/
  home/
    StatsSection.vue         # Main component
composables/
  useCountAnimation.ts       # Reusable animation logic
```

### Animation Strategy

#### 1. Intersection Observer
- Trigger: When section is 20% visible in viewport
- Threshold: `{ threshold: 0.2 }`
- One-time trigger: Disconnect observer after first trigger

#### 2. Counter Animation Logic
- **Duration**: 2000ms (2 seconds) for all stats
- **Update Frequency**: 60 FPS (approximately 16.67ms intervals)
- **Easing Function**: `easeOutQuart` for smooth deceleration
  ```
  easeOutQuart(t) = 1 - (1 - t)^4
  ```

#### 3. Number Formatting
Each stat type requires specific formatting:
- **Integer + suffix** (5000+, 15+): Animate to integer, append suffix
- **Percentage** (98%): Animate to integer, append %
- **Decimal + suffix** (4.9/5): Animate to 1 decimal place, append /5

### Implementation Details

#### useCountAnimation Composable
**Purpose**: Reusable animation logic for counting numbers

**Parameters**:
- `target: number` - Final value to count to
- `duration: number` - Animation duration in ms (default: 2000)
- `formatFn?: (n: number) => string` - Custom formatter

**Returns**:
- `displayValue: Ref<string>` - Current display value
- `start: () => void` - Start animation function

**Key Features**:
- RequestAnimationFrame for smooth 60 FPS
- Easing function for natural motion
- Cleanup on component unmount
- Support for custom formatters

#### StatsSection Component
**Structure**:
```vue
<template>
  <section ref="statsRef" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="stat in stats" class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">
            {{ displayValues[stat.id] }}
          </div>
          <div class="text-gray-600">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
```

**Script Logic**:
1. Setup refs for section element and display values
2. Configure Intersection Observer
3. Create counter instances for each stat with appropriate formatters
4. Start all animations when section becomes visible
5. Cleanup observer on unmount

### Animation Enhancements

#### 1. Fade-in Effect
- Initial state: `opacity-0`
- Animated state: `opacity-100`
- Transition: `transition-opacity duration-1000`

#### 2. Slide-up Effect
- Initial state: `translate-y-8`
- Animated state: `translate-y-0`
- Transition: `transition-transform duration-1000`

#### 3. Staggered Animation
Each stat card animates with a delay:
- Card 1: 0ms
- Card 2: 100ms
- Card 3: 200ms
- Card 4: 300ms

Implemented using `transition-delay` classes

### Accessibility

#### Reduced Motion Support
Respect user preference for reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
  /* Instant transition to final values */
  /* No fade/slide animations */
}
```

#### Screen Readers
- Ensure final values are announced correctly
- Use semantic HTML (no aria-live needed as values are static after animation)

## Integration

### Homepage Integration
Add StatsSection between HeroSection and PromotionCards:

```vue
<!-- pages/index.vue -->
<template>
  <div>
    <HeroSection />
    <StatsSection />  <!-- NEW -->
    <PromotionCards />
    <ServiceGrid />
    <DoctorTeam />
    <TechnologyShowcase />
    <TestimonialSlider />
    <BookingCTA />
  </div>
</template>
```

## Performance Considerations

### Optimization
1. **Single Observer**: One Intersection Observer for entire section
2. **RAF Cleanup**: Cancel requestAnimationFrame on unmount
3. **One-time Trigger**: Disconnect observer after first trigger
4. **Efficient Updates**: Only update reactive refs, no DOM manipulation

### Browser Compatibility
- Intersection Observer: Modern browsers (IE11+ with polyfill)
- RequestAnimationFrame: All modern browsers
- CSS Transitions: Universal support

## Testing Checklist

- [ ] Numbers animate from 0 to target values
- [ ] Animation triggers on scroll (not page load)
- [ ] Animation duration is approximately 2 seconds
- [ ] All number formats display correctly (5000+, 98%, 15+, 4.9/5)
- [ ] Responsive layout works on mobile and desktop
- [ ] Colors match design system (#0066cc primary)
- [ ] Animation only triggers once per page visit
- [ ] Reduced motion preference is respected
- [ ] Component integrates correctly in homepage
- [ ] No performance issues or memory leaks

## File Structure Summary

```
components/home/StatsSection.vue          # Main component (new)
composables/useCountAnimation.ts          # Animation logic (new)
pages/index.vue                           # Updated to include StatsSection
STATS_ANIMATION_SPEC.md                   # This specification (new)
```

## Dependencies
- Vue 3 Composition API (already in project)
- Nuxt 3 (already in project)
- Tailwind CSS (already in project)
- TypeScript (already in project)

No additional packages required.

## Timeline Estimate
- Composable creation: 30 minutes
- Component creation: 45 minutes
- Testing & refinement: 30 minutes
- **Total**: ~1.5-2 hours