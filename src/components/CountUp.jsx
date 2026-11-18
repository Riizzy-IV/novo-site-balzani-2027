import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const format = (val, decimals, thousands) => {
  // O Figma usa ponto como separador decimal ("3.1 bi")
  const fixed = val.toFixed(decimals)
  return thousands ? Number(val.toFixed(0)).toLocaleString('pt-BR') : fixed
}

/** Contador que anima de 0 até `to` quando entra na tela (baseado no da apresentação). */
export default function CountUp({ to, decimals = 0, suffix = '', thousands = false, duration = 1.8 }) {
  const ref = useRef(null)
  const final = format(to, decimals, thousands) + suffix

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const obj = { val: 0 }
    const tween = gsap.to(obj, {
      val: to,
      duration,
      ease: 'power2.out',
      paused: true,
      onUpdate: () => {
        el.textContent = format(obj.val, decimals, thousands) + suffix
      },
    })
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => tween.play(),
    })
    el.textContent = format(0, decimals, thousands) + suffix
    return () => {
      st.kill()
      tween.kill()
      el.textContent = final
    }
  }, [to, decimals, suffix, thousands, duration, final])

  return <span ref={ref}>{final}</span>
}
