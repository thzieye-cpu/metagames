import Link from 'next/link'

export default function Fortnite() {
  return (
    <div className="page">
      <header className="subheader">
        <h1>Fortnite — Meta Completo</h1>
        <p>Rotinas de treino, armas, itens de cura, rotações, e sensibilidade dos pros (BR + internacionais).</p>
      </header>

      <main className="content">
        <section>
          <h2>Armas Meta (resumo)</h2>
          <ul>
            <li><strong>Pump Shotgun Mítica</strong> — altíssimo dano corpo-a-corpo. DPS estimado: 420</li>
            <li><strong>Rifle Térmico</strong> — controle de zona; ideal mid game.</li>
            <li><strong>SMG Compact</strong> — melhor em curta distância.</li>
          </ul>
        </section>

        <section>
          <h2>Itens de Cura</h2>
          <ul>
            <li>Slurp Mítico — booster contínuo</li>
            <li>Peixe Roxo — cura instantânea</li>
            <li>Big Shield — escudo extra</li>
          </ul>
        </section>

        <section>
          <h2>Rotações Meta (exemplos)</h2>
          <ol>
            <li>Frenzy → Lavish Lair — loot pesado inicial</li>
            <li>Hazy → Classy Courts — rota segura para mid game</li>
          </ol>
        </section>

        <section>
          <h2>Rotina de Treino (exemplo diário)</h2>
          <ol>
            <li>10 min — Warmup: aim trainer (tracking & flick)</li>
            <li>20 min — Edits / builds (prática de edição 1v1)</li>
            <li>20 min — Rotations e mapas (drop + rotação segura)</li>
            <li>10 min — Review: assistir replays e anotar erros</li>
          </ol>
        </section>

        <section>
          <h2>Configs de pros (exemplos)</h2>
          <ul>
            <li><strong>Bugha</strong> — DPI 800 • Sens 0.08 • binds: Q build • Fonte: public sources</li>
            <li><strong>Clix</strong> — DPI 800 • Sens 0.09 • binds: F reset • Fonte: public sources</li>
            <li><strong>Pulga (BR)</strong> — DPI 800 • Sens 0.085 • Fonte: stream e entrevistas</li>
          </ul>
        </section>

        <section>
          <h2>Links e fontes</h2>
          <p>As configurações e notas vêm de fontes públicas: vídeos oficiais, entrevistas, e páginas de pro settings. Sempre citamos a fonte quando disponível.</p>
        </section>

        <p><Link href="/"><a>← Voltar</a></Link></p>
      </main>
    </div>
  )
}
