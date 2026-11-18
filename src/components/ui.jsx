import { img } from '../data/home.js'

/** Seta diagonal usada nos botões (ícone do Figma espelhado na horizontal). */
export function ArrowIcon({ variant = 'navy' }) {
  return (
    <span className="arrow-icon" aria-hidden>
      <img src={img(variant === 'alt' ? 'icon-arrow-alt.svg' : 'icon-arrow-navy.svg')} alt="" />
    </span>
  )
}

/** Botão pílula (branco por padrão, laranja com variant="primary"). */
export function PillButton({ children, href = '#contato', variant = 'light', className = '', ...rest }) {
  return (
    <a href={href} className={`pill pill--${variant} ${className}`} {...rest}>
      <span>{children}</span>
      <ArrowIcon variant={variant === 'primary' ? 'alt' : 'navy'} />
    </a>
  )
}

/** Rótulo pequeno com o ícone laranja acima dos títulos de seção. */
export function Kicker({ children, className = '' }) {
  return (
    <p className={`kicker ${className}`}>
      <img src={img('icon-kicker.svg')} alt="" width="16" height="16" />
      <span>{children}</span>
    </p>
  )
}

export function SectionHeading({ kicker, children, align = 'center', className = '' }) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`} data-reveal>
      <Kicker>{kicker}</Kicker>
      <h2 className="section-heading__title">{children}</h2>
    </div>
  )
}

/** Lista com chevron e divisórias (usada no comparativo e nos serviços). */
export function ChevronList({ items, chevron = 'chevron-orange.svg', line, className = '' }) {
  return (
    <ul className={`chevron-list ${className}`}>
      {items.map((item, i) => (
        <li key={item}>
          {i > 0 && line && <img className="chevron-list__line" src={img(line)} alt="" />}
          <span className="chevron-list__item">
            <span className="chevron-list__icon" aria-hidden>
              <img src={img(chevron)} alt="" />
            </span>
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function Divider({ src = 'divider.svg', className = '' }) {
  return (
    <div className={`divider container ${className}`} aria-hidden>
      <img src={img(src)} alt="" />
    </div>
  )
}

/** Renderiza texto com trechos { bold: '...' }. */
export function RichText({ parts }) {
  return parts.map((p, i) =>
    typeof p === 'string' ? <span key={i}>{p}</span> : <strong key={i}>{p.bold}</strong>,
  )
}
