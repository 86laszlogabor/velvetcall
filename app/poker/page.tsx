import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Poker | VelvetCall",
  description:
    "Poker as entertainment — two mobile-first profiles and a clean way to join.",
};

function OutboundButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="btn primary"
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
    >
      {children}
    </a>
  );
}

function AffiliateBox({
  brand,
  href,
  inviteLabel,
  inviteCode,
  rbNote,
  extraNote,
}: {
  brand: string;
  href: string;
  inviteLabel: string;
  inviteCode: string;
  rbNote: string;
  extraNote?: string;
}) {
  return (
    <div
      className="note"
      style={{
        marginTop: 12,
        borderColor: "rgba(217, 179, 93, 0.22)",
        background: "rgba(217, 179, 93, 0.06)",
      }}
      aria-label={`${brand} affiliate link and invite code`}
    >
      <b style={{ display: "block", marginBottom: 6 }}>
        Join {brand} via VelvetCall
      </b>

      <span style={{ display: "block", lineHeight: 1.45 }}>
        <span style={{ color: "rgba(255,255,255,0.86)" }}>Invite code:</span>{" "}
        <b>{inviteCode}</b>{" "}
        <span style={{ color: "rgba(255,255,255,0.70)" }}>
          ({inviteLabel})
        </span>
        <br />
        <span style={{ color: "rgba(255,255,255,0.86)" }}>Offer:</span> {rbNote}
        {extraNote ? (
          <>
            <br />
            <span style={{ color: "rgba(255,255,255,0.86)" }}>Note:</span>{" "}
            {extraNote}
          </>
        ) : null}
      </span>

      <div className="cta-row" style={{ marginTop: 10 }}>
        <OutboundButton href={href}>Join {brand}</OutboundButton>
        <Link className="btn ghost" href="/policy">
          Policy
        </Link>
      </div>

      <div className="fineprint" style={{ marginTop: 10 }}>
        18+. Play responsibly. Availability and terms can vary by country and
        provider.
      </div>
    </div>
  );
}

/**
 * Decorative, self-contained hero art (no image assets needed).
 * Uses an inline SVG as a background image to fill the “empty” hero space tastefully.
 */
