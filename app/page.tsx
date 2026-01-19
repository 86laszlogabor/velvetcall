import Link from "next/link";

type Pick = {
  slug: string;
  name: string;
  sub: string;
  chip: string;
  rating: number; // 0..5 (editorial, not value)
  href: string; // internal details anchor
  ctaHref?: string; // optional external affiliate CTA
  ctaLabel?: string; // optional CTA label
  inviteCode?: string; // optional invite code (display only)
  rbNote?: string; // optional note like "up to 50% RB"
};

function Stars({ rating }: { rating: number }) {
  const r = Math.max(
    0,
    Math.min(5, Number.isFinite(rating) ? Math.trunc(rating) : 0)
  );

  return (
    <span
      className="stars"
      aria-label={`${r} out of 5`}
      style={{ display: "inline-flex", gap: 2 }}
    >
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
    sub: "Fast mobile setup and lively tables. Good when you want quick action without overplanning the session.",
    chip: "Poker",
    rating: 4,
    href: "/partners#qqpoker",
    ctaHref: "https://qqpk1007.cc:51999?shareCode=MG3VQU",
    ctaLabel: "Join QQPoker",
    inviteCode: "MG3VQU",
    rbNote: "Perks: up to 50% rakeback (varies)",
  },
  {
    slug: "kkpoker",
    name: "KKPoker",
    sub: "A mix of club-style games and a public lobby. Great if you like a more “community” feel and private tables.",
    chip: "Poker",
    rating: 4,
    href: "/partners#kkpoker",
    ctaHref: "https://kkpoker.club/velvetcall",
    ctaLabel: "Join KKPoker",
    inviteCode: "velvetcall",
    rbNote: "Perks: up to 50% rakeback (varies)",
  },
  {
    slug: "betsafe",
    name: "BetSafe",
    sub: "Casino + sportsbook in one place. A clean choice for weekend spins, live casino, and sports in the same account.",
    chip: "Casino",
    rating: 4,
    href: "/partners#betsafe",
    // NOTE: waiting for your BetSafe affiliate tracking link
  },
  {
    slug: "leovegas",
    name: "LeoVegas",
    sub: "A polished mobile casino experience—slots, live tables, and easy account handling. Built for phone-first play.",
    chip: "Casino",
    rating: 4,
    href: "/partners#leovegas",
    // NOTE: waiting for your LeoVegas affiliate tracking link
  },
];

function ExternalCta({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="btn primary"
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
    >
      {label}
    </a>
  );
}

/**
 * HeroIllustration
 * A calm, on-brand poker/casino abstract illustration rendered in SVG (no external image needed).
 * Works with VelvetCall's dark + gold palette and prevents the hero right side from feeling empty.
 */
