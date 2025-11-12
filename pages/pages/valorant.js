import Link from 'next/link'

export default function Valorant() {
  return (
    <div className="page">
      <header className="subheader">
        <h1>Valorant — Agents, Maps & Pro Configs</h1>
        <p>Tier lists, guias por mapa, e configs de proplayers.</p>
      </header>

      <main className="content">
        <section>
          <h2>Agentes (resumo)</h2>
          <ul>
            <li>Jett — Duelist — pick alto em mapas de entrada</li>
            <li>Raze — Duelist — forte em abertura</li>
            <li>Omen — Controller — controle de smokes</li>
          </ul>
        </section>

        <section>
          <h2>Map guides (exemplo)</h2>
          <p>Ascent — controle de mid com smokes e flashes. Icebox — cuidado com verticalidade.</p>
        </section>

        <section>
          <h2>Configs de pros</h2>
          <p>TenZ — DPI 800 • sens 0.5 • crosshair: preferências públicas</p>
        </section>

        <p><Link href="/"><a>← Voltar</a></Link></p>
      </main>
    </div>
  )
}
