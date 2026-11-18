import { useEffect, useState } from 'react'
import { NAV, img } from '../data/home.js'
import { PillButton } from './ui.jsx'
import { setScrollLocked } from '../lib/smoothScroll.js'

const HEADER_LINKS = NAV.filter((n) => ['Quem somos', 'Serviços', 'Cases', 'Clientes'].includes(n.label))

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setScrollLocked(open)
    return () => setScrollLocked(false)
  }, [open])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <img className="header__bg" src={img('header-bg.png')} alt="" aria-hidden />
      <div className="header__inner container">
        <a href="#top" className="header__logo" aria-label="Balzani — início">
          <img src={img('logo-balzani.svg')} alt="Balzani" width="143" height="27" />
        </a>
        <nav className="header__nav" aria-label="Principal">
          {HEADER_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <PillButton href="#contato" className="header__cta header__cta--mobile" onClick={() => setOpen(false)}>
            Vamos conversar
          </PillButton>
        </nav>
        <PillButton href="#contato" className="header__cta">
          Vamos conversar
        </PillButton>
        <button
          className="header__burger"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
