import { img } from '../data/home.js'
import { SectionHeading } from '../components/ui.jsx'

const LOGOS = [
  { src: 'partner-neymar.svg', w: 288, h: 72, alt: 'Ecossistema Neymar Jr.' },
  { src: 'partner-inc.svg', w: 214, h: 89, alt: 'INC Empreendimentos' },
  { src: 'partner-dialogo.svg', w: 303, h: 94, alt: 'Diálogo Engenharia' },
  { src: 'partner-porte.svg', w: 248, h: 119.118, alt: 'Porte Engenharia e Urbanismo' },
  { src: 'partner-ginco.svg', w: 266, h: 51, alt: 'Ginco' },
]

export default function Partners() {
  return (
    <section className="partners" id="clientes">
      <img className="partners__hline partners__hline--top" src={img('partners-hline.svg')} alt="" aria-hidden />

      <SectionHeading kicker="Parceiros" className="partners__heading">
        Não queremos clientes, queremos parceiros
      </SectionHeading>

      <div className="partners__grid" data-reveal>
        <img className="partners__vline partners__vline--1" src={img('partners-vline.svg')} alt="" aria-hidden />
        <img className="partners__vline partners__vline--2" src={img('partners-vline.svg')} alt="" aria-hidden />
        <img className="partners__hline partners__hline--mid" src={img('partners-hline.svg')} alt="" aria-hidden />

        {LOGOS.map((l) => (
          <div key={l.src} className="partners__cell">
            <img
              src={img(l.src)}
              alt={l.alt}
              width={l.w}
              height={l.h}
              style={{ width: `calc(var(--u) * ${l.w})` }}
            />
          </div>
        ))}
        <div className="partners__cell partners__cell--stat">
          <p className="partners__stat-num">+170</p>
          <p className="partners__stat-label">incorporadoras atendidas</p>
        </div>
      </div>

      {/* TODO: inserir o vídeo institucional (o Figma mostra só o container) */}
      <div className="video-box container" data-reveal aria-label="Vídeo institucional (em breve)" />
    </section>
  )
}
