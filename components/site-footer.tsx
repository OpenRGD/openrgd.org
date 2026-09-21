export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div>
          <strong>OpenRGD</strong>
          <span>Robot Graph Definition</span>
        </div>
        <div className="footer-meta">
          <a href="/openrgd">OpenRGD</a>
          <a href="/spec">Spec</a>
          <a href="/blog">Blog</a>
          <a href="/docs">Docs</a>
          <a href="https://studio.openrgd.org" target="_blank" rel="noreferrer">Studio</a>
          <span>MIT licensed</span>
        </div>
      </div>
    </footer>
  )
}
