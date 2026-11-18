import { ECOSYSTEM, img } from '../data/home.js'
import { ArrowIcon, SectionHeading } from '../components/ui.jsx'

function AttaLogo() {
  return (
    <span className="atta-logo" role="img" aria-label="Atta3D by Balzani">
      <img className="atta-logo__base" src={img('eco-atta-base.svg')} alt="" />
      <img className="atta-logo__mark" src={img('eco-atta-mark.svg')} alt="" />
      <span className="atta-logo__word">
        <img src={img('eco-atta-word.svg')} alt="" />
      </span>
    </span>
  )
}

export default function Ecosystem() {
  return (
    <section className="ecosystem">
      <SectionHeading kicker="Ecossistema Balzani" className="ecosystem__heading">
        Um grupo especializado em entregar soluções 360° para incorporadoras
      </SectionHeading>

      <div className="eco-cards container">
        {ECOSYSTEM.map((e) => {
          // Cards com site externo viram link e ganham o estado hover laranja do Figma
          const Tag = e.url ? 'a' : 'article'
          const linkProps = !e.url
            ? {}
            : e.internal
              ? { href: e.url, 'aria-label': `Conheça a ${e.name}` }
              : { href: e.url, target: '_blank', rel: 'noreferrer', 'aria-label': `Acesse o site da ${e.name}` }
          return (
            <Tag key={e.name} className={`eco-card ${e.url ? 'eco-card--link' : ''}`} data-reveal {...linkProps}>
              <div className="eco-card__content" style={{ gap: `calc(var(--u) * ${e.gap})` }}>
                <span className="eco-card__logo-wrap">
                  {e.logo.atta ? (
                    <AttaLogo />
                  ) : (
                    <img
                      className="eco-card__logo"
                      src={e.logo.src}
                      alt={e.name}
                      width={e.logo.w}
                      height={e.logo.h}
                      style={{ width: `calc(var(--u) * ${e.logo.w})` }}
                    />
                  )}
                </span>
                <div className="eco-card__swap">
                  <p className="eco-card__text" style={{ maxWidth: `calc(var(--u) * ${e.textWidth})` }}>
                    {e.text}
                  </p>
                  {e.url && (
                    <span className="pill pill--light eco-card__cta" aria-hidden>
                      <span>Acesse o site</span>
                      <ArrowIcon />
                    </span>
                  )}
                </div>
              </div>
              <span className="eco-card__bar" aria-hidden />
            </Tag>
          )
        })}
      </div>
    </section>
  )
}
