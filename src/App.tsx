import { WaitlistDialog } from './WaitlistDialog'
import './App.css'

const FOLLOW_URL =
  'https://x.com/joseph_ajibodu/status/2029949892865507430?s=20'

export default function App() {
  return (
    <div className="page">
      <main className="hero">
        <div className="hero__head">
          <span className="brand-pill">Flitops</span>
          <h1 className="hero__title">
            Server management for <em className="hero__emph">Laravel</em> and
            PHP projects
          </h1>
        </div>
        <p className="hero__lede">
          <strong>Coming soon:</strong> one dashboard to spin up servers, deploy
          Laravel, PHP, or static sites, and add MySQL, Redis, and the rest when
          you need them. If you know cPanel, the idea will feel familiar, we just
          built it for how modern PHP teams work.
        </p>

        <div className="hero__actions">
          <WaitlistDialog />
          <a
            className="btn btn--secondary"
            href={FOLLOW_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow along
          </a>
        </div>
      </main>

      <footer className="foot">
        <p>© {new Date().getFullYear()} Flitops</p>
      </footer>
    </div>
  )
}
