import { MEDIA } from '../data/home.js'
import { Kicker, PillButton } from '../components/ui.jsx'

export default function Media() {
  return (
    <section className="media">
      <div className="media__box container" data-reveal>
        <div className="media__copy">
          <div className="media__heading">
            <Kicker>Balzani na mídia</Kicker>
            <h2 className="media__title">O que os maiores portais falam do Grupo Balzani</h2>
          </div>
          <PillButton href={MEDIA.allUrl} variant="primary" className="media__all">
            Veja todas as materias
          </PillButton>
        </div>

        <div className="media__feature">
          <div className="media__shot" aria-hidden>
            <img src={MEDIA.image} alt="" />
          </div>
          <PillButton href={MEDIA.featuredUrl} className="media__read">
            Leia a matéria
          </PillButton>
        </div>
      </div>
    </section>
  )
}
