import { useRef } from 'react'
import '../styles/home.css'
import useReveal from '../hooks/useReveal.js'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Divider } from '../components/ui.jsx'
import Hero from '../sections/Hero.jsx'
import { Mission, NotAgency } from '../sections/About.jsx'
import Ecosystem from '../sections/Ecosystem.jsx'
import Services from '../sections/Services.jsx'
import Partners from '../sections/Partners.jsx'
import Formulas from '../sections/Formulas.jsx'
import Numbers from '../sections/Numbers.jsx'
import Cases from '../sections/Cases.jsx'
import Leaders from '../sections/Leaders.jsx'
import Media from '../sections/Media.jsx'
import Instagram from '../sections/Instagram.jsx'

export default function Home() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <div className="page" ref={ref}>
      <Header />
      <main>
        <Hero />
        <NotAgency />
        <div className="band band--a">
          <Mission />
          <Ecosystem />
          <Divider className="divider--eco" />
          <Services />
          <Partners />
          <Formulas />
          <Divider className="divider--formulas" />
          <Numbers />
        </div>
        <div className="band band--b">
          <Cases />
          <Divider className="divider--cases" />
          <Leaders />
          <Media />
          <Instagram />
        </div>
      </main>
      <Footer />
    </div>
  )
}
