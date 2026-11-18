import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { destroySmoothScroll, initSmoothScroll, prefersReducedMotion } from '../lib/smoothScroll.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * Animações globais da página (GSAP + Lenis):
 * - rolagem suave com Lenis sincronizada ao ScrollTrigger
 * - entrada (fade + subida) de todo elemento com [data-reveal]
 * - parallax de elementos com [data-parallax="<velocidade>"]
 */
export default function useReveal(scopeRef) {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return

    initSmoothScroll()

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.2
        gsap.to(el, {
          yPercent: -speed * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('section') ?? el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    }, scopeRef)

    // imagens/fontes mudam a altura da página depois do primeiro render
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    document.fonts?.ready.then(refresh)

    return () => {
      window.removeEventListener('load', refresh)
      ctx.revert()
      destroySmoothScroll()
    }
  }, [scopeRef])
}
