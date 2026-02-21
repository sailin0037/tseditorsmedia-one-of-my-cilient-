import { useState, useEffect } from 'react'

export function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    try {
      const checkDevice = () => {
        const mobile = window.matchMedia('(max-width: 768px)').matches
        const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
        setIsMobile(mobile)
        setIsTouch(touch)
      }

      checkDevice()
      window.addEventListener('resize', checkDevice)
      return () => window.removeEventListener('resize', checkDevice)
    } catch (e) {
      setIsMobile(false)
      setIsTouch(false)
    }
  }, [])

  return { isMobile, isTouch }
}

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    try {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReducedMotion(mediaQuery.matches)

      const handler = (e) => setPrefersReducedMotion(e.matches)
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    } catch (e) {
      setPrefersReducedMotion(false)
    }
  }, [])

  return prefersReducedMotion
}

export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let rafId = null

    const update = () => {
      const currentScrollY = window.scrollY
      const delta = Math.abs(currentScrollY - lastScrollY)
      setVelocity(delta)
      lastScrollY = currentScrollY
      rafId = requestAnimationFrame(update)
    }

    try {
      rafId = requestAnimationFrame(update)
    } catch (e) {
      // RAF failed, ignore
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return velocity
}

export function useMousePosition() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let rafId = null
    let cachedX = 0
    let cachedY = 0

    const handleMove = (e) => {
      cachedX = e.clientX
      cachedY = e.clientY
    }

    const update = () => {
      setMousePos({ x: cachedX, y: cachedY })
      rafId = requestAnimationFrame(update)
    }

    try {
      window.addEventListener('mousemove', handleMove, { passive: true })
      rafId = requestAnimationFrame(update)
    } catch (e) {
      // Event listener failed
    }

    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return mousePos
}