function HeroPokerArt() {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="520" viewBox="0 0 1200 520">
    <defs>
      <radialGradient id="g1" cx="30%" cy="20%" r="90%">
        <stop offset="0%" stop-color="#d9b35d" stop-opacity="0.20"/>
        <stop offset="45%" stop-color="#0b3a2a" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="g2" cx="70%" cy="65%" r="80%">
        <stop offset="0%" stop-color="#d9b35d" stop-opacity="0.14"/>
        <stop offset="55%" stop-color="#0b3a2a" stop-opacity="0.06"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="strokeGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffe9b0" stop-opacity="0.55"/>
        <stop offset="60%" stop-color="#d9b35d" stop-opacity="0.28"/>
        <stop offset="100%" stop-color="#d9b35d" stop-opacity="0.12"/>
      </linearGradient>
      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur"/>
        <feColorMatrix in="blur" type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 0.55 0" result="blur2"/>
        <feMerge>
          <feMergeNode in="blur2"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <rect width="1200" height="520" fill="#071a13"/>
    <rect width="1200" height="520" fill="url(#g1)"/>
    <rect width="1200" height="520" fill="url(#g2)"/>

    <!-- subtle grid -->
    <g opacity="0.08">
      ${Array.from({ length: 16 })
        .map((_, i) => {
          const x = 60 + i * 70;
          return `<line x1="${x}" y1="0" x2="${x}" y2="520" stroke="#ffffff" stroke-width="1"/>`;
        })
        .join("")}
      ${Array.from({ length: 8 })
        .map((_, i) => {
          const y = 60 + i * 60;
          return `<line x1="0" y1="${y}" x2="1200" y2="${y}" stroke="#ffffff" stroke-width="1"/>`;
        })
        .join("")}
    </g>

    <!-- cards -->
    <g filter="url(#softGlow)">
      <g transform="translate(205,120) rotate(-10)">
        <rect x="0" y="0" width="235" height="320" rx="18" fill="rgba(255,255,255,0.03)" stroke="url(#strokeGold)" stroke-width="2"/>
        <path d="M40 70c22-24 54-24 76 0c22 24 0 48-38 76c-38-28-60-52-38-76z" fill="rgba(217,179,93,0.30)"/>
        <text x="34" y="48" fill="rgba(255,241,207,0.60)" font-size="18" font-family="ui-sans-serif, system-ui">A</text>
        <text x="36" y="312" fill="rgba(255,241,207,0.45)" font-size="18" font-family="ui-sans-serif, system-ui">A</text>
      </g>

      <g transform="translate(330,95) rotate(6)">
        <rect x="0" y="0" width="250" height="340" rx="18" fill="rgba(255,255,255,0.035)" stroke="url(#strokeGold)" stroke-width="2"/>
        <path d="M78 110c0-26 20-46 46-46c26 0 46 20 46 46c0 26-20 46-46 46c-26 0-46-20-46-46z" fill="rgba(217,179,93,0.22)"/>
        <path d="M124 70l14 24l-28 0z" fill="rgba(217,179,93,0.22)"/>
        <text x="32" y="54" fill="rgba(255,241,207,0.60)" font-size="18" font-family="ui-sans-serif, system-ui">K</text>
        <text x="34" y="330" fill="rgba(255,241,207,0.45)" font-size="18" font-family="ui-sans-serif, system-ui">K</text>
      </g>
    </g>

    <!-- chip -->
    <g transform="translate(770,150)" filter="url(#softGlow)">
      <circle cx="140" cy="140" r="120" fill="rgba(255,255,255,0.03)" stroke="url(#strokeGold)" stroke-width="3"/>
      <circle cx="140" cy="140" r="92" fill="rgba(255,255,255,0.02)" stroke="rgba(217,179,93,0.22)" stroke-width="3"/>
      <circle cx="140" cy="140" r="54" fill="rgba(217,179,93,0.10)" stroke="rgba(255,241,207,0.22)" stroke-width="2"/>
      ${Array.from({ length: 10 })
        .map((_, i) => {
          const a = (i * Math.PI * 2) / 10;
          const x1 = 140 + Math.cos(a) * 104;
          const y1 = 140 + Math.sin(a) * 104;
          const x2 = 140 + Math.cos(a) * 120;
          const y2 = 140 + Math.sin(a) * 120;
          return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(
            1
          )}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(
            1
          )}" stroke="rgba(217,179,93,0.28)" stroke-width="6" stroke-linecap="round"/>`;
        })
        .join("")}
      <text x="140" y="153" text-anchor="middle" fill="rgba(255,241,207,0.55)" font-size="18" font-family="ui-sans-serif, system-ui">
        VelvetCall
      </text>
    </g>

    <!-- footer line -->
    <path d="M120 460 C 360 420, 840 520, 1080 440" fill="none" stroke="rgba(217,179,93,0.16)" stroke-width="2"/>
  </svg>`;

  const dataUri = `data:image/svg+xml,${encodeURIComponent(svg)}`;

  return (
    <div
      aria-hidden="true"
      style={{
        marginTop: 16,
        height: 220,
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.08)",
        backgroundImage: `url("${dataUri}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        boxShadow: "0 18px 45px rgba(0,0,0,0.28)",
      }}
    />
  );
}

