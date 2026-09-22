import Image from 'next/image'

type SiteHeaderProps = {
  intro?: boolean
}

const LOGO_URL = 'https://raw.githubusercontent.com/OpenRGD/openrgd/main/assets/branding/openrgd.png'

const primaryLinks = [
  ['/openrgd','OpenRGD'],
  ['/architecture','Architecture'],
  ['/standards','Standards'],
  ['/robots','Robots'],
  ['/research','Research'],
  ['/docs','Developers'],
]

export default function SiteHeader({ intro = false }: SiteHeaderProps) {
  return (
    <header className={'topbar' + (intro ? ' intro intro-1' : '')}>
      <a className="brand brand-logo-link" href="/" aria-label="OpenRGD home">
        <Image
          className="brand-logo"
          src={LOGO_URL}
          alt="OpenRGD"
          width={164}
          height={42}
          priority
        />
      </a>

      <nav className="nav nav-primary" aria-label="Primary navigation">
        {primaryLinks.map(([href,label])=>(
          <a href={href} key={href}>{label}</a>
        ))}
      </nav>

      <div className="header-actions">
        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">Menu</summary>
          <nav aria-label="Mobile navigation">
            {primaryLinks.map(([href,label])=>(
              <a href={href} key={href}>{label}</a>
            ))}
            <a href="https://github.com/OpenRGD/openrgd" target="_blank" rel="noreferrer">GitHub ↗</a>
          </nav>
        </details>

        <a className="github-link" href="https://github.com/OpenRGD/openrgd" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>
    </header>
  )
}
