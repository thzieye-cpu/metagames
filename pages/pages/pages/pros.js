import Link from 'next/link'

export default function Pros() {
  return (
    <div className="page">
      <header className="subheader">
        <h1>Pros BR & Internacionais</h1>
        <p>Perfis: sens, DPI, binds, crosshair e fontes.</p>
      </header>

      <main className="content">
        <section>
          <h2>Brasil</h2>
          <ul>
            <li><strong>Suetam</strong> — jogo: Fortnite • DPI 800 • sens 0.085 • Fonte: stream</li>
            <li><strong>Blackoutz</strong> — DPI 800 • sens 0.09 • Fonte: entrevistas</li>
            <li><strong>Pulga</strong> — DPI 800 • sens 0.085 • Fonte: vídeo oficial</li>
            <li><strong>The Feloz</strong> — configs públicas em stream</li>
          </ul>
        </section>

        <section>
          <h2>Internacionais</h2>
          <ul>
            <li>Bugha — DPI 800 • sens 0.08</li>
            <li>Clix — DPI 800 • sens 0.09</li>
            <li>TenZ — DPI 800 • sens 0.5 (Valorant)</li>
          </ul>
        </section>

        <p><Link href="/"><a>← Voltar</a></Link></p>
      </main>
    </div>
  )
}
