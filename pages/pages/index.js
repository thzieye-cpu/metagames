import Link from 'next/link'

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <h1>METAGAMES ULTIMATE</h1>
        <p className="tag">Hub de meta — Fortnite • Clash Royale • Valorant • Pros BR</p>
      </header>

      <nav className="nav">
        <Link href="/fortnite"><a>Fortnite</a></Link>
        <Link href="/clash"><a>Clash Royale</a></Link>
        <Link href="/valorant"><a>Valorant</a></Link>
        <Link href="/pros"><a>Pros BR</a></Link>
        <Link href="/news"><a>Notícias</a></Link>
        <Link href="/privacy"><a>Política de Privacidade</a></Link>
      </nav>

      <main className="content">
        <section className="hero">
          <h2>Meta atualizado — dados reais e perfis de proplayers</h2>
          <p>Prioridade: Fortnite → Clash Royale → Valorant. Atualização automática diária (quando integrado a APIs).</p>
        </section>

        <section className="cards">
          <article>
            <h3>Fortnite — Treinos & Meta</h3>
            <p>Rotinas de treino, sensibilidade dos pros, rotas, armas e itens. Veja /fortnite.</p>
          </article>

          <article>
            <h3>Clash Royale — Decks</h3>
            <p>Decks meta, counters e decks de pros. Veja /clash.</p>
          </article>

          <article>
            <h3>Valorant — Agents & Maps</h3>
            <p>Tier lists, guias de mapas e configs de pros. Veja /valorant.</p>
          </article>
        </section>
      </main>

      <footer className="footer">
        <small>© METAGAMES ULTIMATE — Conteúdo baseado em fontes públicas. <br/> Para monetizar com anúncios, configure AdSense após publicar.</small>
      </footer>
    </div>
  )
}
