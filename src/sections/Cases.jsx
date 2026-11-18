import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { CASES, img } from '../data/home.js'

function CaseImage({ c }) {
  return (
    <div className={`case-card__media ${c.crop ? 'case-card__media--shadow' : ''}`}>
      <img
        className={`case-card__img ${c.crop ? 'case-card__img--crop' : ''}`}
        src={c.image}
        alt={c.name}
        style={c.crop && { height: c.crop.h, width: c.crop.w, left: c.crop.left, top: c.crop.top }}
      />
    </div>
  )
}

export default function Cases() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)

  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[0]
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    gsap.to(track, {
      x: -index * (card.offsetWidth + gap),
      duration: 0.9,
      ease: 'power3.inOut',
    })
  }, [index])

  const next = () => setIndex((i) => (i + 1) % CASES.length)

  return (
    <section className="cases" id="cases">
      <h2 className="cases__title" style={{ backgroundImage: `url(${img('cases-title-texture.png')})` }}>
        NOSSOS CASES
      </h2>

      <div className="cases__viewport">
        <div className="cases__track" ref={trackRef}>
          {CASES.map((c, i) => (
            <article key={c.name} className={`case-card ${i === index ? 'is-active' : ''}`} data-reveal>
              <CaseImage c={c} />
              <div className="case-card__info">
                <h3>{c.name}</h3>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </div>

        <img className="cases__dot" src={img('cases-dot.svg')} alt="" width="32" height="32" aria-hidden />

        <button className="cases__next" onClick={next} aria-label="Próximo case">
          <span className="cases__next-icon">
            <img src={img('icon-swap.svg')} alt="" />
          </span>
        </button>
      </div>
    </section>
  )
}
