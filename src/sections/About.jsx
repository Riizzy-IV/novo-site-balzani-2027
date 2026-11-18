import { AGENCY_ITEMS, BALZANI_ITEMS, DIFFERENTIALS, img } from '../data/home.js'
import { ChevronList, RichText } from '../components/ui.jsx'

export function NotAgency() {
  return (
    <section className="not-agency" id="quem-somos">
      <div className="not-agency__bg" aria-hidden>
        <div className="not-agency__iceberg">
          <img src={img('bg-iceberg.png')} alt="" />
        </div>
        <div className="not-agency__fade" />
      </div>

      <div className="not-agency__inner container">
        <div className="not-agency__copy" data-reveal>
          <div className="not-agency__group">
          <div className="not-agency__headline">
            <div className="not-agency__eyebrow">
              <span className="not-agency__tri not-agency__tri--l">
                <img src={img('tri-left.svg')} alt="" width="18" height="10" />
              </span>
              <span>Não somos</span>
              <span className="not-agency__tri not-agency__tri--r">
                <img src={img('tri-right.svg')} alt="" width="18" height="10" />
              </span>
            </div>
            <p className="not-agency__script">uma agência</p>
          </div>
          <h2 className="not-agency__title">
            somos <em>incorporadores</em>
            <br />
            ajudando <em>incorporadoras</em>
          </h2>
          </div>
          <span className="gradient-bar not-agency__bar" aria-hidden />
          <p className="not-agency__text">
            Entendemos que nossos parceiros{' '}
            <strong>precisam muito além do que agências generalistas entregam.</strong>
          </p>
        </div>

        <div className="compare" data-reveal>
          <div className="compare__card compare__card--agency">
            <p className="compare__pill">O que as agências de marketing entregam</p>
            <ChevronList items={AGENCY_ITEMS} chevron="chevron-blue.svg" line="line-agency.svg" />
          </div>
          <div className="compare__card compare__card--balzani">
            <p className="compare__pill">O que diferencia a Balzani</p>
            <ChevronList items={BALZANI_ITEMS} chevron="chevron-orange.svg" line="line-balzani.svg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function Mission() {
  return (
    <section className="mission">
      <div className="mission__band" aria-hidden>
        <img src={img('bg-wave-mission.png')} alt="" />
      </div>

      <div className="mission__inner container">
        <div className="mission__statement" data-reveal>
          <p className="mission__lead">Nossa missão é clara:</p>
          <p className="mission__accent">
            substituir o improviso por
            <br />
            Inteligência
          </p>
          <p className="mission__script">aplicada</p>
        </div>

        <img className="mission__line" src={img('mission-line.svg')} alt="" aria-hidden />

        <h2 className="mission__title" data-reveal>
          O que muda quando a Balzani entra em um lançamento
        </h2>

        <div className="diff-cards">
          {DIFFERENTIALS.map((d) => (
            <article key={d.title.join('')} className="diff-card" data-reveal>
              <span className="diff-card__icon" aria-hidden>
                {/* brilho (svg do Figma com blur) + traço nítido por cima */}
                <img src={img('icon-check.svg')} alt="" width="87.6" height="87.6" />
                <img src={img('icon-check-crisp.svg')} alt="" width="87.6" height="87.6" />
              </span>
              <h3 className="diff-card__title">
                {d.title[0]}
                {d.title[0] === 'NÃO SOMOS' && <br />}
                <span>{d.title[1]}</span>
              </h3>
              <p className="diff-card__text">
                <RichText parts={d.text} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