export default function PokerPage() {
  return (
    <>
      <main className="site-main">
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-left">
                <span className="kicker">
                  Poker as entertainment — clean picks, smooth mobile play.
                </span>

                <h1>Poker</h1>

                <p className="lead">
                  VelvetCall keeps poker simple: two profiles you can scan fast,
                  then pick the vibe you want for a fun session. If you’re here
                  for a clean shortlist and an easy join flow, start with one of
                  the two options below.
                </p>

                <div className="cta-row" aria-label="Primary actions">
                  <Link className="btn primary" href="#qqpoker">
                    QQPoker (fast & mobile)
                  </Link>
                  <Link className="btn ghost" href="#kkpoker">
                    KKPoker (clubs & community)
                  </Link>
                </div>

                <div className="meta-row" aria-label="Metadata">
                  <span>
                    Updated: <code>2026-01-16</code>
                  </span>
                  <span>
                    Scope: <code>EU</code> (availability varies)
                  </span>
                </div>

                <HeroPokerArt />
              </div>

              {/* RIGHT SIDEBAR */}
              <aside className="hero-right" aria-label="Join via VelvetCall">
                <div className="panel-head">
                  <h3>Join via VelvetCall</h3>
                  <span className="tiny">2 offers</span>
                </div>

                <div
                  style={{
                    padding: 12,
                    display: "grid",
                    gap: 12,
                  }}
                >
                  <AffiliateBox
                    brand="QQPoker"
                    href="https://qqpk1007.cc:51999?shareCode=MG3VQU"
                    inviteLabel="shareCode"
                    inviteCode="MG3VQU"
                    rbNote="up to 50% RB (varies)"
                    extraNote="casino perks may include up to 10% cashback (terms apply)"
                  />

                  <AffiliateBox
                    brand="KKPoker"
                    href="https://kkpoker.club/velvetcall"
                    inviteLabel="invitecode"
                    inviteCode="velvetcall"
                    rbNote="up to 50% RB (varies)"
                  />

                  <div className="fineprint" style={{ marginTop: 2 }}>
                    New here? Start with the Policy page, then use the partner’s
                    support for account-specific help.
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="section" aria-label="Poker profiles">
          <div className="container">
            <div className="section-title">
              <h2>Profiles</h2>
              <div className="hint">
                Two picks, written for quick scanning and an easy choice.
              </div>
            </div>

            <div className="picks-grid">
              {/* QQPoker */}
              <article className="pick" id="qqpoker" aria-label="QQPoker profile">
                <div className="pick-head">
                  <h3 className="pick-title">
                    QQPoker — Fast mobile poker (USDT-friendly)
                  </h3>
                  <span className="pilltag">Poker</span>
                </div>

                <div className="pick-body">
                  <p className="pick-sub">
                    QQPoker is a mobile-first poker app made for quick sessions
                    and fast table access. If you like an action-forward feel
                    and you’re comfortable with modern cashier options (including
                    crypto where available), this is the “get in and play” pick.
                  </p>

                  <h4
                    style={{
                      margin: "14px 0 8px",
                      fontSize: 14,
                      letterSpacing: 0.2,
                      color: "rgba(255, 241, 207, 0.92)",
                    }}
                  >
                    What people like about QQPoker
                  </h4>

                  <div className="faq" style={{ gap: 10 }}>
                    <details open>
                      <summary>Quick sessions, phone-first experience</summary>
                      <div className="faq-body">
                        QQPoker is built with mobile as the default. It’s an
                        easy choice if you want to hop in for a session without
                        needing a full desktop setup.
                      </div>
                    </details>

                    <details>
                      <summary>Modern cashier options (where available)</summary>
                      <div className="faq-body">
                        In many setups you’ll see crypto-friendly rails in the
                        cashier, which can be a convenient alternative to
                        traditional banking. The exact options depend on your
                        country and what the app shows for your account.
                      </div>
                    </details>

                    <details>
                      <summary>Action-forward vibe</summary>
                      <div className="faq-body">
                        Sessions often feel more “play-first” than study-heavy.
                        If your goal is enjoyment and volume of hands rather
                        than theory battles, QQPoker fits that style well.
                      </div>
                    </details>
                  </div>

                  <h4
                    style={{
                      margin: "14px 0 8px",
                      fontSize: 14,
                      letterSpacing: 0.2,
                      color: "rgba(255, 241, 207, 0.92)",
                    }}
                  >
                    Good fit if you…
                  </h4>

                  <div className="note" style={{ marginTop: 8 }}>
                    <span>
                      - Prefer mobile poker that feels smooth and direct.
                      <br />- Want quick table access and an action-forward session.
                      <br />- Are open to modern cashier options (including crypto where available).
                    </span>
                  </div>

                  <div className="note" style={{ marginTop: 10 }}>
                    <b>Best suited for</b>
                    <span>
                      QQPoker is the pick for fast, mobile-first sessions. If you
                      want to keep it simple and play a clean session without
                      overthinking the setup, start here.
                    </span>
                  </div>

                  <div className="pick-actions">
                    <Link className="btn primary" href="/partners#qqpoker">
                      Partner details
                    </Link>
                    <Link className="btn ghost" href="/promotions">
                      Offers & promos
                    </Link>
                  </div>
                </div>
              </article>

              {/* KKPoker */}
              <article className="pick" id="kkpoker" aria-label="KKPoker profile">
                <div className="pick-head">
                  <h3 className="pick-title">
                    KKPoker — Club-style poker with a clean cashier
                  </h3>
                  <span className="pilltag">Poker</span>
                </div>

                <div className="pick-body">
                  <p className="pick-sub">
                    KKPoker blends a public lobby with club-style poker. If you
                    enjoy community tables, private games, and a more “structured”
                    feel inside the app, this is the balanced pick for everyday
                    mobile play.
                  </p>

                  <h4
                    style={{
                      margin: "14px 0 8px",
                      fontSize: 14,
                      letterSpacing: 0.2,
                      color: "rgba(255, 241, 207, 0.92)",
                    }}
                  >
                    What people like about KKPoker
                  </h4>

                  <div className="faq" style={{ gap: 10 }}>
                    <details open>
                      <summary>Clubs + public lobby in one app</summary>
                      <div className="faq-body">
                        You can play in club tables (often with a more social
                        feel) and still have access to a public lobby. It’s a
                        good match if you like variety without juggling multiple
                        apps.
                      </div>
                    </details>

                    <details>
                      <summary>Everyday-friendly setup</summary>
                      <div className="faq-body">
                        The experience is designed for regular play on mobile.
                        What you can use for deposits and withdrawals depends on
                        your country and the cashier options shown in the app.
                      </div>
                    </details>

                    <details>
                      <summary>Perks can be solid (depending on terms)</summary>
                      <div className="faq-body">
                        Perks can include up to <b>50% rakeback</b> depending on
                        the club and current terms.
                      </div>
                    </details>
                  </div>

                  <h4
                    style={{
                      margin: "14px 0 8px",
                      fontSize: 14,
                      letterSpacing: 0.2,
                      color: "rgba(255, 241, 207, 0.92)",
                    }}
                  >
                    Good fit if you…
                  </h4>

                  <div className="note" style={{ marginTop: 8 }}>
                    <span>
                      - Like club-style poker and community tables.
                      <br />- Want a balanced, easy “default pick” for mobile poker.
                      <br />- Prefer variety (private tables + public lobby) in one place.
                    </span>
                  </div>

                  <div className="note" style={{ marginTop: 10 }}>
                    <b>Best suited for</b>
                    <span>
                      KKPoker is the steady, club-style option. If you want a
                      community feel and a clean app flow for everyday sessions,
                      this is the safe default choice.
                    </span>
                  </div>

                  <div className="pick-actions">
                    <Link className="btn primary" href="/partners#kkpoker">
                      Partner details
                    </Link>
                    <Link className="btn ghost" href="/promotions">
                      Offers & promos
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Bottom note */}
        <section className="section" aria-label="Responsible note">
          <div className="container">
            <div className="note">
              <b>Reminder</b>
              <span>
                Keep it fun: set a budget, take breaks, and stop when it stops
                being enjoyable.
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
