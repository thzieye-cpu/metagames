import Link from 'next/link'

export default function News() {
  return (
    <div className="page">
      <header className="subheader">
        <h1>Notícias & Patch Notes</h1>
        <p>Últimas atualizações (links para as fontes oficiais na versão final).</p>
      </header>

      <main className="content">
        <article className="news">
          <h3>Patch 9.1 — Fortnite</h3>
          <p>Rifle térmico buffado — mais precisão no mid game. — 2025-11-10</p>
        </article>

        <article className="news">
          <h3>Valorant 9.03</h3>
          <p>Nerf em habilidades de abertura — 2025-11-09</p>
        </article>

        <p><Link href="/"><a>← Voltar</a></Link></p>
      </main>
    </div>
  )
}