function HeroIllustration() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        height: "100%",
        minHeight: 360,
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(217,179,93,0.18)",
        background:
          "radial-gradient(120% 100% at 80% 20%, rgba(217,179,93,0.22), transparent 55%)," +
          "radial-gradient(100% 120% at 20% 80%, rgba(20,120,90,0.35), transparent 60%)," +
          "linear-gradient(180deg, rgba(10,20,18,0.85), rgba(8,14,12,0.95))",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.02)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(70% 60% at 50% 40%, rgba(255,255,255,0.04), transparent 62%)," +
            "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.55))",
          pointerEvents: "none",
        }}
      />

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 900 520"
        preserveAspectRatio="xMidYMid slice"
        style={{ display: "block" }}
      >
        <defs>
          <radialGradient id="goldGlow" cx="35%" cy="25%" r="70%">
            <stop offset="0%" stopColor="rgba(255,215,120,0.35)" />
            <stop offset="45%" stopColor="rgba(217,179,93,0.14)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>

          <radialGradient id="chipGlow" cx="30%" cy="30%" r="75%">
            <stop offset="0%" stopColor="rgba(255,215,120,0.30)" />
            <stop offset="55%" stopColor="rgba(217,179,93,0.12)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>

          <linearGradient id="cardFace" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(217,179,93,0.26)" />
            <stop offset="100%" stopColor="rgba(217,179,93,0.04)" />
          </linearGradient>

          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" />
          </filter>

          <filter id="lift" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="18"
              floodColor="rgba(0,0,0,0.45)"
            />
          </filter>
        </defs>

        <circle
          cx="650"
          cy="120"
          r="260"
          fill="url(#goldGlow)"
          filter="url(#softBlur)"
        />
        <circle
          cx="280"
          cy="410"
          r="240"
          fill="rgba(20,120,90,0.18)"
          filter="url(#softBlur)"
        />

        <g transform="translate(560,270) rotate(8)" opacity="0.95">
          <ellipse cx="0" cy="120" rx="150" ry="34" fill="rgba(0,0,0,0.35)" />
          <g filter="url(#lift)">
            <ellipse
              cx="0"
              cy="92"
              rx="150"
              ry="34"
              fill="rgba(14,22,20,0.85)"
              stroke="rgba(217,179,93,0.22)"
            />
            <ellipse
              cx="0"
              cy="72"
              rx="142"
              ry="30"
              fill="rgba(12,18,16,0.88)"
              stroke="rgba(217,179,93,0.18)"
            />
            <ellipse
              cx="0"
              cy="52"
              rx="132"
              ry="28"
              fill="rgba(10,16,14,0.92)"
              stroke="rgba(217,179,93,0.16)"
            />
            <circle cx="-58" cy="52" r="78" fill="url(#chipGlow)" opacity="0.8" />
          </g>
        </g>

        <g transform="translate(165,110) rotate(-8)" filter="url(#lift)">
          <rect
            x="0"
            y="0"
            width="190"
            height="260"
            rx="18"
            fill="rgba(8,14,12,0.78)"
            stroke="rgba(217,179,93,0.22)"
          />
          <rect x="18" y="18" width="154" height="224" rx="14" fill="url(#cardFace)" />
          <circle cx="54" cy="64" r="18" fill="rgba(255,255,255,0.06)" />
          <circle cx="136" cy="196" r="18" fill="rgba(255,255,255,0.04)" />
        </g>

        <g transform="translate(720,420)">
          <circle
            cx="0"
            cy="0"
            r="160"
            fill="none"
            stroke="rgba(217,179,93,0.12)"
            strokeWidth="14"
          />
          <circle
            cx="0"
            cy="0"
            r="110"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="10"
          />
        </g>
      </svg>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left">
              <span className="kicker">
                Poker & casino for fun — a short list you can actually pick from.
              </span>

              <h1>VelvetCall — pick a room, play a session</h1>

              <p className="lead">
                No scrolling through endless directories. We keep it simple: a small shortlist of
                poker rooms and casinos that are easy to start with, feel good on mobile, and fit
                casual play.
              </p>

              <p
                className="lead"
                style={{ marginTop: -6, fontSize: 13.5, color: "rgba(255,255,255,0.72)" }}
              >
                If you just want a clean recommendation and a smooth signup, you’re in the right place.
              </p>

              <div className="hero-notes" aria-label="What VelvetCall is about">
                <div className="note">
                  <b>Small list</b>
                  <span>Four picks. Easy to compare. No noise.</span>
                </div>

                <div className="note">
                  <b>Mobile-first</b>
                  <span>Most people play on their phone. So do we.</span>
                </div>

                <div className="note">
                  <b>Simple perks</b>
                  <span>Codes and offers where it makes sense—kept short and readable.</span>
                </div>
              </div>

              <div className="cta-row" aria-label="Primary actions">
                <Link className="btn primary" href="/partners">
                  See partners
                </Link>
                <Link className="btn ghost" href="/promotions">
                  Offers & promos
                </Link>
              </div>

              <div className="meta-row" aria-label="Metadata">
                <span>
                  Updated: <code>2026-01-16</code>
                </span>
                <span>
                  <code>EU</code> (availability varies)
                </span>
              </div>
            </div>

            <aside className="hero-right" aria-hidden="true">
              <HeroIllustration />
            </aside>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Curated picks">
        <div className="container">
          <div className="section-title">
            <h2>Curated picks</h2>
            <div className="hint">A small shortlist you can choose from in one minute.</div>
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

                  {(p.inviteCode || p.rbNote) && (
                    <div className="fineprint" style={{ marginTop: 10 }}>
                      {p.inviteCode ? (
                        <>
                          Invite code: <b>{p.inviteCode}</b>
                        </>
                      ) : null}
                      {p.inviteCode && p.rbNote ? <span> · </span> : null}
                      {p.rbNote ? <span>{p.rbNote}</span> : null}
                    </div>
                  )}

                  <div className="pick-actions">
                    <Link className="btn ghost" href={p.href}>
                      Details
                    </Link>

                    {p.ctaHref && p.ctaLabel ? (
                      <ExternalCta href={p.ctaHref} label={p.ctaLabel} />
                    ) : (
                      <Link className="btn primary" href={p.href}>
                        Get started
                      </Link>
                    )}

                    <Link className="btn ghost" href="/promotions">
                      Offers & promos
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="fineprint" style={{ marginTop: 12 }}>
            18+. Play responsibly. Availability and terms vary by country and provider. Some links may be affiliate links.
          </div>
        </div>
      </section>

      <section className="section" aria-label="FAQ">
        <div className="container">
          <div className="section-title">
            <h2>FAQ</h2>
            <div className="hint">Quick answers, kept simple.</div>
          </div>

          <div className="faq">
            <details>
              <summary>Is VelvetCall a gambling site?</summary>
              <div className="faq-body">
                No. VelvetCall is a guide. We don’t take deposits or run games—we point you to partners and keep the list simple.
              </div>
            </details>

            <details>
              <summary>Is this meant for serious grinders?</summary>
              <div className="faq-body">
                Not really. VelvetCall is for people who want a fun session and a clean shortlist—without the “guru” vibe.
              </div>
            </details>

            <details>
              <summary>Why keep the list so small?</summary>
              <div className="faq-body">
                Because it’s easier to keep it clean. A short list stays readable and makes choosing quick.
              </div>
            </details>
          </div>

          <div className="fineprint" style={{ marginTop: 12 }}>
            If something isn’t available in your country, just pick another option from the shortlist.
          </div>
        </div>
      </section>
    </>
  );
}
