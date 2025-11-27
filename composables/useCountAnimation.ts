/**
 * useCountAnimation - Reusable composable for animating numbers from 0 to target value
 * 
 * Features:
 * - Smooth animation using requestAnimationFrame (60 FPS)
 * - easeOutQuart easing function for natural deceleration
 * - Custom formatters for different number types
 * - Automatic cleanup on component unmount
 * 
 * @param target - The final value to count to
 * @param options - Animation options (duration, formatter)
 * @returns displayValue ref and start function
 */

interface CountAnimationOptions {
  duration?: number
  formatFn?: (value: number) => string
}

export function useCountAnimation(
  target: number,
  options: CountAnimationOptions = {}
) {
  const { duration = 2000, formatFn = (n) => Math.round(n).toString() } = options
  
  const displayValue = ref('0')
  let animationFrameId: number | null = null
  let startTime: number | null = null

  /**
   * Easing function: easeOutQuart
   * Creates smooth deceleration effect
   * Formula: 1 - (1 - x)^4
   */
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4)
  }

  /**
   * Start the counting animation
   */
  const start = () => {
    startTime = null
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Apply easing function
      const easedProgress = easeOutQuart(progress)
      
      // Calculate current value
      const currentValue = target * easedProgress
      
      // Format and update display value
      displayValue.value = formatFn(currentValue)
      
      // Continue animation if not complete
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        // Ensure final value is exact
        displayValue.value = formatFn(target)
      }
    }
    
    animationFrameId = requestAnimationFrame(animate)
  }

  /**
   * Stop animation and cleanup
   */
  const stop = () => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = null
    }
  }

  // Cleanup on component unmount
  onUnmounted(() => {
    stop()
  })

  return {
    displayValue,
    start,
    stop
  }
}