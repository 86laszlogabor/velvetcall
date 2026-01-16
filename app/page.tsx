import Link from "next/link";

type Pick = {
  slug: string;
  name: string;
  sub: string;
  chip: string;
  rating: number; // 0..5 (editorial, not value)
  href: string;
};

function Stars({ rating }: { rating: number }) {
  const r = Math.max(0, Math.min(5, Number.isFinite(rating) ? Math.trunc(rating) : 0));
  return (
    <span className="stars" aria-label={`${r} out of 5`} style={{ display: "inline-flex", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < r;
        return (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{ opacity: filled ? 1 : 0.35 }}
          >
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        );
      })}
    </span>
  );
}

const picks: Pick[] = [
  {
    slug: "qqpoker",
    name: "QQPoker",
    sub: "Mobile-first poker with big Asian traffic; availability varies by country — check local rules first.",
    chip: "Poker",
    rating: 4,
    href: "/partners#qqpoker",
  },
  {
    slug: "kkpoker",
    name: "KKPoker",
    sub: "Often used via clubs alongside a public lobby; read local terms before joining or depositing.",
    chip: "Poker",
    rating: 4,
    href: "/partners#kkpoker",
  },
  {
    slug: "everygame",
    name: "Everygame",
    sub: "Poker + casino under one account; eligibility depends on your country — verify before signup.",
    chip: "Mixed",
    rating: 3,
    href: "/partners#everygame",
  },
  {
    slug: "luckyblock",
    name: "LuckyBlock",
    sub: "Crypto-forward casino; pay attention to wagering and withdrawal conditions before you opt in.",
    chip: "Casino",
    rating: 3,
    href: "/partners#luckyblock",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left">
              <span className="kicker">
                Poker and casino as entertainment — no “get rich” story, just a clean shortlist.
              </span>

              <h1>VelvetCall — play, don’t overthink it</h1>

              <p className="lead">
                We’re not a bonus directory. We publish a small list on purpose: a few places we’d actually use,
                plus the context people skip — what it feels like, where it’s available, what can go wrong,
                and what to verify before you deposit (especially if you’re signing up from Finland or the EU).
              </p>

              <p
                className="lead"
                style={{ marginTop: -6, fontSize: 13.5, color: "rgba(255,255,255,0.72)" }}
              >
                We’d rather lose a signup than sell you a fantasy.
              </p>

              <div className="hero-notes" aria-label="What you get here">
                <div className="note">
                  <b>Real expectations</b>
                  <span>
                    No promo talk. If support is slow, rules are unclear, or withdrawals get “sticky”, we say it.
                  </span>
                </div>

                <div className="note">
                  <b>Country reality</b>
                  <span>
                    What works in Asia may not work in Finland (or your country). We flag region fit up front.
                  </span>
                </div>

                <div className="note">
                  <b>No systems, no promises</b>
                  <span>
                    Gambling is entertainment. We don’t sell “edge”, guaranteed profit, or bonus-math theater.
                  </span>
                </div>
              </div>

              <div className="cta-row" aria-label="Primary actions">
                <Link className="btn primary" href="/partners">
                  See the shortlist
                </Link>
                <Link className="btn ghost" href="/promotions">
                  Promotions (read the terms)
                </Link>
              </div>

              <div className="meta-row" aria-label="Metadata">
                <span>
                  Updated: <code>2026-01-16</code>
                </span>
                <span>
                  Scope: <code>Finland / EU</code> (country-fit flagged)
                </span>
              </div>
            </div>

            <aside className="hero-right" aria-label="Top picks">
              <div className="panel-head">
                <h3>Shortlist</h3>
                <span className="tiny">4 picks</span>
              </div>

              <div className="toplist">
                {picks.map((p) => (
                  <Link key={p.slug} className="topitem" href={p.href}>
                    <div className="logo" aria-hidden="true" />
                    <div>
                      <div className="name">
                        {p.name} <span className="chip">{p.chip}</span>
                      </div>
                      <div className="sub">{p.sub}</div>
                    </div>
                    <div className="topitem-right">
                      <Stars rating={p.rating} />
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Curated picks">
        <div className="container">
          <div className="section-title">
            <h2>Curated picks</h2>
            <div className="hint">Small list, clearer reasons, fewer surprises.</div>
          </div>

          <div className="picks-grid">
            {picks.map((p) => (
              <div className="pick" key={p.slug}>
                <div className="pick-head">
                  <h3 className="pick-title">{p.name}</h3>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span className="pilltag">{p.chip}</span>
                    <Stars rating={p.rating} />
                  </div>
                </div>

                <div className="pick-body">
                  <p className="pick-sub">{p.sub}</p>
                  <div className="pick-actions">
                    <Link className="btn primary" href={p.href}>
                      Details
                    </Link>
                    <Link className="btn ghost" href="/promotions">
                      Promotions (read the terms)
                    </Link>
                  </div>

                  <div className="fineprint" style={{ marginTop: 10 }}>
                    18+. Eligibility and availability vary by country. Always verify terms before depositing.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="FAQ">
        <div className="container">
          <div className="section-title">
            <h2>FAQ</h2>
            <div className="hint">Straight answers, no bonus-theater.</div>
          </div>

          <div className="faq">
            <details>
              <summary>Is VelvetCall a gambling site?</summary>
              <div className="faq-body">
                No. VelvetCall is an editorial guide. We don’t take deposits, place bets, or process payments.
                We link out and tell you what to verify before you spend money.
              </div>
            </details>

            <details>
              <summary>Do you guarantee profit, “value”, or winning systems?</summary>
              <div className="faq-body">
                No. If someone promises profit in gambling, they’re either mistaken or selling you something.
                We treat poker and casino as entertainment — with clear risks and practical checks.
              </div>
            </details>

            <details>
              <summary>Why keep the list so small?</summary>
              <div className="faq-body">
                Because we can’t responsibly track 100+ sites. A short list stays accountable:
                fewer picks, clearer reasons, and fewer surprises for readers.
              </div>
            </details>
          </div>

          <div className="fineprint" style={{ marginTop: 12 }}>
            If you’re unsure whether a site is available in your country, assume “maybe” and verify first.
          </div>
        </div>
      </section>
    </>
  );
}
