type SiteHeaderProps = {
  intro?: boolean
}

const LOGO_URL = 'https://raw.githubusercontent.com/OpenRGD/openrgd/main/assets/branding/openrgd.png'

export default function SiteHeader({ intro = false }: SiteHeaderProps) {
  return (
    <header className={'topbar' + (intro ? ' intro intro-1' : '')}>
      <a className="brand brand-logo-link" href="/" aria-label="OpenRGD home">
        <img
          className="brand-logo"
          src={LOGO_URL}
          alt="OpenRGD"
          width={164}
          height={42}
          fetchPriority="high"
          decoding="async"
        />
      </a>

      <nav className="nav nav-primary" aria-label="Primary navigation">
        <a href="/openrgd">OpenRGD</a>
        <a href="/architecture">Architecture</a>
        <a href="/standards">Standards</a>
        <a href="/robots">Robots</a>
        <a href="/research">Research</a>
        <a href="/docs">Developers</a>
      </nav>

      <a className="github-link" href="https://github.com/OpenRGD/openrgd" target="_blank" rel="noreferrer">
        GitHub ↗
      </a>
    </header>
  )
}
