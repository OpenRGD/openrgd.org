'use client'

import { useEffect } from 'react'

export default function AmbientMotion() {
  useEffect(() => {
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (reduceMotion) {
      revealNodes.forEach((node) => node.classList.add('is-visible'))
      return
    }

    root.classList.add('motion-ready')

    let pointerFrame = 0
    let pointerX = window.innerWidth * 0.72
    let pointerY = window.innerHeight * 0.22

    const paintPointer = () => {
      root.style.setProperty('--pointer-x', pointerX + 'px')
      root.style.setProperty('--pointer-y', pointerY + 'px')
      pointerFrame = 0
    }

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX
      pointerY = event.clientY
      if (!pointerFrame) pointerFrame = window.requestAnimationFrame(paintPointer)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    paintPointer()

    const tilt = document.querySelector<HTMLElement>('[data-tilt]')
    let tiltFrame = 0
    let tiltX = 0
    let tiltY = 0
    let glowX = 50
    let glowY = 50

    const paintTilt = () => {
      if (!tilt) return
      tilt.style.setProperty('--tilt-x', tiltX.toFixed(2) + 'deg')
      tilt.style.setProperty('--tilt-y', tiltY.toFixed(2) + 'deg')
      tilt.style.setProperty('--glow-x', glowX.toFixed(1) + '%')
      tilt.style.setProperty('--glow-y', glowY.toFixed(1) + '%')
      tiltFrame = 0
    }

    const onTiltMove = (event: PointerEvent) => {
      if (!tilt || window.innerWidth < 980) return
      const rect = tilt.getBoundingClientRect()
      const px = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width))
      const py = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height))
      tiltY = (px - 0.5) * 4
      tiltX = (0.5 - py) * 3
      glowX = px * 100
      glowY = py * 100
      if (!tiltFrame) tiltFrame = window.requestAnimationFrame(paintTilt)
    }

    const resetTilt = () => {
      tiltX = 0
      tiltY = 0
      glowX = 68
      glowY = 18
      if (!tiltFrame) tiltFrame = window.requestAnimationFrame(paintTilt)
    }

    tilt?.addEventListener('pointermove', onTiltMove, { passive: true })
    tilt?.addEventListener('pointerleave', resetTilt)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )

    revealNodes.forEach((node) => observer.observe(node))

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      tilt?.removeEventListener('pointermove', onTiltMove)
      tilt?.removeEventListener('pointerleave', resetTilt)
      observer.disconnect()
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame)
      if (tiltFrame) window.cancelAnimationFrame(tiltFrame)
      root.classList.remove('motion-ready')
    }
  }, [])

  return (
    <div className="ambient-field" aria-hidden="true">
      <span className="ambient-orbit orbit-one" />
      <span className="ambient-orbit orbit-two" />
      <span className="ambient-signal" />
    </div>
  )
}
