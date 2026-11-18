import { LEADERS } from '../data/home.js'
import { SectionHeading } from '../components/ui.jsx'

export default function Leaders() {
  return (
    <section className="leaders">
      <SectionHeading kicker="Nossas lideranças" className="leaders__heading">
        Quem está por trás das estratégias mais eficazes do mercado
      </SectionHeading>

      <div className="leaders__grid container">
        {LEADERS.map((l) => (
          <article key={l.first} className="leader" data-reveal>
            <div className="leader__photo">
              <img
                src={l.photo}
                alt={`${l.first} ${l.last}`}
                className={l.crop ? 'is-cropped' : ''}
                style={l.crop && { height: l.crop.h, width: l.crop.w, left: l.crop.left, top: l.crop.top }}
              />
            </div>
            <div className="leader__name">
              <p className="leader__first">{l.first}</p>
              <p className="leader__last">{l.last}</p>
            </div>
            <p className="leader__role">{l.role}</p>
            <span className="gradient-bar leader__bar" aria-hidden />
          </article>
        ))}
      </div>
    </section>
  )
}
