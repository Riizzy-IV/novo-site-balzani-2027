import { FORMULAS } from '../data/home.js'
import { PillButton, SectionHeading } from '../components/ui.jsx'

export default function Formulas() {
  return (
    <section className="formulas">
      <SectionHeading kicker="Nossas fórmulas" className="formulas__heading">
        Duas fórmulas criadas para cada momento imobiliário, orientadas a resultados por método, dados e
        domínio do negócio
      </SectionHeading>

      <div className="formula-cards">
        {FORMULAS.map((f) => (
          <article key={f.lead} className="formula-card" data-reveal>
            <div className="formula-card__inner">
              <div className="formula-card__top">
                <div className="formula-card__copy">
                  <span className="formula-card__bar" aria-hidden />
                  <p>
                    <strong>{f.lead}</strong> {f.rest[0]}
                    {f.rest[1] && (
                      <>
                        <br />
                        {f.rest[1]}
                      </>
                    )}
                  </p>
                </div>
                <img
                  className="formula-card__logo"
                  src={f.logo.src}
                  alt={f.logo.alt}
                  width={f.logo.w}
                  height={f.logo.h}
                  style={{ width: `calc(var(--u) * ${f.logo.w})` }}
                />
              </div>
              <div className="formula-card__action">
                <PillButton href={f.href} className="formula-card__btn">
                  Saiba mais
                </PillButton>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
