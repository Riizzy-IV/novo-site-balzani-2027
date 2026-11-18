import { CONTACT, img } from '../data/home.js'
import { Kicker, PillButton } from '../components/ui.jsx'

// TODO: substituir os placeholders pelos posts reais (feed via API do Instagram ou imagens fixas)
const POSTS = Array.from({ length: 10 }, (_, i) => ({ id: i, image: null }))

export default function Instagram() {
  return (
    <section className="instagram">
      <div className="instagram__head container" data-reveal>
        <div className="instagram__heading">
          <Kicker>Acesse nosso instagram</Kicker>
          <a className="instagram__handle" href={CONTACT.instagram.url} target="_blank" rel="noreferrer">
            <img src={img('icon-instagram-box.svg')} alt="" width="64" height="64" />
            {CONTACT.instagram.handle}
          </a>
        </div>
        <PillButton href={CONTACT.instagram.url} target="_blank" rel="noreferrer">
          Acesse nosso instagram
        </PillButton>
      </div>

      <div className="instagram__grid container" data-reveal>
        {POSTS.map((p) => (
          <a
            key={p.id}
            className="instagram__post"
            href={CONTACT.instagram.url}
            target="_blank"
            rel="noreferrer"
            aria-label="Post no Instagram da Balzani"
          >
            {p.image && <img src={p.image} alt="" />}
          </a>
        ))}
      </div>
    </section>
  )
}
