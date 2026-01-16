import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="nav">
          <Link className="brand" href="/">
            <span className="brand-badge" aria-hidden="true" />
            <span className="brand-text">
              <span className="brand-name">VelvetCall</span>
              <small className="brand-sub">Entertainment-first guides</small>
            </span>
          </Link>

          <nav className="nav-center" aria-label="Primary navigation">
            <ul className="nav-links">
              <li>
                <Link href="/poker">Poker</Link>
              </li>
              <li>
                <Link href="/casino">Casino</Link>
              </li>
              <li>
                <Link href="/promotions" className="nav-promo">
                  Promotions
                </Link>
              </li>
              <li>
                <Link href="/partners">Partners</Link>
              </li>
              <li>
                <Link href="/policy">Policy</Link>
              </li>
            </ul>
          </nav>

          <div className="nav-right">
            <Link className="btn primary" href="/partners">
              Top picks
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
